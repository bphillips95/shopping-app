import React from 'react'

export default function Item({item}) {
    return (
        <div>
            {item.name} - ${item.amount}
            <button className="btn">Buy</button>
        </div>
    )
}
