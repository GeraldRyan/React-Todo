import React from 'react';
import TodoForm from './TodoForm'
import TodoList from './TodoList'
import './App.css'


class App extends React.Component {
  constructor(){
    super()
    this.todo=[{
      task:"Remove all the trees",
      id:444,
      completed: false
    }]
  }
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state


  state = {
    count: 0
  }

increment = () =>{
  this.setState({
    count: this.state.count +1
  })
}

increment = () =>{
  this.setState({
    count: this.state.count -1
  })
}

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList></TodoList>
        <div></div>
      </div>
    );
  }
}

export default App;
