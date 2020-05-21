import React, {useState, useMemo} from 'react'
import ItemList from './components/ItemList'
import Header from './components/Header'
import {AddItem} from './components/AddItem'
import {GlobalProvider} from './context/GlobalState'
import './App.css';

function App() {

  const [items, setItems] = useState([])
  const value = [items,setItems]

  // const value = useMemo(() => ({items, setItems}), [items, setItems]);

  return (
      <div className="container">
        <GlobalProvider >
        {/* <Header/> */}
        <ItemList/>
        <AddItem/>
        </GlobalProvider>
      </div>
  );
}

export default App;
