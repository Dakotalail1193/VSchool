import React, { useState} from 'react'
import AddBountyForm from './AddBountyForm'


function Bounty(props) {
    const {firstName, lastName, living, bountyAmount, type, _id} = props
    const [editToggle, setEditToggle] = useState(false)

    return(
        <>
        <div className='bounty'>
        { !editToggle ?
        <>
            <h1>Name: {firstName} {lastName}</h1>
            <h1>Living: {living ? "True" : "False"}</h1>
            <h1>Reward: {bountyAmount}</h1>
            <h1>Sith or Jedi?: {type}</h1>
            <button 
            className='delete-btn'
            onClick={() => props.deleteBounty(_id)}
            >Delete
            </button>

            <button 
            className='edit-btn'
            onClick={() => setEditToggle(prevToggle => !prevToggle)}
            >Edit</button>
        </>

        :

        <>
        <AddBountyForm
        firstName={firstName}
        lastName={lastName}
        living={living}
        reward={bountyAmount}
        type={type}
        _id={_id}
        btnText="Submit Edit"
        submit={props.editBounty}/>

        <button 
            className='edit-btn'
            onClick={() => setEditToggle(prevToggle => !prevToggle)}
        >Close</button>

        </>
        } 
        </div>
        </>
    )
}

export default Bounty