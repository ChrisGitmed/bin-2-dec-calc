import React from 'react';

export default class Bin2DecCalc extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      input: event.target.value
    })
  }

  isNotBinary(input) {
    return /[^10]/.test(input)
  }

  calculateDecimal(input) {
    return parseInt(input, 2);
  }

  render() {
    const { handleChange, isNotBinary, calculateDecimal } = this;
    let { input } = this.state;

    let output, errorMessage;
    if (input !== '') {
      if (isNotBinary(input)) {
        errorMessage = "Only 0 and 1 may be entered."
        output = <p>Decimal: ???</p>
      } else {
        output = <p>Decimal: {calculateDecimal(input)}</p>
      }
    }

    return (
      <div className="calc-frame drop-shadow">
        <header className="calc-header">
          <p>Enter either ones or zeroes.</p>
        </header>
        <div className="calc-body">
          <div className="row justify-center">
            <input type="text" placeholder="ex. 10100111" onChange={handleChange} />
          </div>
          <div className="row justify-space-between">
            <p className="error-text">{errorMessage}</p>
            {output}
          </div>
        </div>
      </div>
    )
  }
}
