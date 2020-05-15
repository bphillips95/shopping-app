import React, { createContext, useReducer } from 'react'
import reducer from './Reducer'

const initialState = {
    cart: []
}

export const Context = createContext([])

export const GlobalProvider = ({children}) => {
    
    const [state, dispatch] = useReducer(reducer, initialState)

    function addItem(payload) {
        dispatch({
            type: 'ADD_TRANSACTION',
            payload
        })
    }
    return (<Context.Provider value={{
        cart: state.cart,
        addItem
      }}>
        {children}
      </Context.Provider>);
    }