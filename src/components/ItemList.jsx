import React, {useContext, useState} from 'react'
import Item from './Item'
import { Context } from '../context/GlobalState'

export default function ItemList() {

    const {items,setItems} = useContext(Context)

    const itemList = ["Pizza", "Salmon", "Cheese", "Fries"]

    const [cart, setCart] = useState([])

    const handleBuy = (item) => {
        setCart([...cart,item])
        // setItems(item)
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
