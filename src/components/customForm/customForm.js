import React, { Component } from 'react'
import CustomInput from '../customInput/customInput'

const mapLabelToState = {
  'First Name': 'firstNameInput',
  'Last Name': 'lastNameInput',
  'User Name': 'userNameInput'
}

class CustomForm extends Component {
  constructor() {
    super();
    this.state = {
      firstNameInput: 'a',
      lastNameInput: 'b',
      userNameInput: 'c',

    }
  }

  handleChange = (e) => {
    const label = e.target.name;
    const value = e.target.value;
    this.setState(prevState => ({
      [mapLabelToState[label]]: value
    }))
  }

  checkUserName = currentUsers => {
    if (this.state.userNameInput.length === 0) {
      alert('Please enter a user name')
      return false
    }
    else if (currentUsers.some(user => user.userName === this.state.userNameInput)) {
      alert('Please enter a different user name')
      return false
    }
    return true

  }

  handleAdd = e => {
    const { handleSubmit, currentUsers } = this.props
    const { firstNameInput, lastNameInput, userNameInput } = this.state
    e.preventDefault();
    if (this.checkUserName(currentUsers)) {
      handleSubmit([
        firstNameInput,
        lastNameInput,
        userNameInput])
    }
  }
  
  render() {
    
    return (
      <div>
        {
          ['First Name', 'Last Name', 'User Name'].map((label, index) => {
            return <CustomInput
              key={index}
              label={label}
              value={this.state[mapLabelToState[label]]}
              handleChange={this.handleChange}
            />
          })
        }
        <button type='submit' onClick={this.handleAdd}>ADD</button>
      </div>
    )
  }
}

export default CustomForm;