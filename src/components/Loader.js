import React,{useState,useEffect} from 'react'

import { Player, Controls } from '@lottiefiles/react-lottie-player';

import {useNavigate} from "react-router-dom";

import Lodi from '../lotties/118336-please-wait.json'
 

function Loader() {

    let navigate = useNavigate();
    useEffect(() => {
        const timer = setTimeout(() => {
            
        }, 3000);
        return () => clearTimeout(timer);
      }, []);

  return (
    <>
    
               <div style={{marginTop:'10%' }}>


               <Player
                    autoplay
                    loop
                    src={Lodi}
                    style={{ height: '300px', width: '300px' }}
                >
                   
                </Player>

               
               </div>


    </>
  )
}

export default Loader;