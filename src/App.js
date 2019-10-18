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

    this.getText = this.getText.bind(this);
    this.getClassName = this.getClassName.bind(this);
    this.toggleDay = this.toggleDay.bind(this);
    // this.changeText = this.changeText.bind(this);
  }

  getText() {
    if (this.state.day) {
      return this.state.dayText;
    }

    return this.state.nigthText;
  }

  getClassName() {
    if (this.state.day) {
      return 'day';
    }

    return 'night';
  }

  toggleDay() {
    this.setState(
      { day: !this.state.day }
    );
  }

  // changeText(e) {
  //   var key = 'nigthText';

  //   if (this.state.day) {
  //     key = 'dayText';
  //   }

  //   this.setState(
  //     {[key]: e.target.value}
  //   );
  // }

  render() {
    return (
      <div className="App">
        <header className={'App-header ' + this.getClassName()}>
          <button onClick={this.toggleDay}>Toggle</button>
          <Text text={this.getText()} day={this.state.day}/>
        </header>
      </div>
    );
  }
}

export default App;

// <Text text={this.getText()} day={this.state.day} changeText={this.changeText}/>