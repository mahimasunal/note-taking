export default function Button(prop){
    return(
        <div>
            <button className="btn" onClick={prop.onClick}>{prop.children}</button>
        </div>
    )
}