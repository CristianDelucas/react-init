import "./Button.css"
export default function Button({name,text}){
    console.log(text)
    return(
        <button className="c-button" onClick={()=>console.log(name)}>{text}</button>
    )
}