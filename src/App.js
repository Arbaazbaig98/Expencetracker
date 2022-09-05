import React from 'react';
import Header from './components/Header'
import Balance from './components/Balance'
import Income from './components/Income'
import { Transactionlist } from './components/Transactionlist';
import  Addtransaction  from './components/Addtransaction';
import {GlobalProvider} from './context/Globalstate'

const App=()=>{
  return(
    <>
    <GlobalProvider>
  <div className="container">
  <Header/>
    <Balance/>
    <Income/>
    <Transactionlist/>
    <Addtransaction/>
  </div>
  </GlobalProvider>


</>
  )
}

export default App;