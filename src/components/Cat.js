import React from 'react'
import '../css/Cat.css'
function Cat() {
  return (
    <div className='container-fluid m-0 p-2'>
        <div className='container bg-light p-4 rounded'>
            <div className='row text-center'>
                <div className=' col-md-2 col-4' >
                    <div className='cat_card_hov' style={{boxShadow:"0 0 5px gray",display:"inline-block",padding:"15px",borderRadius:"8px",backgroundColor:"orange",cursor:"pointer"}}>
                        <img className='img-fluidx' src='https://cdn-icons-png.flaticon.com/512/562/562678.png' width={"50"} />
                        <p className='m-0'>Food</p>
                    </div>
                </div>
                <div className='col-md-2 col-4'>
                    <div className='cat_card_hov' style={{boxShadow:"0 0 5px gray",display:"inline-block",padding:"15px",borderRadius:"8px",cursor:"pointer"}}>
                        <img className='img-fluidx' src='https://cdn-icons-png.flaticon.com/512/562/562678.png' width={"50"} />
                        <p className='m-0'>Food</p>
                    </div>
                </div>
                <div className='col-md-2 col-4'>
                    <div className='cat_card_hov' style={{boxShadow:"0 0 5px gray",display:"inline-block",padding:"15px",borderRadius:"8px",cursor:"pointer"}}>
                        <img className='img-fluidx' src='https://cdn-icons-png.flaticon.com/512/562/562678.png' width={"50"} />
                        <p className='m-0'>Food</p>
                    </div>
                </div>
                <div className='col-md-2 col-4 mt-md-0 mt-5'>
                    <div className='cat_card_hov' style={{boxShadow:"0 0 5px gray",display:"inline-block",padding:"15px",borderRadius:"8px",cursor:"pointer"}}>
                        <img className='img-fluidx' src='https://cdn-icons-png.flaticon.com/512/562/562678.png' width={"50"} />
                        <p className='m-0'>Food</p>
                    </div>
                </div>
                <div className='col-md-2 col-4 mt-md-0 mt-5'>
                    <div className='cat_card_hov' style={{boxShadow:"0 0 5px gray",display:"inline-block",padding:"15px",borderRadius:"8px",cursor:"pointer"}}>
                        <img className='img-fluidx' src='https://cdn-icons-png.flaticon.com/512/562/562678.png' width={"50"} />
                        <p className='m-0'>Food</p>
                    </div>
                </div>
                <div className='col-md-2 col-4 mt-md-0 mt-5'>
                    <div className='cat_card_hov' style={{boxShadow:"0 0 5px gray",display:"inline-block",padding:"15px",borderRadius:"8px",cursor:"pointer"}}>
                        <img className='img-fluidx' src='https://cdn-icons-png.flaticon.com/512/562/562678.png' width={"50"} />
                        <p className='m-0'>Food</p>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Cat;