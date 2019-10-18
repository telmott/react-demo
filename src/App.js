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

    // this.getText = this.getText.bind(this);
    // this.getClassName = this.getClassName.bind(this);
  }

  // getText() {
  //   if (this.state.day) {
  //     return this.state.dayText;
  //   }

  //   return this.state.nigthText;
  // }

  // getClassName() {
  //   if (this.state.day) {
  //     return 'day';
  //   }

  //   return 'night';
  // }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Text text={'isto é o componente Text'} />
        </header>
      </div>
    );
  }
}

export default App;

// <Text text={this.state.dayText} />
// <Text text={this.getText()} />
// <header className={'App-header ' + this.getClassName()}>