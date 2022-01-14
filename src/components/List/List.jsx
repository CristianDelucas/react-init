export default function List(){
    const pokemons = ["Bulbasur","Charmander","Picachu","Squirtle"];

    return(
        <div>
            {pokemons.map((pokemon)=>
                <li>Pokemon: {pokemon} </li>
            )}
        </div>

    )
}