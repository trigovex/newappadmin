/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {
  useNavigate ,
  BrowserRouter,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
function NavBar(props) {
  return (
    <header className='header_'>

    <nav class="container navbar navbar-expand-lg navbar-dark">
      <a class="navbar-brand" href="#">My Homedel</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item active">
            <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
          </li>
           
          <li class="nav-item active">
            <NavLink to="/Profile"> <h5 class="nav-link">{props.User}</h5></NavLink>
          </li>
        </ul>
      </div>
    </nav>
    
    <div className='brand_ mt-5'>
        <h1 className='text-center' style={{color:'white'}}>My Homedel</h1>
    </div>

    <div className='des_ text-center mt-5'  >
        <h3 style={{color:"white"}}>Discover the best food & drinks in Hyderabad</h3>
    </div>


      <div className='search_ container mt-4'>
          <div className=' text-center'>
                      <div class="dropdown">
                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Locations
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <a class="dropdown-item" href="#">Narspur</a>
                  <a class="dropdown-item" href="#">Palakolu</a>
                  <a class="dropdown-item" href="#">Seetharampurams</a>
                </div>
      </div>

            <div className=''>
                
                    <input className='p-1' type={"text"} placeholder={"Search for restaurant, cuisine or a dish"} id="search_bar" />   
                
            </div>
        </div>
    </div>

</header>
  )
}

export default NavBar;