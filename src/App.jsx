import { useState } from 'react'
import './App.css'
import Left from './components/left'
import Right from './components/Right'
import Window from './components/Window'

const notes = JSON.parse(localStorage.getItem('data')) || []

function App() {

  const[modelOpen, SetmodelOpen] = useState(false);

  const[title, setTitle] = useState('')
  const[des, setDes] = useState('')
  const[date, setDate] = useState('')

  const [storedData, setStoredData]  = useState(notes);


  function handelModelOpen(){
     SetmodelOpen(true);
  }

  function handelModelClose(){
    SetmodelOpen(false);
  }



function handelSaveBtn(){
  let noteData = {
    id : Math.random(),
    Title : title,
    Des : des,
    Date : date
  }

  setStoredData([...storedData, noteData])
  console.log(storedData)
  localStorage.setItem('data', JSON.stringify(storedData))



}

  return (
     <main>
        <Left handelModelOpen = {handelModelOpen} storedData = {storedData}></Left>

        {!modelOpen && <Right handelModelOpen ={handelModelOpen}></Right>}

      { modelOpen && <Window handelModelClose = {handelModelClose} setTitle={setTitle} setDes={setDes} setDate={setDate} handelSaveBtn = {handelSaveBtn}></Window>}
     </main>
  )
}

export default App
