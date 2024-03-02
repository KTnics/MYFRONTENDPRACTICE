import { useEffect,useState } from "react";
const Sc=()=>{
    const[data,setData]=useState([])
    const [search,setSearch]=useState("")
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res=>res.json())
        .then(d=>setData(d))
    })
    return(
        <div>
            <input type="text" onChange={(e)=>setSearch(e.target.value)} ></input>
            
               
            {data.filter((x)=>x.name.toLowerCase().includes(search)).map((x)=>{
                return(
                    <div key={x.id}>
                        <p>{x.name}</p>

                    </div>
                )
            })}
        </div>
    )
}
export default Sc