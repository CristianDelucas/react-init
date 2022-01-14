
export default function Gallery({data}){

    console.log(data);
    return(
        <div>
        
        {data.map((perro)=>
                <li key="perro.name">
                    <h1>Nombre: {perro.name}</h1>
                    <img alt={perro.name} src={perro.imgUrl}/>
                    <p>{perro.description}</p>
                </li>
            )}
        </div>
    )
}