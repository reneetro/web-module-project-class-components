import React from 'react'
import Todo from './Todo'

export default class TodoList extends React.Component {
  render() {
    return (
      <div>
        {this.props.todos.map(todo => (
          <Todo toggleCompleted={Function.prototype} key={todo.id} todo={todo} />
        ))}
      </div>
    )
  }
}
