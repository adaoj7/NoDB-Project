import React from 'react'
import { useState } from 'react'
import ModeButtons from './ModeButtons'
import AddImg from './AddImg'
import Owner from './Owner'
import InitialImage from './InitialImage'
import InitialOrigin from './InitialOrigin'
import axios from 'axios'
import './TableRow.css'

export const TableRow = ({initialIsEditing,natInfo,id,deleteFunction}) => {
    const [editMode,setEditMode] = useState(initialIsEditing)
    const [img,setImg] = useState(natInfo.img)
    const [origin,setOrigin] = useState(natInfo.origin)
    const [owner,setOwner] = useState(natInfo.owner)
    const [addImg, setAddImg] = useState(natInfo.addImg)
    

    const changeEditMode = () => setEditMode(true)
    const changeNormalMode = async () => {

        let bodyObj = {
            owner,
            addImg
        }
        
        const {data} = await axios.put(`/editNativity/${id}`,bodyObj)
        if(!data.error){
            setEditMode(false)
        } else {
            alert('somethin funny goin on up in this hizzle')
        }
    }

    const imgAndOrigin = async () => {
        let bodyObj = {
            img,
            origin
        }
        const {data} = await axios.put(`imgAndOrigin/$`,bodyObj)
        if(!data.error){

        }

    }

    // console.log(origin)

  return (
    <tr>
        <ModeButtons
        isEditing={editMode}
        editClick={changeEditMode}
        saveClick={changeNormalMode}
        onDeleteClick={deleteFunction}
        />
        {/* <td>{img}</td>
        <td>{origin}</td>
        <td>{owner}</td>
        <td>{addImg}</td> */}
        <td>
            <InitialImage
            value={img}
            onClick={setImg}
            />
        </td>
        <td>
            <InitialOrigin
            value={origin}
            onClick={setOrigin}
            />
        </td>
        <Owner
            value={owner}
            isEditing={editMode}
            onValueChange={setOwner}
        />
        <AddImg
            value={addImg}
            isEditing={editMode}
            onValueChange={setAddImg}
        />
        </tr>
  )
}
