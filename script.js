const red=document.getElementById('red');{
    red.addEventListener('click',function(){
        red.style.backgroundColor='red';
    }); 
}
const blue=document.getElementById("blue");{
    blue.addEventListener('click',function(){
        blue.style.backgroundColor='blue';
    })
}
const green=document.getElementById('green');{
    green.addEventListener('click',function(){
        green.style.backgroundColor="green";
    })
}
const yellow=document.getElementById('yellow');{
    yellow.addEventListener('click',function()
{
    yellow.style.backgroundColor='yellow'
})
}

const greetBtn = document.getElementById("greet");
const nameInput = document.getElementById("name");
const greeting = document.getElementById("greeting");

let intervalId = null;

greetBtn.addEventListener("click", function () {

    let name = nameInput.value;

    if (intervalId !== null) {
        clearInterval(intervalId);
        intervalId = null;
    }
    intervalId = setInterval(function () {
        greeting.textContent = "Hello, " + name;
    }, 500);

});
