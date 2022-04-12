import React from 'react'

export default class Todo extends React.Component {
  render() {
    return (
      <div onClick= { () => this.props.toggleCompleted(this.props.todo.id)}>
        {console.log(this.props.todo)}
        <p>{this.props.todo.name}</p>
      </div>
    )
  }
}
