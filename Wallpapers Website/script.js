// script.js

function validateForm() {
  var name = document.forms["myForm"]["name"].value;
  var email = document.forms["myForm"]["email"].value;

  if (name.trim() === "") {
    alert("Please enter your name.");
    return false;
  }

  if (email.trim() === "") {
    alert("Please enter your email address.");
    return false;
  }

  // You can add more complex validation rules for the email field, if needed.
  // For simplicity, this example only checks if the email field is not empty.

  return true; // Submit the form if all validation checks pass
}
