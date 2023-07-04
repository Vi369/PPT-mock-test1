function validateForm(event) {
    event.preventDefault();

    // Reset error messages
    clearErrors();

    // Get form inputs
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const password = document.getElementById("password").value;
    const age = document.getElementById("age").value;
    const gender = document.getElementById("gender").value;
    const date = document.getElementById("date").value;
    const color = document.getElementById("color").value;

    // Perform validation
    var isValid = true;

    if (!validateName(name)) {
      displayError("nameError", "Please enter a valid name");
      isValid = false;
    }

    if (!validateEmail(email)) {
      displayError("emailError", "Please enter a valid email address");
      isValid = false;
    }

    if (!validatePhone(phone)) {
      displayError("phoneError", "Please enter a valid phone number");
      isValid = false;
    }

    if (!validatePassword(password)) {
      displayError("passwordError", "Please enter a password with at least 6 characters");
      isValid = false;
    }

    if (!validateAge(age)) {
      displayError("ageError", "Please enter a valid age");
      isValid = false;
    }

    if (!validateGender(gender)) {
      displayError("genderError", "Please select a gender");
      isValid = false;
    }

    if (!validateDate(date)) {
      displayError("dateError", "Please enter a valid date");
      isValid = false;
    }

    if (!validateColor(color)) {
      displayError("colorError", "Please select a color");
      isValid = false;
    }

    // If form is valid, submit it
    if (isValid) {
      document.getElementById("registrationForm").submit();
    }
  }

  function validateName(name) {
    // Basic validation: check if name is not empty
    return name.trim() !== "";
  }

  function validateEmail(email) {
    // Basic validation: check if email is not empty and contains @ symbol
    return email.trim() !== "" && email.includes("@");
  }

  function validatePhone(phone) {
    // Basic validation: check if phone number is not empty and contains only digits
    return phone.trim() !== "" && /^\d+$/.test(phone);
  }

  function validatePassword(password) {
    // Basic validation: check if password is at least 6 characters long
    return password.length >= 6;
  }

  function validateAge(age) {
    // Basic validation: check if age is a positive number
    return age > 0;
  }

  function validateGender(gender) {
    // Basic validation: check if gender is selected
    return gender !== "";
  }

  function validateDate(date) {
    // Basic validation: check if date is not empty
    return date.trim() !== "";
  }

  function validateColor(color) {
    // Basic validation: check if color is not empty
    return color.trim() !== "";
  }

  function displayError(elementId, message) {
    // Display error message for the given element
    const errorElement = document.getElementById(elementId);
    errorElement.innerText = message;
  }

  function clearErrors() {
    // Clear all error messages
    var errorElements = document.getElementsByClassName("error");
    for (let i = 0; i < errorElements.length; i++) {
      errorElements[i].innerText = "";
    }
  }