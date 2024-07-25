import React, {useContext} from 'react'
import { Context } from './ContextProvider/Context'

function Deposit(props){
    const {title, description, deposit} = props
    const {deleteDeposit} = useContext(Context)

    return(
        <>
        <div className='deposit'>
            <h2>Title: {title}</h2>
            <h2>Description:{description}</h2>
            <h2>Deposit Amount: {deposit} </h2>
            <button className='delete-btn'
            onClick={() => {deleteDeposit(props._id)}}>Delete</button>
        </div>
        </>
    )
}

export default Deposit