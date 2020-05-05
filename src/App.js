import React from 'react'
import ItemList from './components/ItemList'
import Header from './components/Header'
import './App.css';

function App() {
  return (
      <div className="container">
        <Header/>
        <ItemList/>
      </div>
  );
}

export default App;
