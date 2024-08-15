import React from 'react'
import gtts from './gtts.png'
import chat from './chat.png'
import bc2 from './barcode.png'
import clone from './cloneam.png'
import './index7.css'
import resume from './resume.png'
export default function PartF() {
  return (
    <div>
       <p className='color6 font-normal'>
        <p>
        <p>
            <img src={bc2} className='bc-2'></img>
            <p className='port-2'>cupidmess.com</p>
          </p>
        <p className='cont-2'>
          <p className='box1-6'> 
            <p>
              <img src={gtts} className='pr'></img> </p>
              <p className='title6-1'>Text To Speech </p> 
              <p className='p6-1'>A Python based project that listens and interprets <br/>texts, and follows commands.<br/>Features - openAI API, Virtual Assistant, gTTS</p>
            </p>
            <p className='box2-6'>
            <p>
              <img src={chat} className='pr'></img>
            </p>
            <p className='title6-2'>Auto Reply Chat Bot</p>
            <p className='p6-2'>A Python based project that reads a chat snippet<br/>Fand auto-generates replies<br/>Features - openAI API, pyclip</p>
            </p>
            <p className='box3-6'>
            <p>
              <img src ={clone} className='pr'></img>
            </p>
            <p className='title6-3'>
              Recipe Project  
            </p>
            <p className='p6-3'>Website Clones<br/>A clone on the Amazon India and Apple Website landing page </p>
            </p>
            

          </p>
          <button className='mw-2 font-robot'><a href="resume" >RESUME</a></button>
        </p>
        </p>
    </div>
  )
}