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
        </div >
    </div>

        </>
    )


}

export default App