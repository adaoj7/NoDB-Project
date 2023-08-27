import React from 'react'
import { useState } from 'react'
import axios from 'axios'

let globalId = 5
const InitialOrigin = ({onClick,value,alsoClick,id}) => {
  // console.log(id)
  const [val,setValue] = useState(value)
  const [savedVal,setSavedVal] = useState(val)
  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(`You entered ${val}`)
    // return {val}
    setSavedVal(val)
    
  }

  const originAdd = async () => {
    console.log('this ran')

    let bodyObj = {
        origin:val
    }
    const {data} = await axios.put(`originAdd/${id}`,bodyObj)
    if(!data.error){

    } else (
      console.log('oops')
    )

  }

  let allInOne = ()=>{
  onClick = ()=>val
  originAdd()
  // console.log('this ran')
  }
  return savedVal ? (
    <>{savedVal}</>
) : (
    <form onSubmit={handleSubmit}>
      <input type='text' 
      onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={allInOne}>Submit</button>
    </form>
)
}

export default InitialOrigin