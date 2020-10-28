import React from 'react'

class GameList extends React.Component {
  state = {
    hidden: false,
    buttonText: 'Hide the Number of Games Played'
  }

  handleToggle = () => {
    if (this.state.hidden) {
      this.setState(prevState => ({
        hidden: !this.state.hidden,
        buttonText: 'Hide the Number of Games Played'
      }))
    }
    else {
      this.setState(prevState => ({
        hidden: !this.state.hidden,
        buttonText: 'Show the Number of Games Played'
      }))

    }
  }
  render() {
    const { users } = this.props;
    const { hidden, buttonText } = this.state
    return (
      <div>
        <ol>
          {
            users.map((user, index) => {
              return <li key={index}>{user.userName} played {hidden ? '\*' : user.gamesPlayed} games.</li>
            })
          }
        </ol>
        <div>
          <button className='smallButton' onClick={this.handleToggle}>{buttonText}</button>
        </div>
      </div>
    )
  }
}

export default GameList;