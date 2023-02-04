import React,{useState,useEffect} from 'react'
import { Ip } from './../constants/Ip';
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import openload from '../lotties/83987-active.json'
import closeloade from '../lotties/51661-closed-tag.json' 
function Users(props) {

const [Data,setData] =useState([]);
  const GetItems=()=>{
    fetch(Ip+'/GetAdmins',{
      headers:new Headers({
        Authorization:"Bearer" 
      })
      }).then(res=>res.json())
      .then(data=>{ 
      
       
        setData(data);
        console.log(data)
     
      }
      )
  }
  const GetUSers=()=>{
    fetch(Ip+'/GetUsers',{
      headers:new Headers({
        Authorization:"Bearer" 
      })
      }).then(res=>res.json())
      .then(data=>{ 
      
       
        setData(data);
        console.log(data)
     
      }
      )
  }
  const [Temp,setTemp]=useState("");
  useEffect(()=>{
     if(props.page==="Admins"){
      GetItems()
     }
     else{
      GetUSers()
     }
  },[props.page,Temp])
  return (
    <div className='row mt-5'>
    
   
    {props.page==="Admins"?
<>
    {Data.map((data)=>(
      <AdimCard setTemp={setTemp} Name={data.Name} email={data.email} Address={data.Address} PhoneNumber={data.PhoneNumber} _id={data._id} ShopStatus={data.ShopStatus}/>
    
      ))
    
      }

</>:<>{Data.map((data)=>(
     <CustomerCard Name={data.Name} email={data.email} Address={data.Address} PhoneNumber={data.PhoneNumber} _id={data._id}/>
      ))
    
      }</>
    }
 
 
      
    </div>
  )
}



function CustomerCard(props){

  const DeleteAdmin=()=>{
    alert( props._id)
   fetch(Ip+'/deleteCustomer?id='+props._id,{
      headers:new Headers({
        Authorization:"Bearer " 
      })
      }).then(res=>res.json())
      .then(data=>{ 
      
       
        alert("deleted Successfully");
        
     
      }
      )
}
  return(
    <div className='col-md-3'>
    <div class="card text-white  mb-3" style={{minHeight:"300px",boxShadow:"0 0 8px gray",maxHeight:"500px"}} >
       {props.Name?<h5 class="text-dark text-center">{props.Name}</h5>:<h5 className='text-dark text-center' >No Name</h5>}
       <hr style={{border:"1px solid black"}} />
      <div class="card-body text-dark">
        <h5 class="card-title">{props.PhoneNumber}</h5>
         {props.email?<h6 class="card-title text-truncate">{props.email}</h6>:<h6>no email id</h6>}
         {props.Address?<p class="card-text">{props.Address.split("_")[0]},{props.Address.split("_")[1]}-{props.Address.split("_")[2]}</p>:null

         }
      </div>
      <button className=' btn btn-danger text-light m-0 py-2' onClick={DeleteAdmin}>Delete</button>
    </div>
    </div>
  )
}



function AdimCard(props){

  const DeleteAdmin=()=>{
    alert( props._id)
   fetch(Ip+'/deleteAdmins?id='+props._id,{
      headers:new Headers({
        Authorization:"Bearer " 
      })
      }).then(res=>res.json())
      .then(data=>{ 
      
        props.setTemp("Deleted")
        alert("deleted Successfully");
        
     
      }
      )
}

const [se,setse]=useState(props.ShopStatus==="true"?true:false)

const UpdateShopTimes=(k)=>{
  setse(!se)
  fetch(Ip+"/OpenOrCloseShop",{
    method:"PUT",
    headers: {
     'Content-Type': 'application/json'
   },
   body:JSON.stringify({
    "Id":props._id,
    "status":k
 
   })
  })
  .then(res=> {

      if(k==="true"){
        props.setTemp("Done")
        alert("shop open")
      }else{
        
        props.setTemp("Done Agin")
        alert("shop close")
      }

  })
  props.setTemp("Done Agin Agin")
 
}
console.log()

  return(
    <div className='col-md-3'>
    <div class="card text-dark mb-3 pb-3" style={{}} >
      <h3 class="card-header ">{props.Name}</h3>
      
      <div class="card-body">
        <h5 class="card-title">{props.PhoneNumber}</h5>
          {props.email?<h6 class="card-title">{props.email}</h6>:<h6>no email id</h6>}
          {props.Address?<p class="card-text">{props.Address.split("_")[0]}</p>:null}

          {props.ShopStatus==="true"?<>

          <div  className='row col-md-12'>
            
          <p class="card-text col-md-6 text-center" style={{fontSize:25}}>shop Open </p>
                    <Player
                              autoplay
                              loop
                              src={openload}
                              className='col-md-6'
                              style={{ height: '150px', width: '150px' }}
                          >
                            
                          </Player>
          </div>
          </>: <>
           <div className='row col-12'>
           <p class="card-text col-6 text-center" style={{fontSize:25}} >shop Close </p>
               <Player
                              autoplay
                              loop
                              src={closeloade}
                              className='col-6'
                              style={{ height: '150px', width: '150px' }}
                          >
                            
                          </Player>
           </div>
          </>}

      </div>
      <div className='row'>
        <button className='btn btn-outline-danger col-4 offset-1' onClick={DeleteAdmin}>Delete</button>
      
      {props.ShopStatus==="true"?
        <button className='btn btn-outline-danger col-4 offset-1' onClick={()=>UpdateShopTimes("false")}>Close</button>
   
          :
       <button className='btn btn-outline-danger col-4 offset-1' onClick={()=>UpdateShopTimes("true")}>Open</button>
   

      }
      </div>
    </div>
   
  </div>
  )
}


export default Users;