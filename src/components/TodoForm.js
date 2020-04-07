import React from 'react'


class TodoForm extends React.Component
{

  constructor(props)
  {
    super(props);
    this.state ={}
      // this.state = {
      //   task: "",f
      //   id: "",
      //   completed: false
      // }
      // this.list = []
  }

  state = {
    text: ""
  }

  handleClick = (event) =>
  {

    // this.state = [...this.state, { "task": document.getElementById("task").value, id: Date(), completed: false }]
    this.list = [...this.list, document.getElementById("task").value]
  }

  handleChange = (event) =>
  {
    this.setState({
      [event.target.name]: event.target.value
    })

  }


  handleSubmit = (e) =>
  {
    e.preventDefault()
    this.props.addTask(e, this.state.text)
    this.setState({
      text: ""
    })  
  }

  render()
  {
    return (

      <div>
        <h1>Welcome to Today </h1>
        <form onSubmit={this.handleSubmit} action="">
          <input name="text"
            type="text"
            onChange={this.handleChange}
            placeholder="enter your task"
            id='task'
            value={this.state.text} />
          <button onClick={this.handleSubmit}  >Add Todo</button>
          <button >Clear Completed</button>
          <br/>
          <br/>

        </form>
        {/* <p>{this.props.todo.task}</p> */}
      </div>
    )
  }


}

export default TodoForm