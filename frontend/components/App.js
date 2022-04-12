import React from 'react'
import Form from './Form';
import TodoList from './TodoList'

const initialState = {
  todos: [{
    name: 'dishes',
    id: '239874792',
    completed: false
  }]
}
export default class App extends React.Component {
  state = initialState

  toggleCompleted = (todoId) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if(todoId === todo.id){
          return {
            ...todo,
            completed: !todo.completed,
          }
        }
        return todo;
      })
    })
  }

  addTodo = (evt, todo) => {
    const newTodo = {
      name: todo,
      id: Date.now(),
      completed: false
    }
    this.setState({
      todos: [...this.state.todos, newTodo]
    })
  }
  render() {
    return (
      <div>
        <TodoList 
        todos={this.state.todos}
        toggleCompleted={this.toggleCompleted}
        />
        <Form addTodo={this.addTodo}/>
      </div>
    )
  }
}
