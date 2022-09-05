import React,{useContext} from 'react'
import {GlobalContext} from '../context/Globalstate'

const Balance = () => {
    const {transaction}=useContext(GlobalContext)

    const amount = transaction.map(transaction=>transaction.amount)
    const total=amount.reduce((acc,item)=> (acc+= item),0).toFixed(2);

  return (
    <>
    <div className="dv center">
    <h4 >Your Balance</h4>
    <h1>₹{total}</h1>
    </div>
     </>
  )
}
export default Balance;