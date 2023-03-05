/* eslint-disable no-unused-vars */
import React,{useState,useEffect} from 'react'
import { Ip } from '../constants/Ip';

function MenuCard(props) {


    const AdminId="myhomedelsuperadmin@gmail.com";
    const [Data,setData] = useState()
    //console.log("hhhg")
     const  GetData = async ()=>{
        
        
      fetch(Ip+'/GetMenu?Id='+props.AdminId,{
      
      }).then(res=>res.json())
      
      .then(data=>{ 
      
         
        setData(data[0].MenuList);

        
            console.log("admin data  = = ",data[0].MenuList);
       
      }
      )
     }
       
   useEffect(()=>{
    
     GetData();
   
   },[])
   

    const UpdateMenu=()=>{
        var today = new Date()
 
   var curTime = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
    var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        fetch(Ip+"/UpdateMenu",{
          method:"PUT",
          headers: {
           'Content-Type': 'application/json'
         },
         body:JSON.stringify({
            "_id":props._id,
            "MenuList":Data,
            "UpdatedData":date,
            "UpdatedTime":curTime
         })
        })
        .then(res=>alert("Updated."))
      }
      const [item,setitem] =useState("");


    const additem=()=>{
        setData([...Data,item]);
        alert("done")
    }
    useEffect(()=>{
        console.log("refresh...")
    },[Data])

console.log("data ////// ",Data)
  return (
    <>
        {Data?
            <div>
        {Data.map((data,i)=>(
               <MenuItem ind={i} data={data} Data={Data} setData={setData}/>
            ))

            }
            <input type="text" value={item} onChange={(e)=>setitem(e.target.value)}/>
            <button onClick={additem}>Add</button>


            <div>
                <button onClick={UpdateMenu}>submit</button>
            </div>
        </div>:null

        }
    </>
  )
}


function MenuItem(props){
    const [temp,settemp]=useState(0);
    const [item,setitem]=useState(props.data);

    const Change=()=>{
        settemp(1);

    }

    const UpdateElement=()=>{
        const updatedArray = props.Data.map((element, index) => {
          if (index === props.ind) {
            return item;
          } else {
            return element;
          }
        });
        props.setData(updatedArray);
        settemp(0);
      }
    
      const RemoveElement = () => {
        console.log(props.ind);
        const newArray = props.Data.filter((element, index) => index !==props.ind);
        props.setData(newArray);
        console.log(newArray);
      }
    
   // const 
    return(
        <>
            <div className='col-12 justify-content-even'>
               {temp===0? <p className='col-4'>{item}</p>:<input type={"text"} value={item} onChange={(e)=>setitem(e.target.value)}/>

               }
                {temp===0?<button className='col-2' onClick={Change}>edit</button>:<button className='col-2' onClick={UpdateElement}>Update</button>}
               <button className='col-2' onClick={RemoveElement}>Remove</button>
               </div>
        </>
    )

}

export default MenuCard;