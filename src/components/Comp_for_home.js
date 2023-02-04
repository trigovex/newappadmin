import React from 'react'

function Comp_for_home() {
  return (
    <div className='d-block d-md-none p-1 rounded' style={{position:"fixed",bottom:"0",width:"100%",backgroundColor:"white",borderTop:"1px solid black",zIndex:"2"}} >
        <div className=' container-fluid m-0'>
            <div className='row text-center'>
                <div className='col-3'>
                    <img className='img-fluid' src='https://cdn-icons-png.flaticon.com/512/1946/1946488.png' width={"20"}  />
                    <p className='m-0'>Home</p>
                </div>
                <div className='col-3'>
                    <img className='img-fluid' src='https://cdn-icons-png.flaticon.com/512/3496/3496155.png' width={"20"} />
                    <p className='m-0'>Orders</p>
                </div>
                <div className='col-3'>
                    <img className='img-fluid' src='https://cdn-icons-png.flaticon.com/512/2961/2961948.png' width={"20"} />
                    <p className='m-0'>History</p>
                </div>
                <div className='col-3'>
                    <img className='img-fluid' src='https://cdn-icons-png.flaticon.com/512/1077/1077063.png' width={"20"} />
                    <p className='m-0'>Profile</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Comp_for_home;