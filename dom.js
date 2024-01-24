let counterx = document.getElementById("count-el");
let plus = document.getElementById("a");
let minus = document.getElementById("b");
let savedthings = document.getElementById("saved")

let i=0;

function increment() {
    i+=1;
    counterx.innerText = i;
}

function decrement() {
    if(i>0){ i-=1;
        counterx.innerText=i}
   
}

function reset() {
    i=0;
    counterx.innerText=i;
    savedthings.innerText = "";
}

function save() {
  
   let gyana = i +  "_" ;
  savedthings.innerText += gyana;
  i=0;
  counterx.innerText = i;
  
}