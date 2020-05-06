import React, {useContext} from 'react'
import Item from './Item'
import { Context } from '../context/GlobalState'

export default function ItemList() {

    const context = useContext(Context)

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
        <ul className="list">
            {context}
            {/* {item.map(item => item.name)}
            <button className="btn" onClick={handleClick} value={item.name}>Buy</button>  */}
        </ul>
    )
}
