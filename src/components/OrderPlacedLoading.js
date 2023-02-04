import React,{useEffect,useState} from 'react'


import { Player, Controls } from '@lottiefiles/react-lottie-player';

import {useNavigate} from "react-router-dom";
import Lodi from '../lotties/100858-success.json'
import { RemoveAll } from './../screens/redux/actions';
import { connect } from 'react-redux';

function OrderPlacedLoading(props) {
    const {local_variable,RemoveAll} =props;
    let navigate = useNavigate();
    useEffect(() => {
        const timer = setTimeout(() => {
          
            RemoveAll()
          navigate('/Profile',{Data:props.Data});
        }, 1500);
        return () => clearTimeout(timer);
      }, []);

  return (
    <>
    
               <div style={{marginTop:'10%'}}>


               <Player
                    autoplay
                    loop
                    src={Lodi}
                    style={{ height: '300px', width: '300px' }}
                >
                   
                </Player>

                <h1 style={{textAlign:'center'}}>Placing Your Order...</h1>
               </div>


    </>
  )
}

const mapStateToProps = state =>({
    local_variable :state.item
  })

export default connect(mapStateToProps,{RemoveAll})(OrderPlacedLoading);