var numbers = document.querySelectorAll('.number');
var ratevalue = document.getElementById('rate');
var submit = document.getElementById('submit');

numbers.forEach(function(number){
    number.addEventListener('click' , function(){
        number.style.backgroundColor = 'white';
    });
});

submit.addEventListener('click', function(){
    submit.style.backgroundColor = 'orange';
    submit.style.color = 'white';
});

function num1() {
    ratevalue.innerHTML = "1";
}
function num2() {
    ratevalue.innerHTML = '2';
} 
function num3() {
    ratevalue.innerHTML = '3';
} 
function num4() {
    ratevalue.innerHTML = '4';
} 
function num5() {
    ratevalue.innerHTML = '5';
}

var p1 = document.querySelector(".parent");
var p2 = document.querySelector(".parent2")
var submitting = document.getElementById("submit");
// p1.style.display = 'none';
// p2.style.display= 'block';
submitting.addEventListener("click" , function(){

    if(p1.style.display == 'block'){
        p1.style.display = 'none';
        p2.style.display = 'block';
    }
    else{
        p1.style.display = 'block';

    }
    // p2.classList.add("Cls")
});
