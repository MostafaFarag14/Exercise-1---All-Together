import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CustomForm from './components/customForm/customForm'
import GameList from './components/gamesList/gamesList'
/*
This exercise will help you put together and practice all of the concepts you've
learned thus far. It will also help you form a strong foundational knowledge of
React and prepare you for your first project.

The instructions for this project are located in the `instructions.md` file.
*/

class App extends Component {
  constructor() {
    super();
    this.state = {
      users: [
        {
          firstName: 'mostafa',
          lastName: 'farag',
          userName: 'shafra',
          gamesPlayed: 0
        }
      ]
    }
  }

  handleSubmit = (data) => {
    console.log(data)
    this.setState(prevState => ({
      users: prevState.users.concat({
        firstName: data[0],
        lastName: data[1],
        userName: data[2],
        gamesPlayed: 0
      })
    }))
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <CustomForm handleSubmit={this.handleSubmit} currentUsers={this.state.users} />
        <GameList users={this.state.users}/>
      </div>
    );
  }
}

export default App;
