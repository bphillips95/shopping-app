import React, {useContext, useState} from 'react'
import Item from './Item'
import { Context } from '../context/GlobalState'

export default function ItemList() {

    const {cart,addItem} = useContext(Context)

    const itemList = ["Pizza", "Salmon", "Cheese", "Fries"]

    const handleBuy = (item) => {
        addItem(item)
    }
    
    return (
        <>
        <ul className="list">
            {itemList.map(item => <Item item={item} handleBuy={handleBuy}/>)}
        </ul>
        <div>
            {cart.length > 0 ? cart.map(item => <div>{item}</div>) : "Cart is Empty"}
        </div>
        </>
    )
}
