import React from 'react'

export default function Item({item,handleBuy}) {

    return (
        <>
        <div>
            {item.name} - ${item.cost} Quantity {item.amount}
            <button className="btn" value={item} onClick={() => handleBuy(item)} >Add to cart</button>
        </div>
        </>
    )
}
