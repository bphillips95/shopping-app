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
    default:
        return state
    }
}
