import React,{useEffect,useState} from 'react'
 
 
import App from '../components/Statistics'
import { Ip } from './../constants/Ip';

function MainDashBoardScreen() {


  const [Data,setData]=useState([]);

  const GetRes=()=>{
    fetch(Ip+'/GetRestorentsForAdmins?id=All',{
      headers:new Headers({
        Authorization:"Bearer " 
      })
      }).then(res=>res.json())
      .then(data=>{ 
      
       
         //console.log("res data  = = = ",data)
         setData(data)
          }
      )
  }

  useEffect(()=>{

    GetRes();

  })

 
    return(
        <App   data={Data}/>
    )  
}


 

export default MainDashBoardScreen;