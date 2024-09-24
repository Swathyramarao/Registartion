// Select all input elements for verification 
const name = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const phoneNumber = document.getElementById("phoneNumber");
const gender = document.registration;
const age = document.getElementById("age");
const language = document.getElementById("language");
const zipcode = document.getElementById("zipcode");

// Function for form verification
function formValidation() {

    // Checking name length
    if (name.value.length < 2 || name.value.length > 20) {
        alert("Name length should be more than 2 and less than 21");
        name.focus();
        return false;
    }

    // Checking email
    if (!email.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
        alert("Please enter a valid email!");
        email.focus();
        return false;
    }

    // Checking password
    if (!password.value.match(/^.{5,15}$/)) {
        alert("Password length must be between 5-15 characters!");
        password.focus();
        return false;
    }

    // Checking phone number
    if (!phoneNumber.value.match(/^[1-9][0-9]{9}$/)) {
        alert("Phone number must be 10 characters long and the first digit can't be 0!");
        phoneNumber.focus();
        return false;
    }

    // Checking gender
    if (gender.gender.value === "") {
        alert("Please select your gender!");
        return false;
    }

    // Checking age
    if (!age.value.match(/^(1[89]|[2-7][0-9]|8[0-5])$/)) {
        alert("Age must be between 18 and 85!");
        age.focus();
        return false;
    }

    // Checking language
    if (language.value === "") {
        alert("Please select your language!");
        return false;
    }

    // Checking zip code
    if (!zipcode.value.match(/^[0-9]{6}$/)) {
        alert("Zip code must be 6 characters long!");
        zipcode.focus();
        return false;
    }

    return true;
}
