import React from 'react';
import '../index.css';

import { connect } from 'react-redux';

const Price = ({ bpi }) => {
	return (
		<>
			<div className='price'>
				<p className='currency'>$</p>
				<p className='rate'>{bpi.usd}</p>
			</div>
			<div className='price'>
				<p className='currency'>€</p>
				<p className='rate'>{bpi.eur}</p>
			</div>
			<div className='price'>
				<p className='currency'>£</p>
				<p className='rate'>{bpi.gbp}</p>
			</div>
		</>
	);
};

const mapStateToProps = (state) => {
  return {
    bpi: state.bpi,
  };
};

export default connect(mapStateToProps)(Price);