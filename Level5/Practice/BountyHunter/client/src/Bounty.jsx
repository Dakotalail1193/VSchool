import React, { useState} from 'react'
import AddBountyForm from './AddBountyForm'


function Bounty(props) {
    const {firstName, lastName, isLiving, bountyAmount, type, _id} = props
    const [editToggle, setEditToggle] = useState(false)

    return(
        <>
        <div className='bounty'>
        { !editToggle ?
        <>
            <h2>Name: {firstName} {lastName}</h2>
            <h2>Alive or Dead? : {isLiving ? "True" : "False"}</h2>
            <h2>Reward : {bountyAmount} Credits</h2>
            <h2>Sith or Jedi? : {type}</h2>
            <button className='delete-btn' 
            onClick={() => props.deleteBounty(_id)}>
            Delete
            </button>

            <button className='edit-btn' 
            onClick={() => setEditToggle(prevToggle => !prevToggle)}>
            Edit
            </button>
        </>

        :

        <>
        <AddBountyForm
        firstName={firstName}
        lastName={lastName}
        isLiving={isLiving}
        bountyAmount={bountyAmount}
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