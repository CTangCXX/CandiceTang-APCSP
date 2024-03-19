//multiple choice button
document.querySelector('#brandy').addEventListener('click', function() {
    checkMultipleChoiceAnswer("brandy");
});
document.querySelector('#vodka').addEventListener('click', function() {
    checkMultipleChoiceAnswer("vodka");
});
document.querySelector('#rum').addEventListener('click', function() {
    checkMultipleChoiceAnswer("rum");
});

function checkMultipleChoiceAnswer(selectedOption) {
    let buttons = document.querySelectorAll('.section button');
    buttons.forEach(button => {
        if (button.id === selectedOption) {
            if (selectedOption === "vodka") {
                button.style.backgroundColor = 'green';
                document.querySelector("#resultmc").innerHTML = "Correct!";
            } else {
                button.style.backgroundColor = 'red';
                document.querySelector("#resultmc").innerHTML = "Incorrect!";
            }
        } else {
            button.style.backgroundColor = '';
        }
    });
}

//free response button
document.querySelector(".section button").addEventListener("click", function () {
    checkFreeResponseAnswer();
});

function checkFreeResponseAnswer() {
    let input = document.querySelector("#cherry");
    let result = document.querySelector("#resultfr");
    let button = document.querySelector(".section button");

    if (input.value.trim().toLowerCase() === "maraschino") {
        input.style.backgroundColor = "green";
        document.querySelector("#resultfr").innerHTML = "Incorrect!";
    } else {
        input.style.backgroundColor = "red";
        document.querySelector("#resultfr").innerHTML = "Incorrect!";
    }
}
