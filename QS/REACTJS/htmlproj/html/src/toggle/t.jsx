import "./t.css"
import N from "./Naruto_newshot.webp"
import I from "./download.png"
import H from "./home.png"
import F from "./flutter.png"
import P from "./py.png"

const To = ()=>{
    function clicked(){
        var checkbox = document.getElementById("switch");
       
        // document.body.style.backgroundColor="black"
        if (checkbox.checked) {
            let a = checkbox.value = "Checked";
            document.body.style.color = "white"
            document.body.style.background = "black"

          } else {
            let b = checkbox.value = "Unchecked";
            document.body.style.color = "black"
            document.body.style.background = "white"                        }
     
          

    
      

    }
   
    function blu(){
        let x=document.getElementById("ip1")
        x.value=x.value.toUpperCase()
    }
    return(
        <div>
            <body>
            <nav>
              <div className="nb">HOME</div>
              <div className="nb">PROJECTS</div>
              <div className="nb">INTERNSHIP</div>
              <div>
              <input type="checkbox" id="switch" className="checkbox" onClick={clicked}/>
                <label for="switch" className="toggle"><h1>☀️</h1><h1 style={{marginTop:"20px",marginRight:"10px"}}>🌙</h1></label>
                </div>
          </nav>
          <div id="header">
            <div className="h-block">
                <img src={N} alt="" id="N"  />
                
            </div>
            
            <div className="h-block" id="hb2"  >
                <h1 style={{border:"3px solid black",}}>NARUTO UZUMAKI</h1>
                <h2 style={{border:"3px solid white"}}>react developer</h2>
            </div>

          </div>
          <div className="container">
 <img src={N} alt="" style={{width:"100%"}} />
  <div className="text-block" style={{border:"4px solid white"}}>
  <h1 style={{border:"3px solid black",width:"auto"}}>NARUTO UZUMAKI</h1>
                <h2 style={{border:"3px solid white"}}>react developer</h2>
        
  </div>
</div>
<hr />
<div>
  <h1 style={{textAlign:"center",fontFamily:"cursive"}}>
    WHAT DOES I DO ?
  </h1>
</div>
<div className="my"  style={{border:"5px solid black",padding:"20px"}}>
  <div className="myb" style={{textAlign:"center"}}>
    
    <img src={I} alt="" style={{height:"200px",width:"200px",borderRadius:"20px"}} />
    <h1>I am a Front-End Developer</h1>
  <p>For the front-end I usually work with Javascript, either standalone or including popular frameworks like ReactJS and VueJS. I also make the web pretty by using Sass, CSS and, whenever needed, any of their friends: Bootstrap, Bulma, etc.

For the back-end I also work with Javascript (NodeJS, Express, MongoDB, etc). But, of course, whenever the project requires PHP, I do PHP as well (Wordpress, Laravel, etc).

  </p>
  </div>
  <div className="myb1" style={{textAlign:"center"}}>
    
    <img src={I} alt=""  style={{height:"200px",width:"200px",borderRadius:"20px"}} />
    <h1>I am a Front-End Developer</h1>
  <p>For the front-end I usually work with Javascript, either standalone or including popular frameworks like ReactJS and VueJS. I also make the web pretty by using Sass, CSS and, whenever needed, any of their friends: Bootstrap, Bulma, etc.

For the back-end I also work with Javascript (NodeJS, Express, MongoDB, etc). But, of course, whenever the project requires PHP, I do PHP as well (Wordpress, Laravel, etc).

  </p>
  </div>
  <div className="myb" style={{textAlign:"center"}}>
    
    <img src={I} alt="" style={{height:"200px",width:"200px",borderRadius:"20px"}} />
    <h1>I am a Front-End Developer</h1>
  <p>For the front-end I usually work with Javascript, either standalone or including popular frameworks like ReactJS and VueJS. I also make the web pretty by using Sass, CSS and, whenever needed, any of their friends: Bootstrap, Bulma, etc.

For the back-end I also work with Javascript (NodeJS, Express, MongoDB, etc). But, of course, whenever the project requires PHP, I do PHP as well (Wordpress, Laravel, etc).

  </p>
  </div>
</div>
<div>
  <hr />
  <div>
    <h1 style={{textAlign:"center",fontFamily:"cursive"}}>MY PROJECTS</h1>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident blanditiis laudantium, eligendi animi quibusdam cumque impedit delectus dolorem laborum mollitia explicabo culpa harum vel expedita libero labore? Ullam, facilis perspiciatis.</p>
  </div>
  <div className="proj" style={{display:"flex",border:"5px solid black"}}>
    <div className="projb">
      <img src={H} alt="" className="H" style={{height:"300px",width:"300px",borderRadius:"50px"}}/>

    </div>
    <div className="projb" style={{height:"300px",width:"100%",border:"5px solid white",textAlign:"center"}}>
     <img src={F} alt="" style={{height:"50px",width:"50px"}} />
     <img src={P} alt="" style={{height:"50px",width:"50px"}} />
     <h3>Full Stack Mobile App</h3>
     <h5>
      mobile application using flutter as a frontend and python as a backend 
     </h5>

     <h1 style={{borderTop:"5px solid white"}}>
      github
     </h1>
     <button style={{height:"50px",width:"100px",backgroundColor:"grey",borderRadius:"10px"}}>click</button>

     
    </div>
  </div>
</div>
<hr />
<footer style={{border:"5px solid white",height:"50px"}}>
  <div className="footer" style={{display:"flex"}}>
    <div className="fitem">Github</div>
    <div className="fitem">7020018722</div>
    <div className="fitem">LinkedIn</div>
  </div>
</footer>
                
            </body>
        </div>
    )
}
export default To