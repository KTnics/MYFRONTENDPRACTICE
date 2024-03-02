const pianoKeys = document.querySelector('.key')
function Playsound(newUrl){
    new Audio(newUrl).play()

    
}

pianoKeys.forEach((pianoKey,i)=>{
    const newUrl='24/key'+i+1+'.mp3'
    pianoKey.addEventLister('click',()=>Playsound(newUrl))
})