import React from 'react'
import '../css/TextAnimation.css'

import { Random, Wave } from "react-animated-text";


const Title = (text, size) => (
    <Wave
      text={text}
      speed="10.5"
      effect="stretch"
      effectChange={size}
      effectDirection="both"
    />
  );
  
function TextAnimation() {
  return (
    <div className="main">
    <div className="text">
        <div className="title"> 
        {Title("Loading....", 1.5)}
     </div>
  </div>
  </div>
  )
}

export default TextAnimation;