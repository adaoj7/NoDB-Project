import React from 'react'

const AddImg = ({isEditing,value,onValueChange}) => {
  return isEditing ? (
    <td>
        <input type="text" value={value} onChange={(e) => onValueChange(e.target.value)}/>
    </td>
  ) : (
    <td>
  <img src={value} className='pictures'/>
    </td>
  )
}

export default AddImg