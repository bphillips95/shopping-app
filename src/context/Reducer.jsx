export default (state, { type, payload }) => {
    switch (type) {

    case 'ADD_TRANSACTION':
        return { ...state,
            cart: [payload, ...state.cart] }
    case 'SPEND_MONEY':
        return {
            ...state,
            money: state.money - payload,
            cart: []
        }
    case 'REMOVE_ITEM': 
        return {
            ...state,
            cart: [...state.cart.filter(item => item !== payload)]
        }
    default:
        return state
    }
}
// ...state.filter(city => city !== action.city)
