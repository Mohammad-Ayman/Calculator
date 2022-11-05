let screen = document.getElementById('screen');

let button = Array.from(document.getElementsByClassName('numbers'));

button.map( numbers => {
    numbers.addEventListener('click', (e) => {
        switch(e.target.innerText){
            case 'C':
                screen.innerText = '';
                break;
            case '=':
                try{
                    screen.innerText = eval(screen.innerText);
                } catch {
                    screen.innerText = "Error"

                }
                
                break;
            case '---':
                if (screen.innerText){
                   screen.innerText = screen.innerText.slice(0, -1);
                }
                break;
            default:
                screen.innerText += e.target.innerText;
        }
    });
});




let theme_background = document.getElementById('body');
let nu = document.getElementsByClassName('arth');
let equal = document.getElementById('equal');

function dth(){
  theme_background.style.backgroundColor='black'   ;
    document.getElementById('p').style.color="white"
    //equal.style.backgroundColor='blue'   

}
function lth(){
theme_background.style.backgroundColor='whitesmoke';
document.getElementById('p').style.color="black"
}

document.getElementById("screen").addEventListener("keydown", myFunction);

function myFunction() {

  switch (event.key) {
    case "1":
    	console.log("1");
      break;
    case "ArrowUp":
      console.log("ArrowUp");
      break;
    case "ArrowLeft":
      console.log("ArrowLeft");
      break;
    case "ArrowRight":
      console.log("ArrowRight");
      break;
    default:
      console.log(event.key, event.keyCode);
      return; 
  }

  event.preventDefault();
}
