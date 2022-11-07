
import Navbar from "./Components/Navbar";
import NewsContainer from "./Components/NewsContainer";
import LoadingBar from 'react-top-loading-bar'
import {useState} from 'react'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
function App() {
  const [progress, setProgress] = useState(10)
  return (
    <>
    <LoadingBar
    color='#f11946'
    progress={progress}
    
    onLoaderFinished={() => setProgress(0)} key='loading'
  />
     <div key='div'>
        <Router key='router'>
        <Navbar key='navbar'/>
        <Routes key='routes'>
          <Route exact path="/headlines"   element={<NewsContainer setProgress = {setProgress} key='world'  pageSize={9} category='general'/>}></Route>
          <Route exact path='/science'  element={<NewsContainer setProgress = {setProgress} key='science' pageSize={9} category='science'/>}></Route>
          <Route exact path='/entertainment'  element = {<NewsContainer setProgress = {setProgress}key='entertainment' pageSize={9}  category='entertainment'/>}></Route>
          <Route exact path='/technology'  element = {<NewsContainer setProgress = {setProgress} key='technology' pageSize={9} category='technology'/>}></Route>
          <Route exact path='/sports'  element = {<NewsContainer setProgress = {setProgress} key='sports'  pageSize={9}category='sports'/>}></Route>
          <Route exact path='/business'   element = {<NewsContainer setProgress = {setProgress} key='business'  pageSize={9}category='business'/>}></Route>
        </Routes>
        </Router>
     </div>
    </>
  );
}

export default App;
