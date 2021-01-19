import React from 'react'
import ItemList from './components/ItemList'
import {GlobalProvider} from './context/GlobalState'
import './App.css';  

function App() {
   
  return (
      <div 
      // className="container"
      >
        <GlobalProvider >
        <ItemList/>
        </GlobalProvider>
      </div>
  );
}

export default App;
