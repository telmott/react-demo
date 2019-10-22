import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import './App.css';

const theme = {
  primary: 'red',
  secondary: 'green',
  alert: 'yellow',
  font: 'sans-serif'
}

const Button = styled.button`
  font-family: ${props => props.theme.font};
  font-size: 1.3rem;
  border: none;
  border-radius: 5px;
  padding: 7px 10px;
  /* background: ${props => props.primary ? 'red' : 'green' }; */
  background: ${props => props.color && props.theme[props.color] || props.theme.primary};
  color: #fff;

  &:hover {
    background: blue;
  }
`

class App extends React.Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <div className="App">
          <h1>styled components</h1>
          <form action="">
            <input type="text"/>
            <button>create</button>
            <Button>Create</Button>
            <Button color="alert">Create</Button>
          </form>
        </div>
      </ThemeProvider>
    );
  }
}

export default App;