import React, {useContext, useState} from 'react'
import Item from './Item'
import { Context } from '../context/GlobalState'

export default function ItemList() {

    const context = useContext(Context)

    const items = ["Pizza", "Salmon", "Cheese", "Fries"]

    const [cart, setCart] = useState([])

    const handleBuy = (item) => {
        console.log(item)
        setCart(item)
    }

    // const handleClick = (e) => {
    //     setItem([
    //         ...item,
    //         {
    //         name: "Pizza",
    //         amount: 24
    //     }])
    // }
    

    // const itemList = item.map(item => {
    //     return <div>{item.name} - ${item.amount} 
    //         <button className="btn" onClick={handleClick} value={item.name}>Buy</button> </div>
    // })

    return (
        <>
        <ul className="list">
            {context}
            {items.map(item => <Item item={item} handleBuy={handleBuy}/>)}
        </ul>
        <div>
            {cart.length > 0 ? cart : "Cart is Empty"}
        </div>
        </>
    )
}
