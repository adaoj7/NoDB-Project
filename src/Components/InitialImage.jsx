import React from 'react'
import { useState } from 'react'
import './InitialImage.css'
import axios from 'axios'

const InitialImage = ({value,onClick,id}) => {
  const [val,setValue] = useState(value)
  const [savedVal,setSavedVal] = useState(val)


  const imgAdd = async () => {
    let bodyObj = {
        img:val
    }
    const {data} = await axios.put(`imgAdd/${id}`,bodyObj)
    if(!data.error){

    }

  }

  let allInOne = ()=>{
  onClick = ()=>val
  imgAdd()
  // console.log('this ran')
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(`You entered ${val}`)
    // return {val}
    setSavedVal(val)
    
  }
  
  return savedVal ? (
    <img src={savedVal} className='pictures'/>
) : (
    <form onSubmit={handleSubmit}>
      <input type='text' 
      onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={allInOne}>Submit</button>
    </form>
)
}
export default InitialImage