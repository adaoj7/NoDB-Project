import React from 'react'
import { useState } from 'react'
import './InitialImage.css'

const InitialImage = ({value,onClick}) => {
  const [val,setValue] = useState(value)
  const [savedVal,setSavedVal] = useState(val)
  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(`You entered ${val}`)
    // return {val}
    setSavedVal(val)
    
  }
  
  return savedVal ? (
    <tr><img src={savedVal} className='pictures'/></tr>
) : (
    <form onSubmit={handleSubmit}>
      <input type='text' 
      onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={onClick=()=>val}>Submit</button>
    </form>
)
}
export default InitialImage