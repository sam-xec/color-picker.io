const changeBtn = document.querySelector('button');
const span = document.querySelector('span');
let timer;

function colorPicker() {
  if(changeBtn.innerText === 'Pick'){
     timer = setInterval(()=>{
        let hex = '0123456789abcdef';
        let color = '#';
        for (let i= 0; i <= 5; i++) {
            let char = Math.floor(Math.random()*16)
            color += hex[char]
        }
        document.body.style.backgroundColor = color
        span.innerText = color
    },2000)
 changeBtn.innerText = 'stop'
}
  else if(changeBtn.innerHTML = 'stop')
   {
    clearInterval(timer)
    timer = null
    changeBtn.innerText = 'Pick'
    }
   
}
