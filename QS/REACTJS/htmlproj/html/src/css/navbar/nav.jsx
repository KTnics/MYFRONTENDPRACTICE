import "../navbar/nav.css"
import N from "./istockphoto-177006647-612x612.jpg"
function nav(){
    return(
       <div >
        <div className="nav" style={{border:"4px solid white"}}>
           <div className="kt"><h1>KT</h1></div>
            <div className="blocks">home</div>
            <div className="blocks">about</div>
            <div className="blocks">projects</div>
            <div className="blocks">contcts</div>
          <div className="blocks">
          <div className="block"><i className="fa-brands fa-facebook-f"></i></div>
          <br />
           <div className="block"><i className="fa-brands fa-facebook-f"></i></div>
           <div className="block"><i className="fa-brands fa-facebook-f"></i></div>
          </div>
        </div>
        <div className="left">
           <div className="right">
           <h1>nickhil</h1>
            <h3>webdeveloper</h3>
            
           <h1 id="r-btn">Learn more</h1>
           </div>
            <img className="imgs"src={N} alt="" />
         
           
       
        </div>
        <div className="container">
        <div >
        <img  className="imgs"src={N} alt="" />
        </div>
  <div className="text-block">
   <h1>NICKHIL PATIL</h1>
   <h4>Web Developer</h4>
  </div>
</div>
 <div style={{backgroundColor:"black",color:"white"}}>
   
   
 
  <h1 style={{textAlign:"center"}}>Skills</h1>
   <p style={{textAlign:"center"}}>Lorem ipsum dolor sit amet consectetur adipisicing <br />
  Eligendi excepturi asperiores non dolores quo soluta ipsa fuga ab animi <br />
cupiditate. Assumenda, quisquam praesentium consectetur ex odio necessitatibus
 alias neque pariatur.</p>
  
 
 
<div className="sk">

   <div id="ks" style={{textAlign:"center"}}>
      <h1>Key skills</h1>
      <hr style={{color:"red"}}/>
      <h4>advance</h4>
      <h4>intermideiate</h4>
      <h4>junieor</h4>
      <h4>pro</h4>
   </div>
   <div>
   <div className="skb">HTML </div>
   <div className="skb">CSS</div>
   <div className="skb">JAVASCRIPT</div>
   <div className="skb">MONGO</div>
   <div className="skb">WORDPRESS</div>
   <div className="skb">PHP</div>
   </div>
</div>
</div>
<div className="portfolio">
   <h1 style={{color:"white",fontFamily:"cursive"}}>PORTFOLIO</h1>
   <div className="sq">
      <div className="box">
         <h1 style={{backgroundColor:"white",color:"black",textAlign:"center",paddingTop:"80px" }}>web development <hr /></h1>
         
      </div>
      <div className="box">
      <h1 style={{backgroundColor:"white",color:"black",textAlign:"center",paddingTop:"80px" }}>app development <hr /></h1>
         
      </div>
      <div className="box">
      <h1 style={{backgroundColor:"white",color:"black",textAlign:"center",paddingTop:"80px" }}> designing<hr /></h1>
         
      </div>
      

   </div>
   <br />
   <div className="sq">
      <div className="box">
         <h1 style={{backgroundColor:"white",color:"black",textAlign:"center",paddingTop:"80px" }}>web development <hr /></h1>
         
      </div>
      <div className="box">
      <h1 style={{backgroundColor:"white",color:"black",textAlign:"center",paddingTop:"80px" }}>app development <hr /></h1>
         
      </div>
      <div className="box">
      <h1 style={{backgroundColor:"white",color:"black",textAlign:"center",paddingTop:"80px" }}> designing<hr /></h1>
         
      </div>
      

   </div>
   <div className="sq2">
      <div className="box">
         <h1 style={{backgroundColor:"white",color:"black",textAlign:"center",paddingTop:"80px" }}>web development <hr /></h1>
         
      </div>
      <div className="box">
      <h1 style={{backgroundColor:"white",color:"black",textAlign:"center",paddingTop:"80px" }}>app development <hr /></h1>
         
      </div>
    
      

   </div>
   <br />
   <div className="sq2">
      <div className="box">
         <h1 style={{backgroundColor:"white",color:"black",textAlign:"center",paddingTop:"80px" }}>web development <hr /></h1>
         
      </div>
      <div className="box">
      <h1 style={{backgroundColor:"white",color:"black",textAlign:"center",paddingTop:"80px" }}>app development <hr /></h1>
         
      </div>
    
      

   </div>
   <div className="sq3">
      <div className="box">
         <h1 style={{backgroundColor:"white",color:"black",textAlign:"center",paddingTop:"80px" }}>web development <hr /></h1>
         
      </div>
      <br />
   </div>

</div>
<hr />
<div className="f" style={{display:"flex",border:"4px solid white"}}>
   <div className="fi">
      <h1 style={{color:"white"}}>get in touch</h1>
      <h3 style={{color:"white"}}>NICKHIL PATIL</h3>
      
   </div>
   <div className="fi">
      <h1 style={{color:"white" ,width:"200px",border:"4px solid white",textAlign:"center"}}>contact</h1>
   </div>
   <div className="fi"><h1 style={{color:"white"}}>
     cc </h1 ></div>

</div>



        
       </div>
    )
}
export default nav