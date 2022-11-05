import React from "react";
import "./Navbar.css";
import {Link} from 'react-router-dom';
export default function Navbar(){
    return (
    <>
   
      <nav className="navbar sticky-top navbar-expand-lg bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" style={{color:'white'}} >
            Headlines
          </Link>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active"  style={{color:'white'}} aria-current="page" to="">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active"  style={{color:'white'}} aria-current="page" to="/technology">
                  Technology
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active"  style={{color:'white'}} aria-current="page" to="/sports">
                  Sports
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active"  style={{color:'white'}} aria-current="page" to="/science">
                  Science
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active"  style={{color:'white'}} aria-current="page" to="/business">
                  Business
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active"  style={{color:'white'}} aria-current="page" to="/entertainment">
                  Entertainment
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      
      
    </>
  );
}
