var numbers = document.querySelectorAll('.number');

numbers.forEach(function(number) {
    number.addEventListener("mouseover", function() {
        if (number.style.backgroundColor === 'grey') {
            number.style.backgroundColor = 'orange';
        }
        else{

        }
    });

    number.addEventListener("click", function() {
        if (number.style.backgroundColor === 'grey') { 
            number.style.backgroundColor = 'white';
        } 
        // else if (getComputedStyle(number).backgroundColor === 'rgb(77, 72, 72)') {
        //     number.style.backgroundColor = 'white';
        // }
    });
});