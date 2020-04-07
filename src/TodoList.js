import React from 'react';
import TodoForm from './TodoForm'
import Todo from './Todo'


export default class TodoList extends React.Component
{
  state = {
    todos: []
  }


  addTodo = todo =>
  {
    this.setState({
      todos: [todo, ...this.state.todos]
    })

    // console.log(this.state.todos)
  }

  render()
  {
    return (
      <div>
        {this.props.tasks.map(todo => (
          <div id={todo.id}>{todo.task}</div>
        ))}
        <br />
        <br />
        <Todo tasks={this.props.tasks}></Todo>
      </div>
    )
  }

}