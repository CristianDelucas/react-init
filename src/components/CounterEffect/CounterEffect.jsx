import { useEffect, useState } from "react";

export default function CounterEffect(){

    const [count, setCount]= useState(0);
    const [count2, setCount2]= useState(0);

    const changeValue = (newValue) =>{
        setCount(newValue);
    }

    const alertMe =() =>{
        console.log('Hey');

        return ()=>{
            console.log('Bye');
        }
    }

    
    // useEffect(alertMe); //se invoca siempre
    
    // useEffect(alertMe, [count]); //se invoca siempre que se cambie la variable de estado count
    
    // useEffect(alertMe, [count,count2]); //se invoca siempre que se cambie la variable de estado count o count2

    // useEffect(()=> console.log('mount'),[]); //se invoca una vez al cargar el componente

    // useEffect(()=> {
    //     return() => console.log("unmount");
    // },[]) // se invoca cuando se destruye el componente

    return(
        <div>
        <button onClick={()=>changeValue(count+1)}>Suma</button>
        <button onClick={()=>setCount(count-1)}>Resta</button>
        <h1>Contador : {count}</h1>
        </div>
    )
}