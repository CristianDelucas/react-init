import { useContext, useState } from "react"
import { CounterContext } from "../../App"

export default function CounterCont(){

    const {count,setCount} = useContext(CounterContext);
    console.log('hola')

    return(
        <div>
        <button onClick={()=>setCount(count+1)}>Suma</button>
        <button onClick={()=>setCount(count-1)}>Resta</button>
        <h1>Contador Contexto: {count}</h1>
        </div>
    )

}