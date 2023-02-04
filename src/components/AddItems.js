import React from 'react'
 
import DemoTest2 from './DemoTest2';
 
function AddItems(props) {
  return (
   <DemoTest2 id={props.id} ShopName={props.ShopName}/>
  )
}

export default AddItems;