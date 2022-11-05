import React from "react";
import "./Navbar.css";
import {Link} from 'react-router-dom';
export default function Navbar(){
    return (
    <>
   <nav className="navbar navbar-expand-lg sticky-top navbar-light bg-dark">
  <div className="container-fluid">
  <p class="navbar-brand" to="/headlines">Headlines</p>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/headlines">Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link"to="/science">Science</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/technology">Technology</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/sports">Sports</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="entertainment">Entertainment</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="business">Business</Link>
        </li>
        
      </ul>
  
    </div>
  </div>
</nav>
<div className="collapse bg-light" id="navbarToggleExternalContent3">
  <div className="bg-light shadow-3 p-4">
  {/* <button className="btn btn-link btn-block border-bottom m-0">Link 1</button>
    <button className="btn btn-link btn-block border-bottom m-0">Link 2</button>
    <button className="btn btn-link btn-block m-0">Link 3</button> */}
    
  </div>
</div>
      
      
    </>
  );
}
