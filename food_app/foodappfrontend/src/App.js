import React from 'react';
import {MenuItemComponent} from './components/MenuItemComponent';
import {AddMenuItemComponent} from './components/AddMenuItemComponent';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App" >
      <div className='container' >
      <AddMenuItemComponent/>
      </div>
      <br/><br/><br/><br/>
      <div className='container'>
     <MenuItemComponent/>
     </div>
    </div>
  );
}

export default App;
