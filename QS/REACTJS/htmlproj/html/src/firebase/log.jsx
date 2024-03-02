import { useState } from "react";

function Log(){
    const[input,setInput]=useState({name:"",email:""})
    function handlechange(e){
        setInput({...input,[e.target.name]:e.target.value})
    }
    function handleclick(){
        e.preventDefault()
        console.log(input);
    }
    return(
        <div>
            <form >
                <input type="text" name="name" value={input.name} onChange={handlechange} />
                <br />
                <input type="email" name="email" value={input.email} onChange={handlechange} />
            <br />
            <button onClick={handleclick}>submit</button>
            </form>

        </div>
    )
}
export default Log