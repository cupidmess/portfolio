import React from 'react'
import './index4.css'
import PartD from './PartD'
import pfp from './pfp-2.png'
import pfp2 from './pfp-3.png'
import pfp3 from './pfp-4.png'
import Fade from 'react-reveal/Fade'
export default function PartC() {
  return (
    <div>
    <p className='color3' style={{}}>
    <p className='p-1'>
    <p className='font-normal text1'>
    <p>CODING THE FUTURE, ONE</p>
    <p className='abs'>ALGORITHM AT A <text className='font-cursive cursive-2'>time</text></p>
      </p>  
      <p className='para1 font-normal'>
      Hi, I’m Shreya Bhoir, currently in my second year of Computer <br/>Engineering at Bharati Vidyapeeth College of Engineering. My curiosity <br/>for AI and enthusiasm for new technologies fuel my learning journey. In<br/> my first year, I completed several web projects, and now I’m diving into<br/> Machine Learning to further expand my skills.<br/>
      I’ve always been passionate about Python and enjoy using its frameworks<br/>for web development. Combining my love for coding with my interest in <br/>AI, I aim to create innovative solutions and make a meaningful impact.
      </p>
      </p>
      <p>
      <img src={pfp} className='pfp-2 grayscale-image'></img>
      </p>
      <p>
      <img src={pfp2} className='pfp-3 grayscale-image'></img>
      </p>
      <p>
        <img src ={pfp3} className='pfp-4 grayscale-image'></img>
      </p>
      </p>
    
    <PartD/>
 
    </div>
  )
}