import React from 'react';
import './App.css';
import Text from './components/Text';
import styled, { ThemeProvider } from 'styled-components';
import { day, night } from './components/Themes';

const AppWrapper = styled.header`
  background-color: ${props => props.theme.background};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: ${props => props.theme.color};
`

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      day: true,
      dayText: 'DAY',
      nigthText: 'NIGHT'
    }

    this.getText = this.getText.bind(this);
    this.toggleDay = this.toggleDay.bind(this);
    this.changeText = this.changeText.bind(this);
  }

  getText() {
    if (this.state.day) {
      return this.state.dayText;
    }

    return this.state.nigthText;
  }

  getTheme() {
    if (this.state.day) {
      return day;
    }

    return night;
  }

  toggleDay() {
    this.setState(
      { day: !this.state.day }
    );
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

  render() {
    return (
      <ThemeProvider theme={this.getTheme()}>
          <AppWrapper>
            <button onClick={this.toggleDay}>Toggle</button>
            <Text text={this.getText()} changeText={this.changeText}/>
            <Text html="label" label={this.getText()}/>
          </AppWrapper>
      </ThemeProvider>
    );
  }
}

export default App;
