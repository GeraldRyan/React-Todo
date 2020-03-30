import React from 'react'


class TodoForm extends React.Component
{
 
  constructor(props)
  {
    super(props);
    this.state = 
    // this.state = {
    //   task: "",
    //   id: "",
    //   completed: false
    // }
    this.list = []
  }

state = {
  text:''
}

 handleClick = (event) => {
  // console.log(event.target.value)
  // console.log(document.getElementById("task").value)
  this.state = [...this.state,{"task":document.getElementById("task").value, id:Date(), completed:false}]
  
  this.list = [...this.list,document.getElementById("task").value]
  // console.log(this.list)
  console.log(this.state)
}



  render(props)
  {
    return (

      <div>
        <h1>I'm rendering something: </h1>
        <input type="text" placeholder="enter your task" id='task'/>
        <button type='submit' onClick={this.handleClick} >Submit</button>
        <br />
        <p>{this.props.todo.task}</p>
      </div>
    )
  }


}

export default TodoForm