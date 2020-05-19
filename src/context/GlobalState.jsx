import React, { createContext, useReducer } from 'react'
import reducer from './Reducer'

const initialState = {
    cart: [],
    money: 25
}
export const Context = createContext()

export const GlobalProvider = ({children}) => {
    
    const [state, dispatch] = useReducer(reducer, initialState)

    function addItem(payload) {
      dispatch({
        type: 'SPEND_MONEY',
        payload
      })
        dispatch({
            type: 'ADD_TRANSACTION',
            payload
        })
    }
    return (<Context.Provider value={{
        cart: state.cart,
        addItem,
        money: state.money
      }}>
        {children}
      </Context.Provider>);
    }