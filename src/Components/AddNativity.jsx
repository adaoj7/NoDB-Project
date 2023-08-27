import React from 'react'

const AddNativity = ({addClick}) => {
  return (
    <tr>
        <td></td>
        <td colSpan='4'>
            <button onClick={addClick}>Add Nativity</button>
        </td>
    </tr>
    
  )
}

export default AddNativity