import React from 'react'
import './Todo.css'

export default function Todo(props)
{
  return (
    <div
    className={`task${props.task.completed ? ' completed' : ''}`}
    >
      <p id={props.id}>{props.task}</p>
    </div>
)}