function validateForm() {
  let x = document.forms["email_form"]["input_email"].value;
  let submit = document.getElementById("submit");
  let message = document.getElementById("invalid-text");
  if (x == "") {
    message.classList.toggle("hidden");
    submit.classList.toggle("mt-3");
    submit.classList.toggle("mt-1");
    message.innerHTML= "Oops! Please add your email";
    return false;
  } else if (!x.includes('@') && x!="") {
    message.classList.toggle("hidden");
    submit.classList.toggle("mt-3");
    submit.classList.toggle("mt-1");

    message.innerHTML="Oops! Please check your email";
    return false;
  }
}
