console.log("Hey there");

/*for loop 
 
for(i=0;i<11;i++){
    console.log(i+" ")
}*/

// star pattern

/*
let n = 5;
let s = "";

for (let i = 1; i <= n; i++) {
  
  for (let j = 1; j <= n - i; j++) {
    s += " ";
  }
  
for (let k = 0; k < 2 * i - 1; k++) {
    s += "*";
  }
  s += "\n";
}
console.log(s+" ");
*/


// next pattern 

 /*let n=8;

 for(let i=1;i<=n;i++){
   for(let j=1;j<=n-i;j++){
    console.log("*")
   }
 }*/ 

 /*   targeted by getElementby class name

 let box = document.getElementsByClassName("box");
  console.log(box);
 

  box[2].style.backgroundColor = "red";

  //     targeted by getElementby ID

  document.getElementById("abc").style.backgroundColor="aqua"

  //     targeted by querrySelector

  document.querySelector(".box").style.backgroundColor=" pink"
 

  let buton = document.getElementById("btn");
  buton.addEventListener("click", ()=>{
    document.getElementById("con").innerHTML="Content changed after Click"
  }) */

  let button = document.getElementById("btn");
  button.addEventListener("click", ()=>{
    alert("Submit");

  })
  