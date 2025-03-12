import { useState } from "react"

export default function TodoForm(){

  const [value, setValue] = useState("");
  function handleSubmit(e){
    e.preventDefault();
    console.log(value);
    
  }
  return (
    <>
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input type="text" className="todo-input"
       placeholder="What is the task today?" onChange={(e)=>setValue(e.target.value)}/>
       <button type="submit" className="todo-btn">Add Task</button>
    </form>
    </>
  )
}