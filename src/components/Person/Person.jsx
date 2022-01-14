export default function Person({data}){
    return (
        <div>
                <h1>{data.name}</h1>
                <p>Role: {data.role}</p>
                <p>Age: {data.age}</p>
            
        </div>
    )
}