import { useEffect, useState } from "react"

const Pixa = ()=>{
    const[data,setData]=useState([])
    const[search,setSearch]=useState("")
    const[open,setOpen]=useState(false)
    const[select,setSelect]=useState(null)
    
    useEffect(()=>{
        fetch(`https://pixabay.com/api/?key=40805073-baf77d1c5d0737c16386a717f&q=${search}&image_type=photo&pretty=true`)
        .then(res=>res.json())
        .then(d=>setData(d.hits))
    })
   
    return(
        <div>
            <input type="text" onChange={(e)=>setSearch(e.target.value)} />
            
            <div>
                {data && data.map((x)=>{
                    return(
                        <section key={x.id} className="sec">
                            <img src={x.webformatURL} alt=""  />
                        </section>

                    )
                })}
            </div>
        </div>
    )
}
export default Pixa