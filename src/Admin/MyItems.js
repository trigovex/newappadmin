/* eslint-disable jsx-a11y/img-redundant-alt */
import React,{useState,useEffect} from 'react'
import { Ip } from '../constants/Ip';
import { Button, Card } from 'antd';
import Item from 'antd/lib/list/Item';

const { Meta } = Card;


function MyItems(props) {
    const [Items,setItems] = useState([]);
   // console.log(props.id)
    const GetItems=()=>{
      fetch(Ip+'/GetAdminItem?id='+props.id,{
        headers:new Headers({
          Authorization:"Bearer" 
        })
        }).then(res=>res.json())
        .then(data=>{ 
        
         
          setItems(data);
        //console.log("My items - ",data)
       
        }
        )
    }
    const [Temp,setTemp]=useState("");
    useEffect(()=>{
      GetItems();
    },[Temp])
   // console.log("sdkasn= ",Items)
  return (
    <>
      {Items.length>0?
        <div class="container-fluid">
          <div class="row mt-5   m-0 p-0">
          {Items.map((item)=>(
          
          <ItemCards 
               Name={item.ItemName} 
               ProductImage={item.ProductImage} 
               ItemPrice={item.ItemPrice}
               ItemDiscription={item.ItemDiscription}
               _id={item._id}
              ItemStatus={item.ItemStatus}
              DiscountPrice={item.DiscountPrice}

               setTemp={setTemp}
                /> 
          ))

          }


          </div>
        </div>
         :<h1>No Items</h1>

      }
    </>
  )
}


function ItemCards(props){
   // console.log(props.ProductImage)
    var ur=props.ProductImage


    
    const [Itemname,setItemname]=useState(props.Name);
    const [Itemprice,setItemprice]=useState(props.ItemPrice);
    const [Discountprice,setDiscountprice]=useState(props.DiscountPrice)


    const DeleteItem=()=>{
        fetch(Ip+'/deleteItem?id='+props._id,{
            headers:new Headers({
              Authorization:"Bearer " 
            })
            }).then(res=>res.json())
            .then(data=>{ 
            
             
              alert("deleted Succesfully");
              
           
            }
            )
    }
  
  const [Temp,setTemp]=useState(false);
 

    const UpdateItemStatus=(k)=>{
       
      fetch(Ip+"/UpdateItemStatus",{
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
            alert("Item Available")
          }else{
            
            props.setTemp("Done Agin")
            alert("Item not Available")
          }
    
      })
      props.setTemp("Done Agin Agin")
     
    }

const updateItemDetails=()=>{

  fetch(Ip+"/UpdateItemDetails",{
    method:"PUT",
    headers: {
     'Content-Type': 'application/json'
   },
   body:JSON.stringify({
    "Id":props._id,
    "ItemName":Itemname,
    "ItemPrice":Itemprice,
    "DiscountPrice":Discountprice
 
   })
  })
  .then(res=> {

      alert("Updated...");
      setTemp(false);
      props.setTemp("Done Agin Agin Agin");
  })
}
    return(


<div className="container">
  <div className='row'>
  <div className='col-md-6'>
  <div className="row justify-content-center align-items-center">
    <div className="col-md-8">
      <div className='row '>
          <div className="col-6">
              <img class="card-img-top" src={ur} alt="Card image cap" />
      
          </div>
          <div className="col-6">
                 {Temp?
                  <>
                    <input type={"text"} value={Itemname}      onChange={(e)=>setItemname(e.target.value)} placeholder="Item Name"/>
                    <input type={"text"} value={Itemprice}     onChange={(e)=>setItemprice(e.target.value)} placeholder="Item Price"/>
                    <input type={"text"} value={Discountprice} onChange={(e)=>setDiscountprice(e.target.value)} placeholder="Discount Price"/>
                  </>
                  :
                  <>
                  <p class="text-truncate font-weight-bold">{props.Name}</p>
                  <p class="text-danger">Price - ₹{props.ItemPrice}</p>
                  <p class="text-danger">Discount Price- ₹{props.DiscountPrice}</p>
                  </>

                 }
            
          </div>
      </div>
    </div>
    <div className="col-md-4 ">
             <div className='row justify-content-between '>
              {!Temp?
                <button class="btn btn-primary col-4 col-md-12" onClick={DeleteItem}>Delete</button>
            :null
                
              }  
              {Temp?
                <button class="btn btn-success  col-4 col-md-12" onClick={updateItemDetails}>Update</button>
               
              :
              <button class="btn btn-success  col-4 col-md-12" onClick={()=>setTemp(true)}>Edit</button>
               
              }
               
             {!Temp?
              <>
              {props.ItemStatus==="true"?

                    <>
                    <button class="btn btn-danger  col-4 col-md-12 " onClick={()=>UpdateItemStatus("false")}>Disable</button>
                    </>
                    :
                    <>
                                
                    <button class="btn btn-warning   col-4 col-md-12" onClick={()=>UpdateItemStatus("true")}>Enable</button>
                    </>
                              
                    }
              </>:null

             }
             </div>
    </div>
  </div>
  </div>
      
  </div>
</div>
     


 
                  
    )
  }
export default MyItems;


/*

 




  
      <div class="col-md-3">
      <div class="card p-2 cd ml-3" style={{width: '25rem',border: '2px solid hotpink'}}>
          <img class="card-img-top" src={ur} alt="Card image cap" />
          <div class="card-body">
            <div class="row">
              <p class="col-9 text-truncate font-weight-bold">{props.Name}</p>
              <p class="col-3 text-danger">₹{props.ItemPrice}</p>
            </div>
            <div class="row d-flex justify-content-between">
              
                  <button class="btn btn-danger col-3" onClick={DeleteItem}>Delete</button>
              
                  <button class="btn btn-info col-4" onClick={updateItemDetails}>Edit</button>
                   {props.ItemStatus==="true"?

                   <>
                   <button class="btn btn-info col-4" onClick={()=>UpdateItemStatus("false")}>Disable</button>
                   </>
                   :
                   <>

                   <button class="btn btn-info col-4" onClick={()=>UpdateItemStatus("true")}>Enable</button>
                   </>

                   }
              
            </div>
          </div>
        </div>
  </div>
*/