import { useState } from "react";
const Mt =()=>{
    const contries=[
        {name:'India',sates:[{name:"mah"},{name:"kar"}]},
        {name:'pakistan',sates:[{name:"lah"},{name:"chan"}]},
        {name:'australia',sates:[{name:"texas"},{name:"juhu"}]},
        {name:'america',sates:[{name:"san-andreas"},{name:"san-francis"}]},
    ]

const [city,setCity]=useState([])
function handleContry(e){
    setCity(contries.find(i=>i.name===e.target.value).states)
}
return(
    <div>
       <select onChange={handleContry}>
        {contries.map((item)=><option key={item.name} value={item.name}>{item.name}</option>)}
       </select>
       <select>
       {city.map((item)=><option key={item.name} value={item.name}>{item.name}</option>)}
     
       </select>

    </div>

)
}
export default Mt