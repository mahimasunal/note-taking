import Button from './Button'
export default function Right({handelModelOpen}){
    return(
            <div className='right'>
            <h3 className ='rightHeading'>No Project Selected</h3>
            <p className ='rightPara'>Select a project or get started with a new one </p>
            <Button className="addProjectBtn" onClick = {handelModelOpen}>create new project</Button>
           
        </div>
    )
}