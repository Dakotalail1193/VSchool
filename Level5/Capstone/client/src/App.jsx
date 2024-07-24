import React, {useEffect, useContext} from 'react'
import { Context } from './ContextProvider/Context'
import Deposit from './Deposit'
import Withdrawal from './Withdrawal'
import AddDepositForm from './AddDepositForm'
import AddWithdrawalForm from './AddWithdrawalForm'


function App(){
    const {deposit, withdrawal, getDeposit, getWithdrawal, addDeposit, addWithdrawal, deleteDeposit, deleteWithdrawal} = useContext(Context)

    useEffect(() => {
        getDeposit();
        getWithdrawal()       
    })

    return(
        <><h1>hi</h1>
        <div className='deposit-container'>
            <AddDepositForm
            submit={addDeposit}
            btnText="Add Deposit"
            />
            {deposit.map(deposit => <Deposit {...deposit} key= {deposit.title} deleteDeposit={deleteDeposit}/>)}
        </div >
        <div className='withdrawal-container'>
            <AddWithdrawalForm
            submit={addWithdrawal}
            btnText="Add Withdrawal"
            />
            {withdrawal.map(withdrawal => <Withdrawal {...withdrawal} key= {withdrawal.title} deleteWithdrawal={deleteWithdrawal}/>)}
        </div >


        </>
    )


}

export default App