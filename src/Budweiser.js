import React, { useState } from 'react'

function Budweiser() {
  const [value, setVlaue]= useState(0)
  function add(){
    setVlaue(value+1)

  }
  function substract(){
    setVlaue(value-1)
  }
  function multiply(){
    setVlaue(value*2)
  }
  function division(){
    setVlaue(value/2)
  }
  return (
    <div>Budweiser
      <h2>{value}</h2>
      <button onClick={add}>Add</button>
      <button onClick={substract}>Substract</button>
      <button on onClick={multiply}>Multiply</button>
      <button onClick={division}>Division</button>
    </div>
  )
}

export default Budweiser