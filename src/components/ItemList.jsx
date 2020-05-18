import React, {useContext, useState} from 'react'
import Item from './Item'
import Cart from './Cart'
import { Context } from '../context/GlobalState'

export default function ItemList() {

    const {cart,addItem,money} = useContext(Context)

    const itemList = ["Pizza", "Salmon", "Cheese", "Fries"]

    const handleBuy = (item) => {
        if(cart.includes(item)) {
            alert("Item is already in cart")
        } else if(money > 12) {
        addItem(item)
        } else {
            alert("You don't have enough money")
        }
    }
    return (
        <>
        <h3>You have ${money}</h3>
        <ul className="list">
            {itemList.map(item => <Item item={item} handleBuy={handleBuy}/>)}
        </ul>
        <div style={{
            position: "absolute",
            left: '80%',
            top: '10%'
        }}>
            <h3>Cart:</h3>
            {cart.length > 0 ? cart.map(
                item => <Cart item={item}/>
                ) : "Cart is Empty"}
        </div>

        </>
    )
}
