import { useState } from 'react'
import './App.css'
import Left from './components/Left'
import Right from './components/Right'
import Form from './components/Form'
import SavedNote from './components/SavedNote'

let storedNote  = JSON.parse(localStorage.getItem('note'))|| [];

function App() {
  const[modelOpen, setModelOpen] = useState(false)
  const[selectedNote, setSelectedNote] = useState(false)
  const[note, setNote] = useState({
    title : '',
    des : '',
    date : '',
    tasks : [],
  })
  const[notes, setNotes] = useState(storedNote)
  const[selectedNoteData, setSelectedNoteData] = useState(null);

  
  localStorage.setItem('note', JSON.stringify(notes))
  
  function handelFiltering(id){
    const updatedNotes =  notes.filter((n)=> n.id !== id)    
    setNotes(updatedNotes)
  }

  function handelSelectedNote(noteObj){
    setSelectedNote(true)
    setModelOpen(false)
    setSelectedNoteData(noteObj)
  }

function handelSaveBtn(e){
  e.preventDefault()
  setNotes([...notes, note]);
    setNote({ title: '', des: '', date: '', tasks: [] }); 
  handelModelClose();

 
}

 function handelNotes(value, name){
    setNote({...note, [name] : value, id : Math.random()})
    console.log(notes)
 }


 function handleAddNoteTask(task){
    // const note = notes.find((note) => {
    //   return note.id === selectedNoteData.id
    // }
    // )
    
    // note.tasks = [...note.tasks, task]

    const updatedNotes = notes.map((note) => {
      if(note.id === selectedNoteData.id){
        return {...note, tasks: [...note.tasks, {task: task, id: Math.random()}]}
      }
      return note
    })
    setNotes(updatedNotes)
    
    setSelectedNoteData({...selectedNoteData, tasks: [...selectedNoteData.tasks, {task: task, id: Math.random()}]})


 }

 function handelDltTask(id){
     const updatedNotes = notes.map((note) => {
      if(note.id === selectedNoteData.id){
        return {
        ...note,
        tasks: note.tasks.filter((t) => t.id !== id),
      };
      }
      return note
    })
    setNotes(updatedNotes)
    setSelectedNoteData({...selectedNoteData, tasks: selectedNoteData.tasks.filter((t) => t.id !== id)})

 }

  function handelModelOpen(){
    setModelOpen(true)
    setSelectedNote(false)
  }

  function handelModelClose(){
    setModelOpen(false)
  }

  return (
    <div className='container'>
    <Left handelModelOpen = {handelModelOpen} notes = {notes} handelSelectedNote ={handelSelectedNote} handelFiltering = {handelFiltering}></Left>
    
    {modelOpen && <Form handelModelClose = {handelModelClose} handelNotes = {handelNotes} handelSaveBtn = {handelSaveBtn}></Form> }
    
    {selectedNote && <SavedNote selectedNoteData = {selectedNoteData} onAddTask ={handleAddNoteTask}onDltTask = {handelDltTask}></SavedNote>  }
    
     {!modelOpen && !selectedNote && <Right /> }
   
 
    </div>
  )
}

export default App
