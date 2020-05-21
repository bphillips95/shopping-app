import React, {useContext, useState} from 'react'
import Item from './Item'
import Cart from './Cart'
import { Context } from '../context/GlobalState'

export default function ItemList() {

    const {cart,addItem,money,spendMoney} = useContext(Context)

    const [itemList, setItemList] = useState([
        {name: "Pizza", amount: 7, cost: 12 },
        {name: "Salmon", amount: 21, cost: 15 },
        {name: "Cheese", amount: 14, cost: 22 },
        {name: "Fries", amount: 40, cost: 3 },
    ])
    const handleBuy = (item) => {
        if(cart.includes(item.name)) {
            alert("Item is already in cart")
        } else if(money > item.cost) {
        addItem(item)
        setItemList(
            [...itemList],
            item.amount--
            )
        } else {
            alert("You don't have enough money")
        }
    }
    const checkOut = () => {
        let newArr = []
       cart.map(item => newArr.push(item.cost))
       const cartPrice = newArr.reduce((a,b) => a+b)
        if(money > cartPrice) {
            spendMoney(cartPrice)
         alert("Your purchase was succesfull") 
        } else {
         alert("You do not have enough money in your account")
        }
    }
    
    return (
        <>
        <h3  style={{
            position: "absolute",
            left: '10%',
            top: '20%'
        }}>You have ${money}</h3>
        <ul  style={{
            position: "absolute",
            left: '37%',
            top: '10%'
        }}>
            {itemList.map(item => <Item item={item} handleBuy={handleBuy}/>)}
        </ul>
        <div 
        style={{
            position: "absolute",
            left: '80%',
            top: '10%'
        }}
        >
            <h3>Cart:</h3>
            {cart.length > 0 ? cart.map(
                item => <Cart item={item}/>
                ) : "Cart is Empty"}
                <br/>
              <button
              disabled= {cart.length > 0 ? false : true}
              className="btn" onClick={checkOut}  >Check Out</button> 
        </div>

        </>
    )
}
