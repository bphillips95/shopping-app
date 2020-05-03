import React from 'react';
import ItemList from './components/ItemList'
import {GlobalProvider} from './context/GlobalState';
import './App.css';
import AddTransaction from './components/AddTransaction';

function App() {
  return (
    <GlobalProvider>
    <div className="App">
      <h2>Shopping App</h2>
      <br/>
    <ItemList/>
    <AddTransaction/>
    </div>
    </GlobalProvider>
  );
}

export default App;
