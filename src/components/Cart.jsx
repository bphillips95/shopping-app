import React from 'react'

export default function Cart({remove,item}) {

    return (
        <>
        <div>
            {item.name} {item.quantity}
            <button onClick={() => remove(item)} >X</button>
        </div>
        </>
    )
}
