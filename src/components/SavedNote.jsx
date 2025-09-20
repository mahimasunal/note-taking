import { useState } from "react"

export default function SavedNote({selectedNoteData, onAddTask, onDltTask}){
    console.log(selectedNoteData)
    const [task, setTask] = useState('')

   
    
    return(
            <div className="savedNoteContainer">
            <header>
                <div className="savedNoteData">
                    <h2 className="savedNoteTitle">{selectedNoteData.title}</h2>
                    <p className="savedNoteDate">{selectedNoteData.date}</p>
                    <p className="savedNoteDes">{selectedNoteData.des}</p>
                </div>

                <div className="dltBtn">Delete</div>
            </header>

            <div className="taskContainer">
                 <h3>Tasks</h3>
                 <input type="text" className="inputTask" onChange={(e)=>{
                       setTask(e.target.value)
                 }}/>
                 <button type="button" className="addTaskBtn" onClick={(e) => {
                    e.preventDefault()
                    onAddTask(task)
                    
                 }}>Add Task</button>
                {
                    selectedNoteData.tasks.length === 0 && <div>no tasks</div>
                }
                 {selectedNoteData.tasks.length > 0 && <ul className="taskBox">
                    {
                        selectedNoteData.tasks.map((task) => {
                            return <div className="individual-task-box" id={task.id}><span>{task.task}</span><button onClick={()=>{
                                onDltTask(task.id)
                            }}>X</button></div>
                        })
                    }
                 </ul>}
                 
            </div>
        </div>
    )
}