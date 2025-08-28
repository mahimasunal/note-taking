import Button from "./Button";

export default function Left(prop){
    return(
        <div className="left">
            <h2 className="leftHeading">YOUR PROJECTS</h2>
            <Button onClick = {prop.handelModelOpen}>add Project</Button>
            
            <div className="listTitle">
                {prop.storedData.map((obj)=>{
                   return <li>{obj.Title}</li>
                })}
            </div>
        </div>
    )
}