import Button from './Button'

export default function Form({handelModelClose, handelNotes, handelSaveBtn}){

    return (
       <div className='modelWindow'>
            <div className="formBtn">
                <Button className="cancelBtn" onClick={handelModelClose} type='button'>Cancel</Button>
               
            </div>
            <form action="#">
               <label htmlFor="title">TITLE</label>
               <input type="text" name="title" id="title" onChange={(e)=>{
                  handelNotes(e.target.value,e.target.name)
               }}/>

               <label htmlFor="des">DESCRIPTION</label>
               <textarea name="des" id="des" onChange={(e)=>{
                    handelNotes(e.target.value,e.target.name)
               }}></textarea>

               <label htmlFor="date">DUE DATE</label>
               <input type="date" name="date" id="date" onChange={(e)=>{
                  handelNotes(e.target.value,e.target.name)
               }} />
                <Button className="saveBtn" onClick={handelSaveBtn}>Save</Button>
            </form>
        </div>
    )
}