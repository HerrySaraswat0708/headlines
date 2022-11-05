import React from 'react'



export default function NewsItem(props) {
  return (
    <>
   
      <div className="card">
      <button type="button" className="btn btn-danger position-absolute" style={{right:0}}>
  {props.source}
 
    <span className="visually-hidden">New alerts</span>
  
</button>
         <img src={props.img} className="card-img-top" alt="..." />
         <div className="card-body">
           <h5 className="card-title">{props.title.slice(0,45)}...</h5>
           <p className="card-text">
             {props.description.slice(0,88)}...
           </p>
           <p className='text-muted'>By {props.author?props.author:'unknown'} on {new Date(props.time).toGMTString()}</p> 
           <a href={props.url} target ="__blank" className="btn btn-sm btn-dark">
             Read More
           </a>
         </div>
         </div>
         
         
    </>
  )
}
