import React from 'react'

export default function Item({item,handleBuy}) {
if(item.amount > 0) { 
    return (
        <div class="card" style={{width: '18rem'}}>
             <img src={item.img} class="card-img-top" alt="..."></img>
  <div class="card-body">
    <h5 class="card-title">{item.name}</h5>
    <h6 class="card-subtitle mb-2 text-muted">${item.cost}</h6>
    <button className="btn" value={item} onClick={() => handleBuy(item)}>Add to cart</button>
  </div>
  <div class="card-footer">
    <small class="text-muted">{item.amount > 10 ? "In Stock" : `Hurry, there are only ${item.amount} left!` }</small>
    </div>
</div>
    ) 
} else { 
    return(
    <div> Sorry, {item.name} is sold out</div>
    )
}
}
