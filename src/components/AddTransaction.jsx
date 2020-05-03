import React, {useState, useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';

export default function AddTransaction() {

    const [newItem, setNewItem] = useState("")
    const [newAmount, setAmount] = useState(0)

    const { addTransaction } = useContext(GlobalContext)

    const onSubmit = e => {
        e.preventDefault() 

        const newTransaction = {
            id: Math.floor(Math.random() * 100000000),
            item: newItem,
            amount: newAmount
        }
        addTransaction(newTransaction)
    }
    
    return (
        <div>
             <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input type="text" value={newItem} onChange={(e) => setNewItem(e.target.value)} placeholder="Enter text..." />
        </div>
        <div className="form-control">
          <label htmlFor="amount"
            >Amount <br />
            (negative - expense, positive - income)</label
          >
          <input type="number" value={newAmount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..." />
        </div>
        <button className="btn">Add transaction</button>
      </form>
            
        </div>
    )
}
