import React from 'react'

const ModeButtons = ({isEditing,editClick,saveClick,onDeleteClick}) => {
  // console.log(isEditing)
  return isEditing ? (
    <td>
        <button  onClick={saveClick}>Save</button>
    </td>
  ) : (
    <td>
        <button onClick={onDeleteClick}>Delete</button>
        <button onClick={editClick}>Edit</button>
    </td>
  )
}

export default ModeButtons