import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './nav.jsx'
import Bin2DecCalc from './bin-2-dec-calc'

ReactDOM.render(
  <>
    <NavBar />
    <Bin2DecCalc />
  </>,
  document.querySelector('#root')
)
