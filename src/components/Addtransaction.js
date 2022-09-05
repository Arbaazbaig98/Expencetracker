import React,{useState,useContext} from 'react'
import {GlobalContext} from '../context/Globalstate'


const Addtransaction = () => {
    const [text,setText] =useState('')
    const [amount,setAmount] =useState(0)

  const {addTransaction}=useContext(GlobalContext)

  const onSubmit=e=>{
    e.preventDefault();

    const newTransaction={
      id:Math.floor(Math.random()* 100000000),
      text,
      amount:+amount
    }
    addTransaction(newTransaction)
    console.log(newTransaction)
  }

        const textChange=(event)=>{
            const value = event.target.value
            setText(value)
        }
        const amountChange=(event)=>{
            const value = event.target.value
            setAmount(value)
        }



  return (
    <div className="dv center">
      <h3>Add New Transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-group">
            <label htmlFor="text">Text</label><br/>
            <input type="text" value={text} onChange={textChange} placeholder="Enter the text" />
        </div>
        <div className="form-group">
            <label htmlFor="amount">Amount<br/>
            (negative - expense, positive - income)
            </label><br/>
            <input type="number" value={amount} onChange={amountChange} placeholder="enter the amount" />
                    </div>
                    <button className="btn btn-primary">Add Transaction</button>
      </form>
    </div>
  )
}

export default Addtransaction
