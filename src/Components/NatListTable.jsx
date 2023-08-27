import React from "react";
import { useState } from "react";
import axios from "axios";
import { TableRow } from "./TableRow";
import  TableHeader  from "./TableHeader";
import AddNativity from './AddNativity'

export const NatListTable = ({ initialNativityList }) => {
    const [currentList, setCurrentList] = useState(initialNativityList);

    const addRow = async () => {

        let {data} = await axios.post('/addNat'
        // ,{
        //     img:'Please add image',
        //     origin:'Please add origin'
        // }
        )

        const newNativityList = {...data}
        setCurrentList([...currentList,newNativityList])
        console.log(data)
        console.log(initialNativityList)
    }
    
    const deleteRow = async (id) => {
        
        const {data} = await axios.delete(`/deleteNat/${id}`)
        
        if(!data.error){
            const newNativityList = [...currentList]
            const filteredNativityList = newNativityList.filter((ele) => ele.id !== id)
            setCurrentList(filteredNativityList)
        } else {
            alert('something broke :(')
        }
        
    }


    const rows = currentList.map((natItem) => {
        const { id, img, origin, owner, addImg } = natItem;

        return (
            <TableRow
                key={id}
                id={id}
                natInfo={{ id, img, origin, owner, addImg }}
                initialIsEditing = {false}
                deleteFunction={() => deleteRow(id)}
            />
            // <tr>{[id,img,origin,owner,addImg]}</tr>
        );
    });


    return (
        <div>
            <table>
                <thead>
                    <TableHeader/>
                </thead>
                <tbody>
                    {rows}
                </tbody>
                <tfoot>
                    <AddNativity addClick={addRow}/>
                </tfoot>
            </table>
        </div>
    );
};
