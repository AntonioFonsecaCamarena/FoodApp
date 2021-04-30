import React from 'react';
import './App.css';

import 'bootstrap/dist/js/bootstrap.bundle.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';

// import $ from 'jquery'; 
// import OwlCarousel from 'react-owl-carousel';
// import 'owl.carousel/dist/assets/owl.carousel.css';
// import 'owl.carousel/dist/assets/owl.theme.default.css';

import {MainComponent} from './components/MainComponent'

function App() {
  return (
    <div className="App" >
      <MainComponent/>
     </div>
  );
}

export default App;
