import React from 'react'

export default function Cart({remove,item}) {

    return (
        <>
        <div>
            {item.name} 
            <button onClick={() => remove(item)} >X</button>
        </div>
        </>
    )
}
