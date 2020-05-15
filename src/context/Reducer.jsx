export default (state, { type, payload }) => {
    switch (type) {

    case 'ADD_TRANSACTION':
        return { ...state,
            cart: [payload, ...state.cart] }
        
    default:
        return state
    }
}
