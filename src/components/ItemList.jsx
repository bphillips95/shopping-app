import React, {useState} from 'react'
import Item from './Item'
export default function ItemList() {

    const [items, setItems] = useState([
      {  item: "flowers", amount: 15 },
      {  item: "frozen pizza", amount: 12 },
      { item:"macbook air", amount: 899 }
    ])
    
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(e.target)
    }
  
    return (
        <div>
            {items.map(item => <Item item={item} key={item.amount} />)}
            <form onSubmit={handleSubmit}>
                <input type="text" name="text"/>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
