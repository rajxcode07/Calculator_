const display = document.getElementById("display");

const buttons = document.querySelectorAll("button");

const clear = document.querySelector(".clear");

const Delete = document.querySelector(".Delete");

const decimal = document.querySelector(".decimal");

const operators = document.querySelectorAll(".operator");

let firstNumber = "";
let operator = "";


// Number buttons
buttons.forEach(function(button) {
    button.addEventListener("click", function() {

        if (
            !button.classList.contains("operator") &&
            !button.classList.contains("clear") &&
            !button.classList.contains("Delete") &&
            !button.classList.contains("decimal")
        ) {
            display.value += button.innerText;
        }

    });
});


// Clear button
clear.addEventListener("click", function() {
    display.value = "";
    firstNumber = "";
    operator = "";
});


// Delete button
Delete.addEventListener("click", function() {
    display.value = display.value.slice(0, -1);
});


// Decimal button
decimal.addEventListener("click", function() {

    if (!display.value.includes(".")) {
        display.value += ".";
    }

});


// Operators
operators.forEach(function(op) {

    op.addEventListener("click", function() {

        if (op.innerText === "=") {

            let secondNumber = display.value;
            let result;

            if (operator === "+") {
                result = Number(firstNumber) + Number(secondNumber);
            }

            else if (operator === "-") {
                result = Number(firstNumber) - Number(secondNumber);
            }

            else if (operator === "*") {
                result = Number(firstNumber) * Number(secondNumber);
            }

            else if (operator === "/") {
                result = Number(firstNumber) / Number(secondNumber);
            }

            display.value = result;

            firstNumber = "";
            operator = "";

        }

        else {

            firstNumber = display.value;
            operator = op.innerText;

            display.value = "";

        }

    });

});