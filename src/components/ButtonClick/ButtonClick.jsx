export default function ButtonClick(){

    const clicked = () =>{
        alert('hola');
    }

    return(
        <button onClick={clicked}>Pulsame</button>
    )
}