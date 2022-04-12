import React from 'react'

const initialState = {
  todoText: ''
}

export default class Form extends React.Component {
  state = initialState

  handleChanges = evt => {
    this.setState({
      todoText: evt.target.value
    })
  }
  render() {
    return (
      <form>
        <input 
        type='text'
        name='todo'
        value={this.state.todoText}
        onChange={this.handleChanges}
        />
        <button>Add Todo</button>
      </form>
    )
  }
}
