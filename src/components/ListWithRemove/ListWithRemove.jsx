import { useState } from "react";

export default function ListWithRemove(){
    // const pokemons = ["Bulbasur","Charmander","Picachu","Squirtle"];

    const [pokemons, setpokemons] = useState(["Bulbasur","Charmander","Picachu","Squirtle"])

    const remove = (index)=>{
        const copyPokemons = [...pokemons];
        copyPokemons.splice(index,1);
        setpokemons(copyPokemons);
    }
    const removeLast = ()=>{
        const copyPokemons = [...pokemons];
        copyPokemons.pop();
        setpokemons(copyPokemons);
    }

    return(
        <div>
            {pokemons.map((pokemon,index)=>
                <li key={pokemon}>Pokemon: {pokemon} <button onClick={()=>remove(index)}>X</button></li>
            )}
            <button onClick={removeLast}>Remove Last</button>
        </div>

    )
}