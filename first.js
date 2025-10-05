function clearErrors() {
    errors = document.getElementsByClassName('error');
    for (let item of errors) {
        item.innerHTML = "";
    }
}
document.getElementById("registrationForm").addEventListener("submit", function (event) {
    event.preventDefault();
    clearErrors();
    let valid = true;

    let name = document.getElementById("name").value.trim();
    let nameError = document.getElementById("nameError");

    if (name === "") {
        nameError.textContent = "**Please enter your name.";
        valid = false;
    } else {
        let Letters = true;
        for (let i = 0; i < name.length; i++) {
            let ch = name[i];
            if (!((ch >= "A" && ch <= "Z") || (ch >= "a" && ch <= "z") || ch === " ")) {
                Letters = false;
                break;
            }
        }
        if (!Letters) {
            nameError.textContent = "**Name can have only letters and spaces.";
            valid = false;
        } else {
            nameError.textContent = "";
        }
    }

    let email = document.getElementById("email").value.trim();
    let emailError = document.getElementById("emailError");

    if (email === "") {
        emailError.textContent = "**Please enter your email.";
        valid = false;
    } else if (email.indexOf("@") === -1) {
        emailError.textContent = "**Email must contain '@' symbol.";
        valid = false;
    } else {

        let atPosition = email.indexOf("@");
        let dotPosition = email.indexOf(".", atPosition);

        if (dotPosition === -1) {
            emailError.textContent = "Email must have a '.' after '@'. Example: abc@gmail.com";
            valid = false;
        } else {
            emailError.textContent = "";
        }
    }

    let contact = document.getElementById("contact").value.trim();
    let contactError = document.getElementById("contactError");
    if (contact.length === 0) {
        contactError.textContent = "**Please enter your contact number";
        valid = false;
    }
    else if (contact.length !== 10) {
        contactError.textContent = "**Contact number must be 10 digits.";
        valid = false;
    }
    else {
        contactError.textContent = "";
    }



    let gender = document.getElementById("gender").value;
    let genderError = document.getElementById("genderError");

    if (gender === "") {
        genderError.textContent = "**Please select your gender.";
        valid = false;
    } else {
        genderError.textContent = "";
    }


    let password = document.getElementById("password").value;
    let passwordError = document.getElementById("passwordError");

    if (password === "") {
        passwordError.textContent = "**Please enter your password.";
        valid = false;
    } else if (password.length < 6) {
        passwordError.textContent = "**Password must be at least 6 characters long.";
        valid = false;
    } else {

        let hasUppercase = false;
        let hasLowercase = false;
        let hasNumber = false;
        let hasSpecial = false;

        for (let i = 0; i < password.length; i++) {
            let ch = password[i];
            if (ch >= "A" && ch <= "Z") {
                hasUppercase = true;
            } else if (ch >= "a" && ch <= "z") {
                hasLowercase = true;
            } else if (ch >= "0" && ch <= "9") {
                hasNumber = true;
            } else {
                hasSpecial = true;
            }
        }

        if (!hasUppercase) {
            passwordError.textContent = "**Password must contain at least one uppercase letter (A–Z).";
            valid = false;
        } else if (!hasLowercase) {
            passwordError.textContent = "**Password must contain at least one lowercase letter (a–z).";
            valid = false;
        } else if (!hasNumber) {
            passwordError.textContent = "**Password must contain at least one number (0–9).";
            valid = false;
        } else if (!hasSpecial) {
            passwordError.textContent = "**Password must contain at least one special character (!, @, #, $, etc.).";
            valid = false;
        } else {
            passwordError.textContent = "";
        }
    }

    let confirmPassword = document.getElementById("confirmPassword").value;
    let confirmPasswordError = document.getElementById("confirmPasswordError");

    if (confirmPassword === "") {
        confirmPasswordError.textContent = "**Please re-enter your password.";
        valid = false;
    } else if (confirmPassword !== password) {
        confirmPasswordError.textContent = "**Passwords do not match.";
        valid = false;
    } else {
        confirmPasswordError.textContent = "";
    }

    if (valid) {
        alert("Registration Successful!");
        document.getElementById("registrationForm").reset();
    }
});