/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
 
function OrderByItem() {
  return (
    <div style={{marginTop:'5%',marginBottom:'5%'}}>

        <div className='container'  >
            <div className='row'>


                <div className='col-3 col-md-2 text-center'>
                    <img className='img-fluid' style={{borderRadius:"50%"}} src='https://b.zmtcdn.com/data/dish_images/8187d3223ac2cc42cc24f723c92877511634805403.png' width={"150"} />
                    <p style={{fontSize:16,fontWeight:'bold'}}>Shake</p>
                </div>
                <div className='col-3 col-md-2 text-center'>
                    <img className='img-fluid' style={{borderRadius:"50%"}} src='https://b.zmtcdn.com/data/dish_images/d19a31d42d5913ff129cafd7cec772f81639737697.png' width={"150"} />
                    <p style={{fontSize:16,fontWeight:'bold'}}>Biryani</p>
                </div>
                <div className='col-3 col-md-2 text-center'>
                    <img className='img-fluid' style={{borderRadius:"50%"}} src='https://b.zmtcdn.com/data/dish_images/ccb7dc2ba2b054419f805da7f05704471634886169.png' width={"150"} />
                    <p style={{fontSize:16,fontWeight:'bold'}}>Burger</p>
                </div>
                <div className='col-3 col-md-2 text-center'>
                    <img className='img-fluid' style={{borderRadius:"50%"}} src='https://b.zmtcdn.com/data/o2_assets/e444ade83eb22360b6ca79e6e777955f1632716661.png' width={"150"} />
                    <p style={{fontSize:16,fontWeight:'bold'}}>Fried Rice</p>
                </div>
                <div className='col-3 col-md-2 text-center'>
                    <img className='img-fluid' style={{borderRadius:"50%"}} src='https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png' width={"150"} />
                    <p style={{fontSize:16,fontWeight:'bold'}}>Pizza</p>
                </div>
                <div className='col-3 col-md-2 text-center'>
                    <img className='img-fluid' style={{borderRadius:"50%"}} src='https://b.zmtcdn.com/data/dish_images/197987b7ebcd1ee08f8c25ea4e77e20f1634731334.png' width={"150"} />
                    <p style={{fontSize:16,fontWeight:'bold'}}>Chicken</p>
                </div>
                

            </div>
        </div>
        
    </div>
  )
}

export default OrderByItem;