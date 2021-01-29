import React from 'react';

export default class Bin2DecCalc extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      output: '',
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    console.log('event.target.value: ', event.target.value);
    this.setState({
      input: event.target.value
    })
  }

  render() {
    const { handleChange } = this;
    const { input, output } = this.state;

    return (
      <div className="calc-frame">
        <header className="calc-header">
          <p>Enter up to 8 binary digits to view the decimal equivalent.</p>
        </header>
        <div className="calc-body">
          <input type="text" placeholder="ex. 10100111" maxLength="8" onChange={handleChange}/>
          <p className="converted-value">Output: {output}</p>
        </div>
      </div>
    )
  }
}
