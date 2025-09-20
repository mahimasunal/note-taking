export default function Button({className, children, onClick, type = "submit"}){
    return(
        <div>
            <button type = {type} className={className} onClick={onClick}>{children}</button>
        </div>
    )
}