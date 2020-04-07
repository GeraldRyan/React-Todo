import React from 'react';
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import './App.css'


const tasks = [{
  task: '',
  id: Date.now(),
  completed: false
}]

class App extends React.Component
{
  constructor()
  {
    super()

    this.state = {
      tasks:tasks
    }
    // you will need a place to store your state in this component.
    // design `App` to be the parent component of your application.
    // this component is going to take care of state, and any change handlers you need to work with your state
  }

  increment = () =>
  {
    this.setState({
      count: this.state.count + 1
    })
  }

  increment = () =>
  {
    this.setState({
      count: this.state.count - 1
    })
  }

  addTask = (e, t) =>
  {
    e.preventDefault()
    const newTask = {
      task: t,
      id: Date.now(),
      completed: false
    }
    this.setState({
      tasks: [...this.state.tasks, newTask]
    })
    console.log("t is for task:", t)  //pass
    console.log("tasks:", this.state.tasks)  //pass
    console.log("newTask:", newTask) //pass
  }


  render()
  {
    return (
      <div>
        <TodoForm addTask={this.addTask}></TodoForm>
        <TodoList tasks={this.state.tasks} ></TodoList>
      </div>
    );
  }
}

export default App;
