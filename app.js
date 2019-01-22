var output = document.querySelector(".output");
var weight = document.querySelector(".weightInput");
var carbInput = document.querySelector(".carbInput");
var calculate = document.querySelector(".calculateButton")

function calcCarbs() {
    // convertStrings();
    var totalCarbs = (weight.value / 100) * carbInput.value;
    output.textContent = totalCarbs + 'g';
}


weight.addEventListener("input", calcCarbs);
carbInput.addEventListener("input", calcCarbs);
calculate.addEventListener("click", calcCarbs);


// calculate.addEventListener("click", calcCarbs);