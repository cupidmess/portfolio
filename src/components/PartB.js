import React from 'react'
import './index3.css'
import { Link } from 'react-router-dom';
import github from './github-3.png'
import instagram from './social.png'
import linkedin from './social copy.png'
import line from './line.png'
import pfp from './pfp.png'
import PartC from './PartC'




export default function PartB() {
  
  return (
    
    
   <div>
    <p>
      <p className='color2'> <Link to ="https://github.com/cupidmess">
      <img src ={github} className='github-image push-button2'/>
      </Link>
      </p>
      <p className='color2 push-button2'>
      <Link to ="https://www.instagram.com/cupidmess/">
      <img src ={instagram} className='instagram-image'/>
      </Link>
      </p>
      <p className='color2 push-button2'>
      <Link to ="https://www.linkedin.com/in/shreya-bhoir-969251276/">
      <img src ={linkedin} className='linkedin-image'/>
      </Link>
      </p>
      <p className='color2'>
        <img src ={line} className='pink-line'/>
      </p>
      <p className='color2'>
        <img src ={pfp} className='pfp-image grayscale-image'/>
      </p>
      </p>
    <p className='color'>
      <p className='font-normal text'>
        MY <text className='font-robot text3'>A</text> LL 
      </p>
      <p className='text-1 font-robot'>NEW</p>
      <p className='text2 font-cursive'>Updates</p>
    </p>
    <PartC/>
    
    
   </div>
      
  )
}
