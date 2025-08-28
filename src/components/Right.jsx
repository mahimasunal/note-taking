import Button from '../components/Button'

export default function Right(prop){
    return(
        <div className='right'>
            <h3 className='rightHeading'>No Project Selected</h3>
            <p className='rightPara'>Select a project or get started with a new one </p>
            <Button onClick = {prop.handelModelOpen}>create new project</Button>
           
        </div>
    )
}