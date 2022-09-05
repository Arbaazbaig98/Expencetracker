import React,{useContext} from 'react'
import {GlobalContext} from '../context/Globalstate'
const Income = () => {
  const {transaction}=useContext(GlobalContext)
  const amount= transaction.map(transaction=>transaction.amount);

  const income=amount
  .filter(item=>item>0)
  .reduce((acc, item)=>(acc += item),0)
  .toFixed(2)

  const expense=(
    amount.filter(item=>item<0).reduce((acc, item)=>(acc += item),0)* -1).toFixed(2)
  

  return (
    <div className="center"> 
      <div className="bord" >
        <h4>Income</h4>
        <p className="money plus">{income}</p>
              </div>
              <div className="bord">
              <h4>Expense</h4>
              <p className="money minus">{expense}</p>
              </div>
    </div>
  )
}

export default Income
