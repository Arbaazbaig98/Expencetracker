import React,{createContext,useReducer} from 'react'
import AppReducer from './AppReducer'


const initialState= {
    transaction:[
        { id:1, text:'Ball', amount:-10},
        { id:2, text:'Salery', amount:300},
        { id:3, text:'Bat', amount:-30},
        { id:4, text:'Camera', amount:150},
    ]
}

//Create context

export const GlobalContext=createContext(initialState)

//Provide component

export const GlobalProvider=({children})=>{
    const [state,dispatch]=useReducer(AppReducer, initialState);

    //Actions
    const deleteTransaction=(id)=>(
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        })
    )

    const addTransaction=(transaction)=>(
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        })
    )

    return (
        <GlobalContext.Provider value=
        {{transaction:state.transaction,
        deleteTransaction,addTransaction}}>
            {children}
        </GlobalContext.Provider>
    )
}


