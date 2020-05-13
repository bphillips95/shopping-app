import React, {useState, useMemo} from 'react'
import ItemList from './components/ItemList'
import Header from './components/Header'
import {AddItem} from './components/AddItem'
import {Context} from './context/GlobalState'
import './App.css';

function App() {

  const [items, setItems] = useState([])
  const value = [items,setItems]

  // const value = useMemo(() => ({items, setItems}), [items, setItems]);

  return (
      <div className="container">
        <Context.Provider value={value} >
        <Header/>
        <ItemList/>
       
        <AddItem/>
        </Context.Provider>
      </div>
  );
}

export default App;
