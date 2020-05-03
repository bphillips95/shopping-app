import React, { createContext, useReducer } from 'react';
import AppReducer from './Reducers';

const initialState = {
    transactions: []
}

export const GlobalContext = createContext(initialState)

export const GlobalProvider = ({ children }) => {
   const [state, dispatch] = useReducer(AppReducer, initialState)

   const addTransaction = (transaction) => {
       dispatch({
           type: 'ADD_TRANSACTION',
           payload: transaction
       })
   }
   
    return (
        <GlobalContext.Provider value={{
            transactions: state.transactions,
            addTransaction
        }}>
        {children}
        </GlobalContext.Provider>
    )

}