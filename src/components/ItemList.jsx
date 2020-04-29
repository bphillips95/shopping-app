import React, {useState} from 'react'
import Item from './Item'
export default function ItemList() {

    const [items, setItems] = useState([
      {  item: "flowers", amount: 15 },
      {  item: "frozen pizza", amount: 12 },
      { item:"macbook air", amount: 899 }
    ])
    const [newItem, setNewItem] = useState("")
    const [newAmount, setAmount] = useState(0)
    
    const handleSubmit = (e) => {
        e.preventDefault()
        setItems([...items], {
            item: newItem,
            amount: newAmount
        }, [])
        console.log(items)
    }
  
    return (
        <div>
            {items.map(item => <Item item={item} key={item.amount} />)}
            <form onSubmit={handleSubmit}>
                <label>Name:</label>
                <input type="text" name="item" value={newItem} onChange={(e) => setNewItem(e.target.value)}/> 
                <br/>
                <label>Amount:</label>
                <input type="number" name="amount" value={newAmount} onChange={(e) => setAmount(parseInt(e.target.value))}/>
                <br/>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
