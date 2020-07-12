import React, {useContext, useState} from 'react'
import Item from './Item'
import Cart from './Cart'
import { Context } from '../context/GlobalState'
import Cheerios from './images/cheerios.jpg'
import Cheese from './images/cheese.jpg'
import Fries from './images/fries.jpg'
import Pizza from './images/pizza-pic.jpg'
import CocoaPebbles from './images/cocoa-pebbles.jpeg'
import Shnitzel from './images/shnitzel.jpeg'
import RiceKrispies from './images/rice-krispies.jpeg'
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
    },
    gridList: {
      width: 500,
      height: 450,
    },
    icon: {
      color: 'rgba(255, 255, 255, 0.54)',
    },
  }));
// import tileData from './tileData';
export default function ItemList() {

    const classes = useStyles();
    const {cart,addItem,money,spendMoney,removeItem,addSameItem} = useContext(Context)

    // cereals,dairy,condiments,veggies,energy bars

    const [itemList, setItemList] = useState([
        {name: "Pizza", amount: 7, cost: 12, img: Pizza, category: "dairy" },
        {name: "Cheerios", amount: 21, cost: 5, img: Cheerios, category: "cereal"},
        {name: "Cheese", amount: 14, cost: 22, img: Cheese, category: "dairy" },
        {name: "Fries", amount: 40, cost: 3, img: Fries },
        {name: "Cocoa Pebbles", amount: 19, cost: 16, img: CocoaPebbles, category: "cereal"},
        {name: "Shnitzel", amount: 19, cost: 16, img: Shnitzel},
        {name: "Rice Krispies", amount: 19, cost: 16, img: RiceKrispies, category: "cereal"},
    ])
    let [filter, setFilter] = useState("")
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
    const dairyFilter = itemList.filter(item => item.category === "dairy")
    const cerealFilter = itemList.filter(item => item.category === "cereal")

    return (
        <>
        {/* <h3 
         style={{
            position: "absolute",
            left: '40%',
            top: '1%'
        }}
        >You have ${money}</h3> */}
        {/* switch to grid format */}
            {/* <div  style={{
                position: "absolute",
                left: '70%',
                top: '5%'}} className="dropdown">
            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Filter Items
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
            <button value={""} onClick={() => setFilter("")} class="dropdown-item" type="button">All</button>
              <button value={"dairy"} onClick={() => setFilter("dairy")}
               class="dropdown-item" type="button">Dairy</button>
              <button value={"cereal"} onClick={() => setFilter("cereal")} class="dropdown-item" type="button">Cereals</button>
            </div>
          </div> */}

          <div className={classes.root}>
      <GridList cellHeight={180} className={classes.gridList} style={{ minHeight: '100vh', width: '47%' }} >
        <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
          <ListSubheader component="div">Item List</ListSubheader>
        </GridListTile>
        {itemList.map((tile) => (
          <GridListTile key={tile.img}>
            <img src={tile.img} alt={tile.title} />
            <GridListTileBar
              title={tile.title}
              subtitle={<span>by: {tile.author}</span>}
              actionIcon={
                <IconButton aria-label={`info about ${tile.title}`} className={classes.icon}>
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>

    </div>
        {/* <div 
        className="container"
         style={{
            position: "absolute",
            left: '10%',
            top: '15%',
            right: '20%'
        }}
        >{filter === "" ? itemList.map(item => <Item item={item} handleBuy={handleBuy}/>) : null}
         {filter === "dairy" ? dairyFilter.map(item => <Item item={item} handleBuy={handleBuy}/>) : null}
         {filter === "cereal" ? cerealFilter.map(item => <Item item={item} handleBuy={handleBuy}/>) : null}
        </div> */}
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
                {/* add total cost here */}
              <button
              disabled= {cart.length > 0 ? false : true}
              className="btn" onClick={checkOut}  >Check Out</button> 
        </div>
        </>
    )
}
