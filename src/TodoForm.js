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
    // console.log(event.target.value)
    // console.log(document.getElementById("task").value)


    // this.state = [...this.state, { "task": document.getElementById("task").value, id: Date(), completed: false }]

    this.list = [...this.list, document.getElementById("task").value]
    // console.log(this.list)
    console.log(this.state)
    console.log(this.list)
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
    this.props.onSubmit({
      text: this.state.text,
      id: Date.now(),
      completed: false
    })
    this.setState({
      text: ""
    })  
  }

  render()
  {
    return (

      <div>
        <h1>I'm rendering something: </h1>
        <form onSubmit={this.handleSubmit} action="">
          <input name="text"
            type="text"
            onChange={this.handleChange}
            placeholder="enter your task"
            id='task'
            value={this.state.text} />
          <button onClick={this.handleSubmit}  >Submit</button>
          <br/>
          <br/>

        </form>
        {/* <p>{this.props.todo.task}</p> */}
      </div>
    )
  }


}

export default TodoForm