import React from 'react'
import {useState} from 'react';
import  '../App.css';
const Counter = () => {

   const [number,setNumber] = useState(0)
function decreaseNum(){
  if(number> -10){
    setNumber(number-1)
  }
  
}
function increaseNum(){
  if(number< 10){
    setNumber(number+1)
  }
}
  return (
    <div>
      <div className='div1'>
      <button onClick={decreaseNum}>-</button>

           {number}
      <button onClick={increaseNum}>+</button>
      </div>
     
    </div>
  )
}

export default Counter
