import { useState,useMemo } from "react";
const Memo =()=>{
    const[count,setCount]=useState(0)
    const power=()=>{
        return count**2
    }
    const pow = useMemo(()=>power(count))
    return(
        <div>
            <h1>count:{count}</h1>
            <button onClick={()=>setCount(count+1)}>+</button>
            <h1>power:{pow}</h1>
            <button onClick={pow}>power</button>
        </div>
    )
}
export default Memo