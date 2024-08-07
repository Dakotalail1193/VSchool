import React, {useEffect, useContext} from 'react'
import { Context } from './ContextProvider/Context'
import Deposit from './Deposit'
import Withdrawal from './Withdrawal'
import AddDepositForm from './AddDepositForm'
import AddWithdrawalForm from './AddWithdrawalForm'


function App(){
    const {deposit, withdrawal, getDeposit, getWithdrawal, addDeposit, addWithdrawal, deleteDeposit, deleteWithdrawal, withdrawalTotal} = useContext(Context)

    useEffect(() => {
        getDeposit();
        getWithdrawal()
        withdrawalTotal()       
    }, [])

    const totalWithdrawal = withdrawal.reduce((total, num) =>{
        total += num.withdrawal
        return total
    },0)
    console.log(totalWithdrawal)

    const totalDeposit = deposit.reduce((total, num) => {
        total += num.deposit
        return total
    }, 0)

    const final = totalDeposit - totalWithdrawal
    console.log(final)
    
    
    return(
        <>
        <div className='header'>
        <h1>Budget Tracker</h1>
        </div>
    <div className='container'>

        <div className='deposit-container'>
            <AddDepositForm
            submit={addDeposit}
            btnText="Add Deposit"
            />
            {deposit.map(deposit => 
            <Deposit {...deposit} 
            key= {deposit.title} 
            deleteDeposit={deleteDeposit}/>)}
            <h1>Total: ${totalDeposit}</h1>
        </div >


        <div className='withdrawal-container'>
            <AddWithdrawalForm
            submit={addWithdrawal}
            btnText="Add Withdrawal"
            />
            {withdrawal.map(withdrawal =>
            <Withdrawal {...withdrawal} 
            key= {withdrawal.title} 
            deleteWithdrawal={deleteWithdrawal}/>)}
            <h1>Total: ${totalWithdrawal}</h1>
        </div >
    </div>

    <div className='final'><h1>Monthly Remainder:${final}</h1></div>

        </>
    )


}

export default App