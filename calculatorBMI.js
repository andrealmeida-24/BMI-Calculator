const heightInput = document.getElementById("height-input");
const weightInput = document.getElementById("weight-input");
const calculateButton = document.getElementById("calculate-button");
let result = document.getElementById("result");
let message = document.getElementById("message");
let image = document.getElementById("chart");

let weight;
let height;
let BMI;


calculateButton.addEventListener("click", () => {
    weight = weightInput.value;
    height = heightInput.value;
    BMI = (weight / ((height * height)
        / 10000)).toFixed(2);


    if (height < 0 || height === "") {
        message.innerText = "Please insert a valid height."
    } else if (weight < 0 || weight === "") {
        message.innerText = "Please insert a valid weight."
    } else {
        result.innerText = BMI
        image.style.visibility = "visible"
    }

    if (BMI < 18.5) {
        message.innerText = "Your BMI is bellow the normal value. You're underweight."
        result.style.color = "#F28C28"
    } else if ((BMI >= 18.5) && (BMI < 24.9)) {
        message.innerText = "Your BMI is in the range of the normal values."
        result.style.color = "#44c767"
    } else if ((BMI >= 25) && (BMI < 29.9)) {
        message.innerText = "Your BMI is above the normal values. You're overweight."
        result.style.color = "#F28C28"
    } else {
        message.innerText = "Your BMI is above the normal values. You're obese."
        result.style.color = "#C70039"
    }

});


