import React, {useContext} from 'react'
import { Context } from './ContextProvider/Context'

function Deposit(props){
    const {title, description, deposit} = props
    const {deleteDeposit} = useContext(Context)

    return(
        <>
        <div className='deposit'>
            <h1>Title: {title}</h1>
            <h1>Description:{description}</h1>
            <h1>Deposit Amount: {deposit} </h1>
            <button className='delete-btn'
            onClick={deleteDeposit}>Delete</button>
        </div>
        </>
    )
}

export default Deposit