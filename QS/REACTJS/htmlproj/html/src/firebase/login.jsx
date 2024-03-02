import { useState } from "react";
import {auth,provider} from "./firebase"
import {signInWithPopup} from ''
import Home from './Home'

const Sign=()=>{
    const[value,setValue]=useState("")
    function handleclick(){
        signInWithPopup(auth,provider)
        .then((data)=>{setValue(data.user.email)})
    }
    return(
        <div>
            {(value)?(<Home/>):(<button onClick={handleclick}>sign in Google</button>)}
        </div>
    )
}