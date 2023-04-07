const emailInput = document.getElementById("email-input");
const submitBtn = document.getElementById("email-submit-btn");
const errorIconOutput = document.getElementById("invalid-icon");
const errorMessage = document.getElementById("invalid-text");

function showMessage(message, status) {
    if(status === "none") {
        errorMessage.style.color = "black";
    } else {
        errorMessage.style.color = "hsl(0, 93%, 58%)";
    }
    errorIconOutput.style.display = status;
    errorMessage.style.display = "block";
    errorMessage.innerHTML = message;
  }

function submitEmail(event) {
    event.preventDefault();

    if(emailInput.value === "") {
        return showMessage("Please write a valid email", "block");
    } else if (emailInput.validity.valid) {
      // The email input is valid
      console.log("Email is valid!");
      showMessage("Thanks for sending us your email.", "none");
      
    } else {
      // The email input is not valid
      console.log("Email is not valid!", "block");
      return showMessage("Email input was invalid");
    }
  }

  submitBtn.addEventListener("click", submitEmail);

