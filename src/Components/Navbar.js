import React from "react";
import "./Navbar.css";
import {Link, NavLink} from 'react-router-dom';
export default function Navbar(){
    return (
    <>
   <nav key='nav' className="navbar navbar-expand-lg bg-dark">
  <div key='container' className="container-fluid">
    <h4 key='h4' className="navbar-brand" style={{color:'white'}} >Headlines</h4>
    <button key='button1' className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span key='span1' className="navbar-toggler-icon"></span>
    </button>
    <div key='id' className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul key='ul' className="navbar-nav me-auto mb-2 mb-lg-0">
     
        <li key='li1' className="nav-item">
          <Link key='Li1'nk className="nav-link active" style={{color:'white'}} aria-current="page" to="/headlines">Home</Link>
        </li>
        <li key='li2' className="nav-item">
          <Link key='Li2'nk className="nav-link" to="/science" style={{color:'white'}}>Science</Link>
        </li>
        <li key='li3' className="nav-item">
          <Link key='Li3'nk className="nav-link active" aria-current="page" style={{color:'white'}} to="/technology">Technology</Link>
        </li>
        <li key='li4' className="nav-item">
          <Link key='Li4'nk className="nav-link" to="/sports" style={{color:'white'}}>Sports</Link>
        </li>
        <li key='li5' className="nav-item">
          <Link key='Li5'nk className="nav-link active" aria-current="page" to="entertainment" style={{color:'white'}}>Entertainment</Link>
        </li>
        <li key='li6' className="nav-item">
          <Link key='Li6'nk className="nav-link" to="business" style={{color:'white'}}>Business</Link>
        </li>
        
      </ul>
  
    </div>
  </div>
</nav>
<div key='collapse' className="collapse bg-light" id="navbarToggleExternalContent3">
  <div key='shadow' className="bg-light shadow-3 p-4">
   <button key='btn' className="btn btn-link btn-block border-bottom m-0">Link 1</button>
    <button key='btn1' className="btn btn-link btn-block border-bottom m-0">Link 2</button>
    <button key='btn2' className="btn btn-link btn-block m-0">Link 3</button> 
    <li key='li10' className="nav-item">
          <Link key='li11' className="nav-link" to="business" style={{color:'white'}}>Business</Link>
        </li>
  </div>
</div>
      
      
    </>
  );
}
