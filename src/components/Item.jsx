import React from 'react'

function Item({item}) {
    return (
        <div>
           <h4>{item.item} - ${item.amount}</h4> 
        </div>
    )
}

export default Item
