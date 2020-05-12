import React, {useContext, useState} from 'react'
import Item from './Item'
import { Context } from '../context/GlobalState'

export default function ItemList() {

    const context = useContext(Context)

    const items = ["Pizza", "Salmon", "Cheese", "Fries"]

    const [cart, setCart] = useState([])

    const handleBuy = (item) => {
        setCart([...cart,item])
    }
    
    return (
        <>
        <ul className="list">
            {context}
            {items.map(item => <Item item={item} handleBuy={handleBuy}/>)}
        </ul>
        <div>
            {cart.length > 0 ? cart.map(item => <div>{item}</div>) : "Cart is Empty"}
        </div>
        </>
    )
}
