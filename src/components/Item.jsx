import React from 'react'

export default function Item({item,handleBuy}) {

    return (
        <>
        <div class="card" style={{width: '18rem'}}>
  <div class="card-body">
    <h5 class="card-title">{item.name}</h5>
    <h6 class="card-subtitle mb-2 text-muted">${item.cost}</h6>
    {/* <p class="card-text">There are {item.amount} left.</p> */}
    <button className="btn" value={item} onClick={() => handleBuy(item)}>Add to cart</button>
  </div>
  <div class="card-footer">
    <small class="text-muted">{item.amount > 10 ? "In Stock" : `Hurry, there are only ${item.amount} left!` }</small>
    </div>
</div>
        </>
    )
}
