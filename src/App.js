import React, {useState, useMemo} from 'react'
import ItemList from './components/ItemList'
import Header from './components/Header'
import {AddItem} from './components/AddItem'
import {Context} from './context/GlobalState'
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import './App.css';

function App() {

  const [items, setItems] = useState([])

  // const value = useMemo(() => ({items, setItems}), [items, setItems]);

  return (
      <div className="container">
        <Context.Provider value={ items} >
          <Router>
        <Header/>
        <Route path="/items" component={ItemList}></Route>
       
        <AddItem/>
        </Router>
        </Context.Provider>
      </div>
  );
}

export default App;
