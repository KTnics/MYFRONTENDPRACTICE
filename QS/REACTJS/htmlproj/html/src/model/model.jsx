import { useState } from "react";
const Mod =()=>{
    const[open,setOpen]=useState(false)
    return(
        <div>
            <button onClick={()=>setOpen(!open)}>open</button>
            {open &&(
                <div>
                    <p>
                        nikhil
                    </p>
                    <button onClick={()=>setOpen(!open)}>close</button>
                </div>
            )}
        </div>
    )
}
export default Mod