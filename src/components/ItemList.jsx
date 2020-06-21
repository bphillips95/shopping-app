import React, {useContext, useState} from 'react'
import Item from './Item'
import Cart from './Cart'
import { Context } from '../context/GlobalState'
import Cheerios from './images/cheerios.jpg'
import Cheese from './images/cheese.jpg'
import Fries from './images/fries.jpg'
import Pizza from './images/pizza-pic.jpg'

export default function ItemList() {

    const {cart,addItem,money,spendMoney,removeItem,addSameItem} = useContext(Context)

    const [itemList, setItemList] = useState([
        {name: "Pizza", amount: 7, cost: 12, img: Pizza },
        {name: "Cheerios", amount: 21, cost: 5, img: Cheerios},
        {name: "Cheese", amount: 14, cost: 22, img: Cheese },
        {name: "Fries", amount: 40, cost: 3, img: Fries }
        // {name: "Shnitzel", amount: 19, cost: 16, img: ""}
    ])
    const handleBuy = (item) => {
        console.log(item)
        console.log(cart)
        if(cart.includes(item)) {
           let newItem = {...item, ...item.quantity++}
           addSameItem(item)
        } else if(!cart.includes(item)) {
            addItem(item)
        }
        if(money > item.cost) {
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
         alert("Your purchase was successful") 
        } else {
         alert("You do not have enough money in your account")
        }
    }
    const remove = (item) => {
        console.log(item)
        removeItem(item)
        setItemList(
            [...itemList],
            item.amount++
            )
    }

    return (
        <>
        
        <h3 
         style={{
            position: "absolute",
            left: '40%',
            top: '1%'
        }}
        >You have ${money}</h3>
        <div className="card-group"
         style={{
            position: "absolute",
            left: '10%',
            top: '15%',
            right: '20%'
        }}
        >
            {itemList.map(item => <Item item={item} handleBuy={handleBuy}/>)}
        </div>
        <div 
        style={{
            position: "absolute",
            left: '87%',
            top: '10%'
        }}
        >
            <h3>Cart:</h3>
            {cart.length > 0 ? cart.map(
                item => <Cart item={item} remove={remove}/>
                ) : "Cart is Empty"}
                <br/>
              <button
              disabled= {cart.length > 0 ? false : true}
              className="btn" onClick={checkOut}  >Check Out</button> 
        </div>

        </>
    )
}
