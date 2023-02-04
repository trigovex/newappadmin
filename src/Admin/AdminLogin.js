/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-unused-vars */
import React,{useEffect,useState} from 'react'
import Lodi from '../images/95530-password.json'
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import {
  NavLink
} from "react-router-dom";
import { Button } from 'antd';
import {useNavigate} from "react-router-dom";
import { Ip } from '../constants/Ip';
import TextAnimation from './../components/TextAnimation';
import Img from '../images/WhatsApp Image 2022-09-06 at 10.45.23 PM.jpeg'
import Chef from '../images/H LOGO copy.png'
import '../css/loginstyles.css'

function Login() {
  let navigate = useNavigate();

  const detectLogin= async ()=>{
    const token =   localStorage.getItem('token')
    console.log("login = ",token)
        if(token){
          navigate('/Dashboard');
        }
        else{
          setScreen(0);
        }
        
        
  }
  useEffect(()=>{
  
    detectLogin();
},[])



  const [email,setEmail] = useState('');
const [password,setPassword]=useState('')


const sendCred = async (props)=>{
fetch(Ip+"/AdminSignin",{
  method:"POST",
  headers: {
   'Content-Type': 'application/json'
 },
 body:JSON.stringify({
   "email":email,
   "password":password
 })
})
.then(res=>res.json())
.then(async (data)=>{
       try {
          localStorage.setItem('token',data.token)
          console.log(data.token)
          console.log("loged")
          navigate('/Dashboard');
       } catch (e) {
         console.log("error hai",e)
          
       }
})
}
console.log(Ip+"/AdminSignin")
const [Screen,setScreen] = useState(1);
  return (
    <div className='login_page_back_'>
    <div className='login_header_ row m-0'>
        <div className='text-center col-12'>
            <img className='img-fluid' src={Chef}  style={{overflow:"hidden"}} width="220" />
        </div>
         <p  style={{fontSize:25,fontWeight:'bold',textAlign:'center'}}>INFA DELIVERY</p>
    </div>

    <div className='row'>
        <div className='container col-12 text-center mb-2 mt-5 d-flex justify-content-evenly'>
                <p className='  font-weight-bold login_signup_text px-5' style={{textDecoration:"none",cursor:"pointer"}}  >Signup</p>
                 

            </div>
    </div>

    <div className='container text-center login_form_cont_ mt-3'>
        
        
          <div className='bg-light p-4 px-5  mb-md-0 mb-5 ' style={{display:"inline-block",minWidth:"60%",maxWidth:"100%",borderRadius:"15px",boxShadow:"0 0 10px lightgray"}}>
          



          <div className='row'>

                            <h4 className='col-12 text-left pb-4' style={{borderBottom:"1px solid gray"}} >Signup</h4>
                        </div>
        <form >
  
       

                <div className='row'>
                    <label className='col-12' style={{textAlign:"left"}}>Email Address</label>
                </div>
                <input type={"text"} placeholder="Enter your email" value={email} onChange={(e)=> setEmail(e.target.value)} style={{border:"1px solid gray",borderRadius:"50px",backgroundColor:"white",padding:"8px",marginBottom:"10px",width:"100%"}} required   /><br />
              
               <div className='row'>
                    <label className='col-12' style={{textAlign:"left"}}>Password</label>
                </div>
                <input type={"Password"} placeholder="Enter Password"  value={password} onChange={(e)=> setPassword(e.target.value)}  style={{border:"1px solid gray",borderRadius:"50px",backgroundColor:"white",padding:"8px",marginBottom:"10px",width:"100%"}}  /><br />
              
                         
  </form>
  <div className='row'>
            <button  className='col-md-2 col-6 offset-3 offset-md-5 login_button_ mt-5' style={{fontSize:20}}   onClick={sendCred}>Login</button>
        </div>
  </div>
                       
  </div>
       
</div>

  )
}

export default Login;