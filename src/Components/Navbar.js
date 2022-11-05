import React from "react";
import "./Navbar.css";
import {Link} from 'react-router-dom';
export default function Navbar(){
    return (
    <>
   <nav class="navbar navbar-expand-lg bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" style={{color:'white'}}>Headlines</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
     
        <li className="nav-item">
          <Link className="nav-link active" style={{color:'white'}} aria-current="page" to="/headlines">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/science" style={{color:'white'}}>Science</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" style={{color:'white'}} to="/technology">Technology</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/sports" style={{color:'white'}}>Sports</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="entertainment" style={{color:'white'}}>Entertainment</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="business" style={{color:'white'}}>Business</Link>
        </li>
        
      </ul>
  
    </div>
  </div>
</nav>
<div className="collapse bg-light" id="navbarToggleExternalContent3">
  <div className="bg-light shadow-3 p-4">
   <button className="btn btn-link btn-block border-bottom m-0">Link 1</button>
    <button className="btn btn-link btn-block border-bottom m-0">Link 2</button>
    <button className="btn btn-link btn-block m-0">Link 3</button> 
    <li className="nav-item">
          <Link className="nav-link" to="business" style={{color:'white'}}>Business</Link>
        </li>
  </div>
</div>
      
      
    </>
  );
}
