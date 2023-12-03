container_error = document.getElementById("spann");
input =  document.getElementById("email_input");
input_value = input.value;
button = document.getElementById("submitt");

button.addEventListener("click",function(event)  {
    input_value = input.value;
    event.preventDefault()
    if (input_value.includes("@gmail.com")) {
       input.style.borderColor = "hsl(223, 100%, 88%)";
       container_error.textContent = "";
       
    }
    else {
        input.style.borderColor = "hsl(354, 100%, 66%)";
        container_error.textContent = "Please provide a valid email address";
        container_error.style.color = "hsl(354, 100%, 66%)";
    }
}
);