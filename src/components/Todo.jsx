import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons"
import { faTrash } from "@fortawesome/free-solid-svg-icons"

export default function Todo({task,toggleComplete}){
  return (
    <>
    <div className="Todo">
      <p onClick={()=> toggleComplete(task.id)} className={`${task.completed? 'completed' : ""}`}>{task.task}</p>
      <div>
      <FontAwesomeIcon icon={faPenToSquare}/>
      <FontAwesomeIcon icon={faTrash}/>
      </div>
    </div>
    </>
  )
}