import React, {useContext} from "react";
import UglyThing from "./UglyThing"
import { UglyContext } from "./ContextProvider";


function UglyThingList(){
    const {uglyArray, handleDelete, saveEdit} = useContext(UglyContext)

    const uglyElement = uglyArray.map((uglyThing, index) => {
        return <UglyThing key = {index} {...uglyThing} index = {index} onSave = { () => saveEdit(index)} onDelete = { () => handleDelete(index)} className="ugly-thing"/>
    })
    return(
        <>
        {uglyElement}
        </>
    )
}

export default UglyThingList