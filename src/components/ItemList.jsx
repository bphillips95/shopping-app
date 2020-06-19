import React, {useContext, useState} from 'react'
import Item from './Item'
import Cart from './Cart'
import { Context } from '../context/GlobalState'

export default function ItemList() {

    const {cart,addItem,money,spendMoney,removeItem,addSameItem} = useContext(Context)

    const [itemList, setItemList] = useState([
        {name: "Pizza", amount: 7, cost: 12, img: '' },
        {name: "Cheerios", amount: 21, cost: 5, img: ''},
        {name: "Cheese", amount: 14, cost: 22, img: '' },
        {name: "Fries", amount: 40, cost: 3, img: '' },
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
