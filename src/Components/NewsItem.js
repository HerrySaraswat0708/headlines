import React from 'react'



export default function NewsItem(props) {
  return (
    <>
   
      <div key='card' className="card">
      <button key='button' type="button" className="btn btn-danger position-absolute" style={{right:0}}>
  {props.source}
 
    <span key='span' className="visually-hidden">New alerts</span>
  
</button>
         <img key='imgtag' src={props.img} className="card-img-top" alt="..." />
         <div key='body' className="card-body">
           <h5 key='h5'  className="card-title">{props.title.slice(0,45)}...</h5>
           <p key='text' className="card-text">
             {props.description.slice(0,88)}...
           </p>
           <p key='muted' className='text-muted'>By {props.author?props.author:'unknown'} on {new Date(props.time).toGMTString()}</p> 
           <a key='a' href={props.url} target ="__blank" className="btn btn-sm btn-dark">
             Read More
           </a>
         </div>
         </div>
         
         
    </>
  )
}
