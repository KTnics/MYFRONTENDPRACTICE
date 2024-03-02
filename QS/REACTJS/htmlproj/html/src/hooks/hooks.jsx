import { useState } from "react"
const Hook=()=>{

    const [count,setCount]=useState(0)
    const[color,setColor]=useState('red')
    const[bg,setBg]=useState(document.body.style.backgroundColor="black")
    const [bgb,setBb]=useState('yellow')
    const [name,setName]=useState("")
    return(
        <div>
            <input type={'text'} onChange={(e)=>setName(e.target.value)}/>
            <h1>my name is {name}</h1>

            <h1 style={{color:`${color}`,backgroundColor:`${bgb}`}}>{count}</h1>
            <button onClick={()=>setCount(count+1)}>+</button>
            <button onClick={()=>setCount(count-1)}>-</button>
            <button onClick={()=>setColor('green')}>C</button>
            <button onClick={()=>setBb('orenge')}>Bgb</button>
            <button onClick={()=>setBg(document.body.style.backgroundColor=('white'))}>Bg</button>
        </div>
              
    )
}
export default Hook