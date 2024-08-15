import React from 'react'
import './index.css'; 
import PartB from './PartB';
import { Link } from 'react-router-dom';
export default function PartA() {
  return (
    <div className= "bg-cover bg-center h-screen flex flex-col div1 body1"
     >
      <p className='p-center '>
      <p className='text-10xl text-white text-bold text-outline font-normal '>SHRE<text className='font-robot text-12xl font-thin'>Y</text>A</p> 
      
      <p className='text-12xl color-black font-cursive text-white font-light text-outline text-overlap text-padding3 '> B </p>
      <p className='text-10xl font-normal text-white  text-outline text-padding text-bold'> HOI 
      </p>
      <p className='text-12xl font-robot text-white  font-thin text-outline text-padding2'>R</p>
      </p>
 
      <p className='flex font-robot flex-row text-4xl p-padding4'>DEVELOPER <p className='font-cursive p-padding5'>&</p> PROGRAMMER</p>
      <button className='font-robot b-1 push-button'><Link to='./click' >CLICK HERE</Link></button>
    </div>
  )
}