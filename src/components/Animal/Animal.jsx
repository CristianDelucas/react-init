export default function Animal({data}){
    return(
        <div>
                <h1>{data.name}</h1>
                <p>Raze: {data.raze}</p>
                <p>Origin: {data.origin}</p>
            
        </div>
    )
}