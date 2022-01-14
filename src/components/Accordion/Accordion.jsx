import { useState } from "react";

export default function Accordion(){

    const [isShowing, setIsShowing] = useState(false);

    return(
        <div>
            {isShowing ===true && <p>Mirame</p>}
            
            <button onClick={()=>setIsShowing(!isShowing)}>Mostrar</button>
        </div>
    )
}