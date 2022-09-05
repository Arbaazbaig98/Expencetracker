import React,{useContext} from 'react'
import {GlobalContext} from '../context/Globalstate'
import {Transaction} from './Transaction'

export const Transactionlist = () => {
    const {transaction}=useContext(GlobalContext)
    
  return (
    <div className="container dv center">
        <h3>History</h3>
        <ul className='li list'>
        {transaction.map(transaction =>(<Transaction key={transaction.id} transaction={transaction}/>))}
            
        </ul>
    </div>
  )
}
