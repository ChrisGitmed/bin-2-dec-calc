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

  render() {
    const { handleChange, isNotBinary } = this;
    let { input } = this.state;

    let output = <p className="flavor-text">Decimal: </p>
    if (isNotBinary(input)) {
      output = <p className="error-text">Only 0 and 1 may be entered</p>
    }

    return (
      <div className="calc-frame">
        <header className="calc-header">
          <p>Enter up to 8 binary digits to view the decimal equivalent.</p>
        </header>
        <div className="calc-body">
          <input type="text" placeholder="ex. 10100111" maxLength="8" onChange={handleChange}/>
          {output}
        </div>
      </div>
    )
  }
}
