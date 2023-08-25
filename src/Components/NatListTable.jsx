import React from "react";
import { useState } from "react";
import axios from "axios";
import { TableRow } from "./TableRow";
import  TableHeader  from "./TableHeader";

export const NatListTable = ({ initialNativityList }) => {
    const [currentList, setCurrentList] = useState(initialNativityList);

    const rows = currentList.map((natItem) => {
        const { id, img, origin, owner, addImg } = natItem;

        return (
            <TableRow
                key={id}
                id={id}
                natInfo={{ id, img, origin, owner, addImg }}
                initialIsEditing = {false}
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

                </tfoot>
            </table>
        </div>
    );
};
