import React, { useState, useEffect } from "react";
import axios from 'axios'
import Bounty from './Bounty'
import AddBountyForm from './AddBountyForm'

function App(){
    const [bounty, setBounty] = useState([])

    function getBounties(){
        axios.get("/bounties")
        .then(res => setBounty(res.data))
        .catch(err => console.log(err))
    }

    function addBounty(newBounty){
        axios.post("/bounties", newBounty)
        .then(res => {setBounty(prevBounty => [...prevBounty, res.data])})
        .catch(err => console.log(err))
    }

    function deleteBounty(bountyId){
        axios.delete(`/bounties/${bountyId}`)
        .then(res => {setBounty(prevBounty => prevBounty.filter (bounty => bounty._id !== bountyId))})
        .catch(err => console.log(err))
    }

    function editBounty(updates, bountyId){
        axios.put(`/bounties/${bountyId}`, updates)
        .then(res => {
            setBounty(prevBounty => prevBounty.map (bounty => bounty._id !== bountyId ? bounty : res.data))
        })
        .catch(err => console.log(err))
    }

    useEffect(() => {
        getBounties()
    }, [])

    return(
        <><div className="header"><h1>Active Bounty Tracker</h1></div>
        <div className="bounty-container">
            <AddBountyForm 
            submit={addBounty}
            btnText="Add Bounty"
            />

            {
            bounty.map(bounty => 
            <Bounty {...bounty} 
            key = {bounty.firstName} 
            deleteBounty={deleteBounty} 
            editBounty={editBounty}
            />)}
            </div>
        
        </>
    )
}

export default App