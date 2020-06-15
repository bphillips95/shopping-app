export default (state, { type, payload }) => {
    switch (type) {

    case 'ADD_TRANSACTION':
        console.log(payload)
        return { ...state,
            cart: [...state.cart, Object.assign(payload, {quantity: 1})]
        }
    case 'ADD_SAME_ITEM':
        console.log(payload)
        // still running twice
        return { ...state,
            cart: [...state.cart, payload]
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
// ...state.filter(city => city !== action.city)
