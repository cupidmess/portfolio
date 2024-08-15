import React from 'react'
import './index6.css'
import PartF from './PartF'
import project1 from './project1.png'
import project2 from './project2.png'
import project3 from './project3.png'
import bc from './barcode.png'
export default function PartE() {
  return (
    <div>
      <p className='color5 font-normal'>
        <p>
        <p className='cont-1'>
          <p className='box1-5'> 
            <p>
              <img src={project1} className='pr'></img> </p>
              <p className='title5-1'>Django Project</p> 
              <p className='p5-1'>Creating a full stack project based on Django<br/> Features - Routing, Auth, DataBase</p>
            </p>
            <p className='box2-5'>
            <p>
              <img src={project2} className='pr'></img>
            </p>
            <p className='title5-2'>React Project</p>
            <p className='p5-2'>An E-commerce frontend <br/>Features - Rendering, Routing, Auth</p>
            </p>
            <p className='box3-5'>
            <p>
              <img src ={project3} className='pr'></img>
            </p>
            <p className='title5-3'>
              Recipe Project  
            </p>
            <p className='p5-3'>A website that generates recipes when searched<br/>Features - API, Styling (JS)</p>
            </p>
            <p>
            <img src={bc} className='bc'></img>
            <p className='port'>cupidmess.com</p>
          </p>

          </p>
          <p className='mw font-normal'> MY WORK</p>
        </p>
        </p>
        <PartF/>
    </div>
  )
}