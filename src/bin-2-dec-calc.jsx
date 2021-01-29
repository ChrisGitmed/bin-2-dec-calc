import React from 'react';

export default class Bin2DecCalc extends React.Component {
  render() {
    return (
      <div className="calc-frame">
        <header className="calc-header">
          <p>Enter up to 8 binary digits to view the decimal equivalent.</p>
        </header>
        <div className="calc-body">
          <input type="text" placeholder="ex. 10100111"/>
        </div>
      </div>
    )
  }
}
