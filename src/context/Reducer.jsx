export default (state, { type, payload }) => {
    switch (type) {

    case 'ADD_TRANSACTION':
        console.log(payload)
        return { ...state,
            cart: [...state.cart, Object.assign(payload, {quantity: 1})]
        }
    case 'ADD_SAME_ITEM':  
        console.log(payload)
        let newCart = [...state.cart, payload]
        let unique = [...new Set(newCart)];
        // still running twice
        return { ...state, 
            cart: unique
        }
    case 'SPEND_MONEY':
        return {
            ...state,
            money: state.money - payload,
            cart: []
        }
    case 'REMOVE_ITEM': 
        return {
            ...state,
            cart: [...state.cart.filter((item,index) => item !== payload)]
        }
    default:
        return state
    }
}
