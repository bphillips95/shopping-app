import React from 'react'
import { Button } from '@material-ui/core';

export default function Item({item,handleBuy}) {
if(item.amount > 0) { 
    return (
        <div class="card" style={{width: '18rem'}}>
             <img src={item.img} class="card-img-top" alt="..."></img>
  <div class="card-body">
    <h5 class="card-title">{item.name}</h5>
    <h6 class="card-subtitle mb-2 text-muted">${item.cost}</h6>
    <Button className="btn" color="primary" value={item} onClick={() => handleBuy(item)}>Add to cart</Button>
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
