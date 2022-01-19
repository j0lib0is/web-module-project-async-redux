import React, { useEffect } from 'react';
import './App.css';

import axios from 'axios';

// import { getPrice } from './actions/index';
import { connect } from 'react-redux';

function App() {
  
  useEffect(() => {
    axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
			.then(resp => console.log(resp))
			.catch(err => console.error(err))
  })

  // const handleClick () => {
  //   getPrice();
  // }

  return (
    <div className="App">
      <h1>Async Redux Project</h1>
      <button>Get Current Price</button>
    </div>
  );
}

export default connect()(App);