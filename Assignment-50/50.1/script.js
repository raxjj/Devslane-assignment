let text = document.getElementById("numbers").innerText
let num= text.split(',').map(x=>parseInt(x.trim()))

function even(){
  let display = num.filter(x=>x%2==0)
  all(display)
}
function odd(){
  let display = num.filter(x=>(x%2==1))
  all(display)
}     
function all(display){
  let p = document.getElementById("result")
  p.innerHTML = display 
}  