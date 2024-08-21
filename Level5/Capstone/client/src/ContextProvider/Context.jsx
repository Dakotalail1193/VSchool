import React, {useEffect, useState} from 'react'
import axios from 'axios'
const Context = React.createContext()


function ContextProvider(props){
    const [deposit, setDeposit] = useState([])
    const [withdrawal, setWithdrawal] = useState([])

     

    function getDeposit(){
        axios.get("/deposit")
        .then(res => setDeposit(res.data))
        
        .catch(err => console.log(err))
    }

    function getWithdrawal(){
        axios.get("/withdrawal")
        .then(res => setWithdrawal(res.data))
        .catch(err => console.log(err))
    }

    function addDeposit(newDeposit){
        axios.post("/deposit", newDeposit)
        .then(res => {setDeposit(prevDeposit => [...prevDeposit, res.data])})
        .catch(err => console.log(err))
    }

    function addWithdrawal(newWithdrawal){
        axios.post("/withdrawal", newWithdrawal)
        .then(res => {setWithdrawal(prevWithdrawal => [...prevWithdrawal, res.data])})
        .catch(err => console.log(err))
    }

    function deleteDeposit(depositId){
        axios.delete(`/deposit/${depositId}`)
        .then(res => {setDeposit(prevDeposit => prevDeposit.filter (deposit => deposit._id !== depositId))})
        .catch(err => console.log(err))
    }

    function deleteWithdrawal(withdrawalId){
        axios.delete(`/withdrawal/${withdrawalId}`)
        .then(res => {setWithdrawal(prevWithdrawal => prevWithdrawal.filter (withdrawal => withdrawal._id !== withdrawalId))})
        .catch(err => console.log(err))
    }

    function editDeposit(updates, depositId){
        axios.put(`/deposit/${depositId}`, updates)
        .then(res => {
            setDeposit(prevDeposit => prevDeposit.map (deposit => deposit._id !== depositId ? deposit : res.data))
        })
        .catch(err => console.log(err))
    }

    function editWithdrawal(updates, withdrawalId){
        axios.put(`/withdrawal/${withdrawalId}`, updates)
        .then(res => {
            setWithdrawal(prevWithdrawal => prevWithdrawal.map (withdrawal => withdrawal._id !== withdrawalId ? withdrawal : res.data))
        })
        .catch(err => console.log(err))
    }

    
    useEffect(  () => {
        getWithdrawal()
        withdrawalTotal()
    }, [])

    async function withdrawalTotal(){
        try {
            let total
            const sum = await Promise.all(withdrawal.map( item => item.withdrawal += total))
            console.log(withdrawal)
            return sum
        } catch (error) {
            console.log(error)
        }
                
        }
    
    // pull in withdrawal context
    // do a map or for loop 
    // for withdrawal object, sum the withdrawal numbers

    return (
        <>
        <Context.Provider value = {{
            getDeposit,
            getWithdrawal,
            addDeposit,
            addWithdrawal,
            deleteDeposit,
            deleteWithdrawal,
            deposit,
            setDeposit,
            withdrawal,
            setWithdrawal,
            editDeposit,
            editWithdrawal,
            withdrawalTotal
        }}>
            {props.children}
        </Context.Provider>
        </>
    )


}
export {Context, ContextProvider}