const colors = ["yellow","red", "rgba(1237,181,1901,0.9)", "rgb(120,10,233)", "#d1cec2"];
const btn = document.getElementById("btn");

const color = document.querySelector(".color");

btn.addEventListener("click", function(){
   const randomNumber = getRandomNumber();
   console.log(randomNumber);
   document.body.style.backgroundColor = colors[randomNumber];
   color.textContent = colors[randomNumber];
   color.style.color = colors[randomNumber];
});

function getRandomNumber(){
    return Math.floor(Math.random()*colors.length);
}