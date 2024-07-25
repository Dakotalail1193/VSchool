import React, {useContext} from 'react'
import { Context } from './ContextProvider/Context'

function Withdrawal(props){
    const {title, description, withdrawal} = props
    const {deleteWithdrawal} = useContext(Context)

    // function handleDelete(e){
    //     e.preventDefault()
    //     deleteWithdrawal(props._id)
    // }

    return(
        <>
        <div className='withdrawal'>
            <h2>Title: {title}</h2>
            <h2>Description:{description}</h2>
            <h2>Withdrawal Amount: {withdrawal} </h2>
            <button className='delete-btn'
            onClick={() => {deleteWithdrawal(props._id)}}>Delete</button>
        </div>
        </>
    )
}

export default Withdrawal