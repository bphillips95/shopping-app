import React from 'react'

export default function Item({item,handleBuy}) {

    const handleClick = (e) => {
        handleBuy(e.target.value)
    }
    return (
        <>
        <div>
            {item} - $12
            <button className="btn" value={item} onClick={handleClick} >Add to cart</button>
        </div>
        </>
    )
}
