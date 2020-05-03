import React, {useContext} from 'react'
import {Item} from './Item'
import {GlobalContext} from '../context/GlobalState'


export default function ItemList() {

    const {transactions} = useContext(GlobalContext)
  
    return (
        <div>
            <ul className="list">
        {transactions.map(transaction => (<Item key={transaction.id} transaction={transaction} />))}
      </ul>
        </div>
    )
}
