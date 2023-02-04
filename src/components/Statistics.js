import React,{useState,useEffect} from 'react';
import { Chart as ChartJS, registerables } from 'chart.js';
import { Chart } from 'react-chartjs-2';
 
import { Ip } from './../constants/Ip';
 
ChartJS.register(...registerables);

const App = (props) => {

  const [heads,setHeads] = useState(["RESTAURANT NAME","NO OF ORDERS","COMPLETED ORDERS","AMOUNT"])
  

  return (
    <div className='container-fluid py-3 px-5' style={{height:"auto",background:"rgba(0,0,0,0.07)"}}>
      {/*<div className='container-fluid col-md-6 mt-5'>
        <div className='row justify-content-evenly'>
            <div className='col-md-6 mt-5'>
            <h2 className='mt-3'>Last 6 Months Analytics</h2>
               <BarChart/>
            </div>
            <div className='col-md-6 mt-5'>
            <h2 className='mt-3'>Last 6 Months Analytics</h2>
                <PieChart/>
            </div>
        </div>
        </div>*/}
       <TableData data={props.data} heads={heads}/>
    </div>
  );
};




function TableData(props){


  const [temp,settemp] = useState(1);
  return(
    <>
<div className='bg-light m-0 mt-5 p-3 ' style={{width:"100%"}}>
        <table class="table table-sm p-x-1 m-0">
          <thead>
            <tr>
              {props.heads.map((items)=>(
                <>
                  <th scope="col">{items}</th>
                </>
              ))}
            </tr>
          </thead>
          <tbody>

            {props.data.map((items)=>(
               <>
               {items.Role==="Admin"?


                  <tr>
                  
                  <td>{items.ShopName}</td>
                   <Counter id={items.AdminId}/>
                  </tr>:null

                  }
               </>
            ))}
          </tbody>
        </table>
      </div>
      
    </>
  )
}




function Counter(props){

  
      const [Data1,setData1]=useState([]);

      const [Data2,setData2]=useState([]);
      const [Sum,setSum]=useState(0);

      const [D,setD]=useState()
      const GetOrders1=()=>{
        fetch(Ip+'/GetOrderAnalytics?id='+props.id,{
          headers:new Headers({
            Authorization:"Bearer " 
          })
          }).then(res=>res.json())
          .then(data=>{ 
          
          
            console.log("Orders data  = = = ",data)
            setData1(data)
            //Summ(data)
              }
          )
      }


      const GetOrders2=()=>{
        fetch(Ip+'/GetOrderAnalytics?id='+props.id+"&Type='Delivered'",{
          headers:new Headers({
            Authorization:"Bearer " 
          })
          }).then(res=>res.json())
          .then(data=>{ 
          
          
            console.log("Orders data  = = = ",data)
            setData2(data)
           Summ(data)
              }
          )
      }

      useEffect(()=>{

        GetOrders1();
        GetOrders2();
        

      },[D])

      var sum=0;
      const Summ=(data)=>{

        let result = data.map(a =>  parseInt(a.Amount));
        sum = result.reduce(function(a, b) { return a + b; }, 0);
        setSum(sum)
        console.log("result  =  = ",sum)

      }

  return(
    <>
        <td>{Data1.length}</td>
        <td>{Data2.length}</td>
        <td>{Sum}</td>
    </>
  )
}


function PieChart(){
  const colorCode = '#1478BD';
  const data = {
    labels: [
      'Red',
      'Blue',
      'Yellow'
    ],
    datasets: [{
      label: 'My First Dataset',
      data: [300, 50, 100],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)'
      ],
      hoverOffset: 4
    }]
  };
  return(
    <Chart type='pie'   
        
    height={80}
    width={80}
        data={data}
     
     />
 
  )
}


function BarChart(props){

  
  const colorCode = '#1478BD';
  const state = {
    data: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      datasets: [
        {
          fill: true,
          label: null,
          backgroundColor: colorCode,
          borderColor: colorCode,
          borderWidth: 2,
          data: [65, 59, 80, 81, 56, 65, 59, 80, 81, 56, 40, 56]
        }
      ]
    },
    options: {
      plugins: {
        legend: {
          display: false
        },
      },
      scales: {
        x: {
          grid: {
            display: false
          },
          beginAtZero: false,
          ticks: {
            color: colorCode,
          }
        },
        y: {
          grid: {
            display: false,
          },
          beginAtZero: true,
          ticks: {
            color: colorCode,
          }
        }
      },
    }
  }

  return(
    <Chart type='bar'   
        
        height={80}
    width={80}
        data={state.data}
        options={state.options}
     />
 
  )
}

export default App;