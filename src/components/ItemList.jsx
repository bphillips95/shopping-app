import React, {useState} from 'react'
import Item from './Item'

export default function ItemList() {

    const [item, setItem] = useState([])

    const handleClick = (e) => {
        setItem([
            ...item,
            {
            name: "Pizza",
            amount: 24
        }])
    }
    

    // const itemList = item.map(item => {
    //     return <div>{item.name} - ${item.amount} 
    //         <button className="btn" onClick={handleClick} value={item.name}>Buy</button> </div>
    // })

    return (
        <ul className="list">
            {item.map(item => item.name)}
            <button className="btn" onClick={handleClick} value={item.name}>Buy</button> 
        </ul>
    )
}
