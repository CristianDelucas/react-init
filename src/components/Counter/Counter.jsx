import { useState } from "react";

export default function Counter(){

    const [count, setCount]= useState(0);

    const changeValue = (newValue) =>{
        setCount(newValue);
    }

    return(
        <div>
        <button onClick={()=>changeValue(count+1)}>Suma</button>
        <button onClick={()=>setCount(count-1)}>Resta</button>
        <button onClick={()=>setCount(count*2)}>Multiplicar por 2</button>
        <button onClick={()=>setCount(count/2)}>Dividir por 2</button>
        <button onClick={()=>setCount(0)}>Reiniciar</button>
        <h1>Contador : {count}</h1>
        </div>
    )
}