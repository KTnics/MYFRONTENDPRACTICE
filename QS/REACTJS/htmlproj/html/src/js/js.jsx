import N from "./istockphoto-177006647-612x612.jpg"
import "./js.css"
const App =()=>{
    function clicked(){
        let a=

     document.body.style.backgroundColor="white"
      
    
    
    }
    function blu(){
        let x=document.getElementById("ip1")
        x.value=x.value.toUpperCase()
    }
    const name="nickhil"
    const age=25
    return(
      <div>
        <body>
        <div>
          
           
          {/* <input id="ip1" type="text" onBlur={blu} ></input>
          <h1>my name is {name}my age is {age}</h1>
          <h2>{`my name is ${name} age is ${age}`}</h2> */}

<div>
        <nav>
              <div className="nb">home</div>
              <div className="nb">projects</div>
              <div className="nb">activities</div>
              <div className="nb">blos</div>
              <div>
<label className="switch" id="btn1" onClick={clicked} >
<input type="checkbox"/>
<span className="slider round"></span>
</label></div>
          </nav>
        </div>
        
      

      </div>
        </body>
      </div>
    )
}
export default App