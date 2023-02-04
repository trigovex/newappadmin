/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import Orders from './Orders';
import { useNavigate } from 'react-router-dom';

function SuperAdminPanel(props) {
  let navigate = useNavigate();
  const  logout =()=>{
    localStorage.removeItem("token") 
     navigate('/Login')
   
 }
  return (
    <div className='container'>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Admin Panel</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" onClick={()=>props.changer("DashBoard")}>Dashbord</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active"  onClick={()=>props.changer("Profile")}>Profile</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active"  onClick={()=>props.changer("Delivery charges")}>Delivery charges</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="#" tabindex="-1" aria-disabled="true" onClick={()=>props.changer("Add Admins")}>Add/Admin</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" onClick={()=>props.changer("Users")}>
            Users
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#"  onClick={()=>props.chan("Customers")} >Customer</a></li>
            <li><a class="dropdown-item" href="#" onClick={()=>props.chan("Admins")}>Admin</a></li>
          </ul>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" onClick={()=>props.changer("Orders")}>
            Orders
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" onClick={()=>props.chan("Pending")} >Pending</a></li>
            <li><a class="dropdown-item" onClick={()=>props.chan("Accepted")} >Accepted</a></li>
            <li><a class="dropdown-item" onClick={()=>props.chan("Declain")} >Declined</a></li>
            <li><a class="dropdown-item" onClick={()=>props.chan("Delivered")} >Delivered</a></li>
          </ul>
        </li>

        
        <li class="nav-item" style={{backgroundColor:'green',width:70,borderRadius:10,textAlign:'center'}}>
          <a class="nav-link active"  style={{color:'white'}} onClick={logout}>Logout</a>
        </li>
      </ul>
      
    </div>
  </div>
</nav>
    </div>
  )
}


function AdminPanel(props) {
  let navigate = useNavigate();
  const  logout =()=>{
    localStorage.removeItem("token") 
     navigate('/Login')
   
 }
  return (
    <div className='container'>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Admin Panel</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" onClick={()=>props.changer("DashBoard")}>Dashbord</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active"  onClick={()=>props.changer("Profile")}>Profile</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active"  onClick={()=>props.changer("Add Items")}>Add Items</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active"  onClick={()=>props.changer("MyItems")}>My Items</a>
        </li>
        
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" onClick={()=>props.changer("Orders")}>
            Orders
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" onClick={()=>props.chan("Pending")} >Pending</a></li>
            <li><a class="dropdown-item" onClick={()=>props.chan("Accepted")} >Accepted</a></li>
            <li><a class="dropdown-item" onClick={()=>props.chan("Declain")} >Declined</a></li>
            <li><a class="dropdown-item" onClick={()=>props.chan("Delivered")} >Delivered</a></li>
          </ul>
        </li>


        <li class="nav-item" style={{backgroundColor:'green',width:70,borderRadius:10,textAlign:'center'}}>
          <a class="nav-link active"  style={{color:'white'}} onClick={logout}>Logout</a>
        </li>
      </ul>
      
    </div>
  </div>
</nav>
   
    </div>
  )
}


export  {AdminPanel,SuperAdminPanel};