function Reg(){
    function signup(){
        let name = document.getElementById('name').value
        let email = document.getElementById('email').value
        let pass = document.getElementById('password').value
        window.sessionStorage.setItem("name",name)
        window.sessionStorage.setItem('email',email)
        window.sessionStorage.setItem('password',pass)
        window.open("./login.jsx")
    

    }
    return(
        
       
        
      <div>
        <form action="">
            <div>
                <br />
                <h1>Register Now
                </h1>
              
            <label htmlFor="name">NAME</label>
            <input type="text" name="name" id="name" />
            <br />
            <br />
            <label htmlFor="password">PASSWORD</label>
            <input type="password" name="password" id="pssword" />
            <br />
            <br />
            <label htmlFor="email">NAME</label>
            <input type="email" name="email" id="email" />
            <br />
            <br />
            <button onClick={signup()}>SUBMIT</button>
            
            

            </div>
       
          

        </form>
      </div>
    
    )
}
export default Reg