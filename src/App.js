import React from 'react';
import './App.css';
import Text from './components/Text';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      day: true,
      dayText: 'DAY',
      nigthText: 'NIGHT'
    }

    this.getClassName = this.getClassName.bind(this);
    this.changeText = this.changeText.bind(this);
    this.getText = this.getText.bind(this);
    this.toggleDay = this.toggleDay.bind(this);
  }

  toggleDay() {
    this.setState(
      { day: !this.state.day }
    );
  }

  getClassName() {
    if (this.state.day) {
      return 'day';
    }

    return 'night';
  }

  changeText(e) {
    var key = 'nigthText';

    if (this.state.day) {
      key = 'dayText';
    }

    this.setState(
      {[key]: e.target.value}
    );
  }

  getText() {
    if (this.state.day) {
      return this.state.dayText;
    }

    return this.state.nigthText;
  }

  render() {
    return (
      <div className="App">
        <header className={'App-header ' + this.getClassName()}>
          <button onClick={this.toggleDay}>Toggle</button>
          <Text text={this.getText()} day={this.state.day} changeText={this.changeText}/>
        </header>
      </div>
    );
  }
}

export default App;
