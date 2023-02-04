import React,{useState,useEffect} from 'react'
import { Ip } from './../constants/Ip';
import Loader from './Loader';
import lode from '../lotties/117472-no-orders-by-hussain.json';
function Orders(props) {
  const [Items,setItems] = useState([]);
  const [DisplayType,setDisplayType] =useState(props.Ordertype)
  console.log(props.userdata.Role)


  const [OrderId,setOrderId] =useState("All");


    const GetItems=()=>{

      if(props.userdata.Role==="SuperAdmin")
      {
        fetch(Ip+'/FindOrderForSuperAdminByOrderId?id='+props.Ordertype+"&orderid="+OrderId,{
          headers:new Headers({
            Authorization:"Bearer " 
          })
          }).then(res=>res.json())
          .then(data=>{ 
          
           
            setItems(data);
            if(data.length>0){
              setStatus(1)
            }
            else if(data.length===0){
              setStatus(2)
            }
            console.log("data = ",data);
             
          }
          )
          
      }
      else{
        fetch(Ip+'/FindOrderForAdminByOrderId?id='+props.Ordertype+"&orderid="+OrderId+"&Adminid="+props.id,{
          headers:new Headers({
            Authorization:"Bearer " 
          })
          }).then(res=>res.json())
          .then(data=>{ 
          
           
            setItems(data);
            if(data.length>0){
              setStatus(1)
            }
            else if(data.length===0){
              setStatus(2)
            }
            console.log("data = ",data);
             
          }
          )

      }
    }

    const [Status,setStatus] =useState(0);

    useEffect(()=>{
     
        GetItems();
        
    },[props.Ordertype,OrderId])



   useState(()=>{
  
    
      GetItems();
 
   }) 
 
   
  return (
     <>
          <div class="input-group mb-3 col-12 text-center mt-3 d-flex justify-content-center" >
                  <div class="input-group-prepend">
                    <span class="input-group-text" id="basic-addon1">OrderId</span>
                  </div>
                 <div>
                 <input type="text" value={OrderId} onChange={(e)=>setOrderId(e.target.value)}   class="form-control col-6" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
                 </div>
            </div>
       {Status===2?
          <h1>No Orders {props.Ordertype}/Or Orders in Progress Or Invalid Order Id</h1>:null
       }
      {Items?  
      <div className='container mt-5'> 
            
      {Items.map((item)=>(
        
          
          <ItemCards 
            CustomerName={item.CustomerName}
            ContactNo={item.ContactNo}
            orderList={item.orderList.split(",")}
            Amount={item.Amount}
            CustomerAddress={item.CustomerAddress}
            CurrentLocation={item.CurrentLocation}
            CustomerId={item.CustomerId}
            DeliveryManId={item.DeliveryManId}
            OrderStatus={item.OrderStatus}
            id={item._id}
            displaytype={props.Ordertype}
            ShopName={item.ShopName}
            OrderTime={item.OrderTime}


                /> 
       ))

       }
       </div>
      :null
       
      }

      {Status===0? <Loader/>: 
            null
      }
     
     </>
  )
}





function ItemCards(props){



  const AcceptOrDeclain=(status)=>{
   
    fetch(Ip+"/OrderAcceptanceStatus",{
      method:"PUT",
      headers: {
       'Content-Type': 'application/json'
     },
     body:JSON.stringify({
       "orderId":props.id,
       "status":status
     })
    })
    .then(res=>{

        statusupdate(status)
        alert("Order "+status);
    })
  }

  const [statusupdate,setstatusupdate]=useState("");
 var items=props.orderList[0].split("*")
 items = items.filter(e=>e!=="")
 
  return(
    <div>


   

      {props.OrderStatus===props.displaytype? 
      
      <>

        
<div class="container">
        <div class="row rw  nav ">
            <div class="col-12 ">
                <div class="row  justify-content-center d-flex align-items-center">
                    <div >
                    <div class="col col-12">
                        <div class="row">
                            <div class="col-12">
                            <h2 style={{color:'green'}}>{props.ShopName} </h2> 
                            <h2> Order Time:-    {props.OrderTime}</h2>
                                <p>Customer Name:- {props.CustomerName}</p>
                                <p>Contact No:- {props.ContactNo}</p>
 						                    <p>Total Amount:- {props.Amount}</p>
                                <p>Address:- {props.CustomerAddress}</p>
                            </div>
                        </div>
                    </div>
                    </div>

                    
                    <div class="col col-12">
                        {items.map((item,i)=>(
                           <div  className='col-12 row' >
                              <p className='col-4' style={{fontWeight:'bold' }}>{item.split("_")[0]}</p>
                              <p className='col-4' style={{fontWeight:'bold' }}>Rs. {item.split("_")[1]}</p>
                              <p className='col-4' style={{fontWeight:'bold' }}>x{item.split("_")[2]}</p>
                           </div>
                        ))

                        }
                    </div>
                    <div class="col-md-3 col-4 ">
                        <button class="btn btn-secondary">Order Status:- {props.OrderStatus}</button>
                    </div>
                    <div class="col-8 col-md-3">
                         {props.OrderStatus==="Delivered"?<h2>Done</h2>:
                          null

                         }

                         {props.OrderStatus==="Accepted"?

                         <h2>Waiting...</h2>:null

                         }
                         {props.OrderStatus==="AcceptedByDeliveryBoy"?

                          <h2>Accepted By DeliveryBoy</h2>:null

                          }


                         {props.OrderStatus==="Pending"?

                         <div class="row">
                            {statusupdate===""?
                              <>
                              <button class="btn btn-danger col-12"  onClick={()=>AcceptOrDeclain("Declain")}>Declain</button>
                                <button class="btn btn-info col-12 mt-2" onClick={()=>AcceptOrDeclain("Accepted")}>Accept</button>
                                  
                              </>:null
                            }
                            {statusupdate==="Declain"?
                              <>
                                    <h2>Order Declined</h2>
                                  
                              </>:null
                            }
                            {statusupdate==="Accepted"?<h2>Order Accepted</h2>:null

                            }
                        </div>:null

                         }

                         {props.OrderStatus==="Declain"?

                          <h2>Order Declined</h2>:null

                         }
                    </div>
                </div>
            </div>
        </div>
    </div>
    <hr   />
       
      </>
      
      :null

      }

      {

      }
     
    </div>
  )
}




function OrderDetails(props){

  const [statusupdate,setstatusupdate]=useState("");
  const AcceptOrDeclain=(status)=>{
   
    fetch(Ip+"/OrderAcceptanceStatus",{
      method:"PUT",
      headers: {
       'Content-Type': 'application/json'
     },
     body:JSON.stringify({
       "orderId":props.id,
       "status":status
     })
    })
    .then(res=>{

        statusupdate(status)
        alert("Order "+status);
    })
  }
  return(
    <div>
  <h1>hiii</h1>
    </div>
  )
}
export   {Orders,OrderDetails};