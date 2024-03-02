import React from "react";
const Fchild =({name,age,cli1,cl2})=>{
    return(
        <div>
            <h1>my name is{name},{age}</h1>
            <button onClick={cli1} onDoubleClick={cl2}>CLICK</button>
        </div>
    )
}
export default Fchild