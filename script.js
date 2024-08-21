document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission for validation

    // Get form field values
    var fullName = document.getElementById("fullName").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
    var dob = document.getElementById("dob").value;
    var gender = document.getElementById("gender").value;
    var phone = document.getElementById("phone").value;
    var errorMessage = document.getElementById("errorMessage");

    // Regular expression for name validation (no numbers)
    var nameRegex = /^[a-zA-Z\s]+$/;
    // Regular expression for phone number validation (10 digits)
    var phoneRegex = /^\d{10}$/;

    // Validate full name (no numbers allowed)
    if (!nameRegex.test(fullName)) {
        errorMessage.textContent = "Full Name should not contain numbers.";
        return;
    }

    // Validate email (simple email validation)
    if (!email.includes("@")) {
        errorMessage.textContent = "Please enter a valid email address.";
        return;
    }

    // Validate password match
    if (password !== confirmPassword) {
        errorMessage.textContent = "Passwords do not match.";
        return;
    }

    // Validate phone number (should be 10 digits)
    if (!phoneRegex.test(phone)) {
        errorMessage.textContent = "Phone Number should be 10 digits.";
        return;
    }

    // If all validations pass
    errorMessage.textContent = "";
    alert("Form submitted successfully!");
    // You can add more form submission code here
});
