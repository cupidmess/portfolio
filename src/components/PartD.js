import './index5.css'
import React from 'react'
import icon1 from './icon1.png'
import icon2 from './icon2.png'
import icon3 from './icon3.png'
import PartE from './PartE'
export default function PartD() {
  return (
   <div>
    <p className='color4'>
      <p>
        <p className='main'>
          <p className='text2-outline font-normal'>WHAT I CAN DO</p>
          <p className='flex flex-row'>
          <p className='box1'><p>
            <img src={icon1} className='icon1'></img>
            </p><p className='box1-text font-normal'>Data Structures in C/C++<br/>OOPS and GUI in Java<br/>Development in Python</p><p className='box1-text2 font-robot'>THE BIG 3'S</p></p>
          <p className='box2'>
            <p>
              <img src={icon2} className='icon2'></img>
              </p><p className='box2-text font-normal'>HTML, CSS, Javascript, TailwindCSS,<br/> Bootstrap, ReactJS, NodeJS,<br/> ExpressJS, MongoDB, MySQL, Django,<br/> Angular, SQLlite</p><p className='box2-text2 font-robot'>WEB DEVELOPMENT</p></p>
          <p className='box3'>
            <p>
              <img src={icon3} className='icon3'></img>
            </p>
            <p className='box3-text font-normal'>Models - Regressions, Trees and CNNs <br/>Technologies - NumPy, TensorFlow etc</p><p className='box3-text2 font-robot'>MACHINE LEARNING</p></p>
          </p>
        </p>
      </p>
    </p>
    <PartE/>
   </div>
  )
}