import React, { useEffect } from 'react';
import './App.css';

import { connect } from 'react-redux';

import Price from './components/Price';

import { getPrice } from './actions/index';


function App({ dispatch }) {
  
  useEffect(() => {
    dispatch(getPrice());
  }, []);
  
  const handleClick = () => {
    dispatch(getPrice());
  }

  return (
    <div className="App">
      <div className='container'>
        <h1 className='title'>Bitcoin Price Checker</h1>
        <Price />
        <button onClick={handleClick}>Get Current Price</button>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    bpi: state.bpi,
  };
};

export default connect(mapStateToProps)(App);