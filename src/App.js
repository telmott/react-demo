import React from 'react';
import styled from 'styled-components';
import './App.css';

const Button = styled.button`
  font-family: sans-serif;
  font-size: 1.3rem;
  border: none;
  border-radius: 5px;
  padding: 7px 10px;
  background: red;
  color: #fff;

  &:hover {
    background: blue;
  }
`

class App extends React.Component {
  render() {
    return (
        <div className="App">
          <h1>styled components</h1>
          <form action="">
            <input type="text"/>
            <button>create</button>
            <Button>Create</Button>
          </form>
        </div>
    );
  }
}

export default App;