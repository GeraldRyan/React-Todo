import React from 'react'
import './Todo.css'

export default function Todo (props){
  return (

  <p id={props.id}>{props.task}</p>)
}