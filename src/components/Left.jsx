import Button from './Button'

export default function Left({handelModelOpen, notes, handelSelectedNote, handelFiltering}){
    return(
        
      <div className="left">
            <h2 className="leftHeading">YOUR PROJECTS</h2>
            <Button className = "addProjectBtn" onClick = {handelModelOpen}>Add Project</Button>

            <div className="listTitle">
            {
                notes.map(note=>{
                 return <li className='individual-title-box' key={note.id} onClick={()=>{
                  
                    handelSelectedNote(note)
                 }}><span>{note.title}</span> <button onClick={(e)=>{
                    console.log(note)
                    e.stopPropagation()
                    handelFiltering(note.id)
                 }}>❌</button></li>
               })

            }
            </div>
            
        </div>

    )
}