/* eslint-disable jsx-a11y/alt-text */
import React,{useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom';


import { getDatabase, set ,push,child,onValue} from "firebase/database";
import { storage ,databaseref,app,auth,database} from '../firebase';
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import {Helmet} from "react-helmet";
import { Ip } from './../constants/Ip';

function AdminProfile(props) {
    let navigate = useNavigate();
  const  logout =()=>{
    localStorage.removeItem("token") 
     navigate('/Login')
   
 }

 const [charges,setcharges] =useState([]);
 const [se,setter]=useState(false);
 

  
   
   
 

const [Temp,setTemp] =useState(false);
  return (
    <div className='container'>
    <div className='align-items-center' style={{height:"75vh"}}>
      <div className='align-items-center'>
        <div className='col-12'>
        <img className='container-fluid' src={props.Data.ShopPhoto?props.Data.ShopPhoto:'https://d4t7t8y8xqo0t.cloudfront.net/resized/750X436/eazytrendz%2F2927%2Ftrend20200831092220.jpg'} style={{ borderRadius:"25px"}} />
        </div>
        
      </div>
      <div  style={{borderBottom:"2px solid green",marginTop:'2%'}}></div>
      <div className='container row col-md-12'>
          <div className='col-md-6'>
                <h3 className='m-0'>{props.Data.Name}</h3>
              <h3 className='m-0'>{props.Data.email}</h3>
              <h3 className='m-0'>{props.Data.PhoneNumber}</h3>
              <h3 className='m-0'>{props.Data.ShopName}</h3>
              <h3 className='m-0'>{props.Data.Address}</h3>
      
              <button   className='btn btn-primary' onClick={()=>setTemp(!Temp)}><p style={{color:'white'}}>Update Details</p></button>
      {Temp? <UpdateData Data={props.Data}/>:null

      }
          </div>
           {props.Data.Role==="SuperAdmin"?

           <div  className='col-md-6'>
                <h1>Area Ways Charges</h1>
                {se?<p>data found</p>:<p>No Data</p>

                }
          </div>:null

           }
      </div>
               
       
    </div>
    
     
     
  </div>
  )
}


function UpdateData(props){


  
 const [imgUrl, setImgUrl] = useState(null);
 const [progresspercent, setProgresspercent] = useState(0);


 var p = null;
 const handleSubmit = (e) => {
   e.preventDefault()
   const file = e.target[0]?.files[0]
   if (file){  
   const storageRef = ref(storage, `files/${file.name}`);
   const uploadTask = uploadBytesResumable(storageRef, file);
   
   uploadTask.on("state_changed",
     (snapshot) => {
       const progress =
         Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
       setProgresspercent(progress);
     },
     (error) => {
       alert(error);
     },
     () => {
       getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
         setImgUrl(downloadURL)
         p = downloadURL;
         console.log(p);
         UpdateDetails(p);
         
       });
     }
   );
  } 
  else{
    UpdateDetails2();
  }
 }


const UpdateDetails=(e)=>{
  fetch(Ip+"/UpdateAdminDetails",{
    method:"PUT",
    headers: {
     'Content-Type': 'application/json'
   },
   body:JSON.stringify({
    "Id":props.Data._id,
    "Name":Name,
    "PhoneNumber":PhoneNumber,
    "ShopName":ShopName,
    "Address":Address,
    "ShopPhoto":p,
    "Deliverycharges":Charges,
    "DeliveryTime":Time
   })
  })
  .then(res=>alert("Updated."))
}



const UpdateDetails2=()=>{
  fetch(Ip+"/UpdateAdminDetails",{
    method:"PUT",
    headers: {
     'Content-Type': 'application/json'
   },
   body:JSON.stringify({
    "Id":props.Data._id,
    "Name":Name,
    "PhoneNumber":PhoneNumber,
    "ShopName":ShopName,
    "Address":Address,
    "ShopPhoto":ShopPhoto,
    "Deliverycharges":Charges,
    "DeliveryTime":Time
   })
  })
  .then(res=>alert("Updated."))
}

const [Name,setName] = useState(props.Data.Name);
const [PhoneNumber,setPhoneNumber] =useState(props.Data.PhoneNumber);
const [ShopName,setShopName] =useState(props.Data.ShopName);
const [Address,setAddress] =useState(props.Data.Address);
const [ShopPhoto,setShopPhoto] =useState(props.Data.ShopPhoto);
const [Charges,setCharges] =useState(props.Data.Deliverycharges);
const [Time,setTime] =useState(props.Data.DeliveryTime);
console.log(props.Data._id);
  return(
    <div className='container mt-3'>


      <div className='row col-12'>
        <label><strong>Admin Name</strong></label>
        <input type={"text"} className="col-sm-6 col-md-4"  style={{borderRadius:15}} value={Name} onChange={(e)=>setName(e.target.value)}/>
      </div>
      <div className='row col-12'>
        <label><strong>Shop Name</strong></label>
        <input type={"text"} className="col-sm-6 col-md-4"   style={{borderRadius:15}} value={ShopName} onChange={(e)=>setShopName(e.target.value)}/>
      </div>
      <div  className='row col-12'>
        <label><strong>Phone Number</strong> </label>
        <input type={"text"} className="col-sm-6 col-md-4"   style={{borderRadius:15}} value={PhoneNumber} onChange={(e)=>setPhoneNumber(e.target.value)}/>
      </div>
      <div  className='row col-12'>
        <label><strong>Charges</strong> </label>
        <input type={"text" } className="col-sm-6 col-md-4"   style={{borderRadius:15}} value={Charges} onChange={(e)=>setCharges(e.target.value)}/>
      </div>
      <div  className='row col-12'>
        <label><strong>Address</strong></label>
        <input type={"text"} className="col-sm-6 col-md-4"   style={{borderRadius:15}} value={Address} onChange={(e)=>setAddress(e.target.value)}/>
      </div>
      <div className='row col-12'>
        <label><strong>Delivery Time</strong></label>
        <input type={"text"} className="col-sm-6 col-md-4"   style={{borderRadius:15}} value={Time} onChange={(e)=>setTime(e.target.value)}/>
      </div>

       <form onSubmit={handleSubmit} className='form'>
      <div className='row col-12'>
      <label><strong>Shop Photo</strong></label>
                <input type='file'  className="col-sm-6 col-md-4"/>
              </div>
       
        <button type='submit' class="btn btn-outline-primary text-center" >UPDATE</button>
      </form>
    </div>
  )
}

export default AdminProfile;