import React,{useState,useEffect} from 'react'
import { Ip } from './../constants/Ip';
import { useLocation, useNavigate } from 'react-router-dom';

function DeliveryCharges(props) {


    const [charges,setcharges] =useState([]);
    const [se,setter]=useState(false);

    
const [AreaName,setAreaName]=useState("");
const [Price,setPrice]=useState("");

    const GetCharges=()=>{
   //GetAreaCharges
   
    
   fetch(Ip+'/GetAllCharges',{
     headers:new Headers({
       Authorization:"Bearer " 
     })
     }).then(res=>res.json())
     .then(data=>{ 
     
      
      
      console.log("dataaaa = ",data);
       if(data.Status==="No"){
         setter(false)
       }
       else{
         setter(true)
         setcharges(data);
       }
        
     }
     )
    }
    
   const [Temp,setTemp]=useState("false");
    useEffect(()=>{
     GetCharges();
    },[Temp])
 

const AddCharges=()=>{
    fetch(Ip+"/AddAreaCharges",{
        method:"POST",
        headers: {
         'Content-Type': 'application/json'
       },
       body:JSON.stringify({
        "AreaName":AreaName,
        "Price":Price
  
       })
      })
      .then(res=>{
    
        console.log("done",res);
         alert("Data Added...");
         setAreaName("");
         setPrice("");
         setTemp("Temp");
      })
}

  return (
     <>
<h1 className='mt-3'>Add New Area Charges</h1>
     <div >
     <form className='row col-md-12'>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Area Name</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={AreaName} onChange={(e)=>setAreaName(e.target.value)}/>
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Price</label>
    <input type="text" class="form-control" id="exampleInputPassword1" value={Price} onChange={(e)=>setPrice(e.target.value)} />
  </div>
   
  
</form>
   <button type="submit" class="btn btn-primary" onClick={AddCharges}>Add</button>      
     </div>

{props.Data.Role==="SuperAdmin"?

<div  className='col-md-6'>
     <h1>Area Ways Charges</h1>
     {se?<DisplayTable data={charges} setTemp={setTemp}/>:<p>No Data</p>

     }
</div>:null

}
     </>
  )
}


function DisplayTable(props){
    return(
        <table class="table" border={2}>
  <thead>
    <tr>
      <th scope="col">So. no</th>
      <th scope="col">Area Name</th>
      <th scope="col">Price</th>
      <th scope="col">Options</th>
    </tr>
  </thead>
  <tbody>
    {props.data.map((da,i)=>(
        <TableRow data={da} i={i} setTemp={props.setTemp}/>
    ))

    }
    
  </tbody>
</table>
    )
}


function TableRow(props){

const [Temp,setTemp]=useState(false);
const [AreaName,setAreaName]=useState(props.data.AreaName);
const [Price,setPrice]=useState(props.data.Price);
    const DeleteItem=()=>{
        fetch(Ip+'/deleteCharges?id='+props.Data._id,{
            headers:new Headers({
              Authorization:"Bearer " 
            })
            }).then(res=>res.json())
            .then(data=>{ 
            
             
              alert("deleted Successfully");
              
           props.setTemp("Deleted")
            }
            )
            props.setTemp("Deleted done")
    }
  
    //UpdateCharges


    
const UpdateDetails=(e)=>{
    fetch(Ip+"/UpdateCharges",{
      method:"PUT",
      headers: {
       'Content-Type': 'application/json'
     },
     body:JSON.stringify({
      "Id":props.data._id,
      "AreaName":AreaName,
      "Price":Price
     })
    })
    .then(res=>{
        
        alert("Updated.")
        props.setTemp("Updated") 
        setTemp(false)
    })
    props.setTemp("Updated agin")   
  }
  
  
    return(
        <tr>
        <th scope="row">{props.i+1}</th>
        {Temp?

            <>
             <td> <input type={"text"} value={AreaName} onChange={(e)=>setAreaName(e.target.value)}/></td>
            <td>  <input type={"text"} value={Price} onChange={(e)=>setPrice(e.target.value)}/></td>
            </>
        :
             <>
            <td>{props.data.AreaName}</td>
                    <td>{props.data.Price}</td>
            </>
        }
        <td className='row justify-content-evenly col-md-12'><p className='bg-danger text-center col-md-6' style={{color:'white' ,borderRadius:10,cursor:'pointer'}} onClick={DeleteItem}>Delete</p> {!Temp? <p className='bg-primary text-center col-md-6' style={{color:'white', borderRadius:10,cursor:'pointer'}} onClick={()=>setTemp(!Temp)}>Edit</p>: <p className='bg-primary text-center col-md-6' style={{color:'white', borderRadius:10,cursor:'pointer'}} onClick={UpdateDetails}>Update</p>}</td>
         
      </tr>
    )
}
export default DeliveryCharges;