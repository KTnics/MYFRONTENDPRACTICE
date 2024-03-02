let a=document.querySelector('#submit2')
a.addEventListener('click',(e)=>{
    e.preventDefault();
    let name=document.getElementById('name')
    let pass=document.getElementById('pass')
    window.sessionStorage.setItem('name',name)
    window.sessionStorage.setItem('pass',pass)
    window.open('./index.html')
})