import React, { useEffect, useState ,useRef} from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";

export default function NewsContainer(props) {
  // Declaring states
  const [articles, setArticles] = useState([]);
  const [totalResults, setResults] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const Capitalize = (word)=>{
    return word.charAt(0).toUpperCase() + word.slice(1);
  }

  // Function to fetch data from API
  const fetchData = async () => {
    try {
      props.setProgress(10)
      const url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&page=${page}&pageSize=9&apiKey=6168098497e440d786a533aa384fdb20`;
      setLoading(true);
      const response = await fetch(url);
      const json = await response.json();
      props.setProgress(50)
      setArticles(json.articles);
      setResults(json.totalResults);
      setLoading(false);
      props.setProgress(100)
    } catch (error) {
      
    }
  };
  const fetchMoreData = async () => {
    try {
      const url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&page=${page + 1}&pageSize=9&apiKey=6168098497e440d786a533aa384fdb20`;
      setPage(page + 1);
      
      const response = await fetch(url);
      const json = await response.json();
      
      setArticles(articles.concat(json.articles));
      
      setResults(json.totalResults);
      setLoading(false);
    } catch (error) {
     
    }
  };
  // UseEffect - Runs after return only once if dependency array is [] else whenever the content of dependency array changes
  useEffect(() => {
    fetchData();
  }, []);
  const ref = useRef(null)
  
  return (
    <>
     
     
      <h2 className="my-3 text-center">Today's Top {props.category==='general'?'':Capitalize(props.category)} Headlines :</h2>
        
        {loading && <Spinner key={"loading"} />}

        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          style={{}} //To put endMessage and loader to the top.
          // inverse={true} //
          hasMore={articles.length !== totalResults}
          loader={<Spinner />}
          //scrollableTarget="scrollableDiv"
          >
          <div className="container ">
          {console.log(articles.length,totalResults)}

          <div className="row my-5 ">
            {articles.filter((element)=>{return(element.description!==null && element.urlToImage!==null)}).map((element) => {
              return (
                <>
                    <div className="col-md-4 my-2">
                      <NewsItem
                        key={element.content}
                        img={element.urlToImage}
                        title={element.title.slice(0, 45)}
                        description={element.description.slice(0, 88)}
                        url={element.url}
                        author={element.author}
                        time={element.publishedAt}
                        source={element.source.name}
                        />
                    </div>
                  </>
                );
              })}
              </div>
          </div>
        </InfiniteScroll>

          {/* <button
            disabled={pageNo === 1}
            className="btn btn-sm btn-dark"
           
          >
            &laquo; Previous
          </button>
          <button
            disabled={
              pageNo + 1 >
              Math.ceil(
                articles.filter(
                  (element) =>
                    element.description != null && element.urlToImage !== null
                ).length / props.pageSize
              )
            }
            className="btn btn-sm btn-dark"
       
          >
            Next &raquo;
          </button> */}
        
      
    </>
  );
}
