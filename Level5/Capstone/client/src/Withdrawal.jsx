import React, {useContext} from 'react'

import { Context } from './ContextProvider/Context'

function Withdrawal(props){
    const {title, description, withdrawal} = props
    const {deleteWithdrawal} = useContext(Context)

    return(
        <>
        <div className='withdrawal'>
            <h1>Title: {title}</h1>
            <h1>Description:{description}</h1>
            <h1>Withdrawal Amount: {withdrawal} </h1>
            <button className='delete-btn'
            onClick={deleteWithdrawal}>Delete</button>
        </div>
        </>
    )
}

export default Withdrawal