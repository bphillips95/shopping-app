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
            type: 'ADD_TRANSACTION',
            payload
        })
    }
    function spendMoney(payload) {
      dispatch({
        type: 'SPEND_MONEY',
        payload
      })
    }
    function removeItem(payload) {
      dispatch({
        type: 'REMOVE_ITEM',
        payload
      })
    }
    return (<Context.Provider value={{
        cart: state.cart,
        addItem,
        spendMoney,
        removeItem,
        money: state.money
      }}>
        {children}
      </Context.Provider>);
    }