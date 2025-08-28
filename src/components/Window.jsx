  import { useState } from 'react'
import Button from '../components/Button'
  
  export default function Window(prop){

  
    return (
        <div className='modelWindow'>
            <div className="formBtn">
                <Button onClick = {prop.handelModelClose}>Cancel</Button>
                <Button onClick = {prop.handelSaveBtn}>Save</Button>
            </div>
            <form action="#">
               <label htmlFor="title">TITLE</label>
               <input type="text" name="title" id="" onChange={(e)=>{
                  prop.setTitle(e.target.value)
            
               }}/>

               <label htmlFor="des">DESCRIPTION</label>
               <textarea name="des" id="" onChange={(e)=>{
                  prop.setDes(e.target.value)
                  
               }}></textarea >

               <label htmlFor="date">DUE DATE</label>
               <input type="date" name="date" id=" " onChange={(e)=>{
                prop.setDate(e.target.value)
                
               }} />
            </form>
        </div>
    )
  }