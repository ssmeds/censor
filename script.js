// Creating input and display-div
let input = document.createElement("input");
let div = document.createElement("div");

// Adding placeholder to input
input.placeholder = "Enter any text here";

// Appending elements to body
document.body.appendChild(input);
document.body.appendChild(div);

// Eventlistener for input
input.addEventListener("keydown", function(e) {
    // If key pressed is Enter-key then save input value and proceed to function call
    if (e.key == 'Enter') {
        let userInput = input.value;
        console.log(userInput);
        replace(userInput);
        input.value = "";
    }
})

// Function that takes input value and replaces all vowels with a star (*)
function replace(userInput) {
    let result = userInput.replace(/[aeiouyåäö]/ig, "*");
    console.log(result);
    div.innerHTML = result;
}
