import { useState } from 'react'
import { NatListTable } from './Components/NatListTable'
import './App.css'

function App({data}) {

  return (
    <>
      <NatListTable initialNativityList={data}/>
    </>
  )
}

export default App
