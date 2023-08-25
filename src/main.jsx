import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import axios from 'axios'
import './index.css'


axios.get('/natList')
  .then(({data}) => {

    ReactDOM.createRoot(document.getElementById('root')).render(
      <React.StrictMode>
      <App data={data}/>
      </React.StrictMode>,
    )
})
.catch()
