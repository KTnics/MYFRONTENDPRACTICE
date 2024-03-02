import N from "../image/istockphoto-177006647-612x612.jpg"
function HT(){
    return(       
       <div >
        <head></head>
        <body>
           <nav >
           <div className="nav " style={{textAlign:"center"}} >
           <a href="" style={{padding:"50px"}}>home</a>
            <a href="" style={{padding:"50px"}}>about</a>
            <a href="#foot" style={{padding:"50px"}}>footer</a>

           </div>
           </nav>
           <header>
            <div style={{}}>
            <img src={N} alt="" style={{height:"600px",width:"100%",border:"10px solid black",padding:"0 10px 0 0"}}/>
            </div>
            
           </header>
         <div style={{display:"flex"}}>
         <div style={{height:"600px",width:"70%",backgroundColor:"pink",border:"5px solid black",textAlign:"center"}}>

          <article style={{border:"5px solid" ,height:"600px"}}>
            <h1 >Article </h1>
           <div>
           <header style={{border:"5px solid",height:"200px",backgroundColor:'skyblue'}} >
              <h1>header</h1>
            </header>
            
            <section style={{border:"5px solid",backgroundColor:"purple"}}>
              <h1>secttion one</h1>
            </section>
            <section style={{border:"5px solid",backgroundColor:"purple"}}>
              <h1>secttion two </h1>
            </section>
            <footer >
              <h1>footer</h1>
            </footer>
          
           </div>
           </article>
           
         
          
          
         
          </div>
          <div style={{height:"600px",width:"30%",backgroundColor:"skyblue",border:"5px solid black"}}>
           <aside style={{border:"5px solid black" ,height:"50%",backgroundColor:"lightsalmon"}}>
            <h1>aside1 </h1>
           </aside>
           <aside style={{border:"5px solid black" ,height:"50%",backgroundColor:"lightsalmon"}}>
            <h1>aside2 </h1>
           </aside>

           </div>
         </div>
         <footer id="foot" style={{width:"100%",border:"5px solid",textAlign:"center",backgroundColor:"tomato"}}>
          <h1>FOOTER  </h1>
         </footer>
         
        </body>
       </div>
    )
}
export default HT