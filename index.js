function validateForm() {
    let x = document.forms["email_form"]["input_email"].value;
    if (!x.includes('@') || x=="") {
      let input = document.getElementById('invalid');
      input.classList.toggle('hidden');
      let submit = document.getElementById('submit');
      submit.classList.toggle('mt-3');
      submit.classList.toggle('mt-1');
      return false;
    }
  }