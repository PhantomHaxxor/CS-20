// INPUTS //
var UsernameInput = document.getElementById("UsernameInput")
var PasswordInput = document.getElementById("PasswordInput")
var ConfirmPasswordInput = document.getElementById("ConfirmPasswordInput")
var EmailInput = document.getElementById("EmailInput")
var Status = document.getElementById("Status")
var LoginContainer = document.getElementById("LoginContainer")

// Buttons //
var SignUpButton = document.getElementById("SignUpButton")

// Variables //
var APIKey = Math.floor(Math.random() * 90000) + 10000;

var Settings = {
    LoginData: JSON.parse(localStorage.getItem("LoginData")),
    Debounce: false,
    DelayTime: 1000,
}

function VisitHomepage() {
    window.location.href = window.location.origin + "/HTML/homepage.html"
}


function OnWindowLoad() {
    // Runs when window loads and logs in a user if they were previously signed in //

    // Print Current Details //
    console.log(Settings.LoginData)
    
    // Default LoginData Template //
    if (Settings.LoginData == null) {
        Settings.LoginData = {
            AccountCreated: false,
            SignedIn: false,
            Username: null,
            Password: null,
        }
        return
    }

    // Check if the user was signed in previously //
    if (Settings.LoginData.SignedIn == true) {
        // Make player visit the main page //
        VisitHomepage()
        return
    }
}

function StoreData(Username, Password, Email) {
    console.log("Storing Data")
    var StringifiedArray = JSON.stringify({
        AccountCreated: true,
        SignedIn: true,
        Email: Email,
        Username: Username,
        Password: Password,
    })

    console.log("Storing Data: " + StringifiedArray)
    localStorage.setItem("LoginData", StringifiedArray)
}

function DebounceTimeout(text, callback) {
    SignUpButton.value = text
    Settings.Debounce = true

    setTimeout(() => {
        Settings.Debounce = false
        if (callback) {
            callback()
        } else {
            SignUpButton.value = "Sign up"
        }
    }, Settings.DelayTime);
}

function SignUp() {
    if (Settings.LoginData.AccountCreated == true) {
        DebounceTimeout("Account already exists")
        return
    }

    if (Settings.Debounce == true) {
        SignUpButton.value = "Please wait before retrying"
        return
    }

    var Username = UsernameInput.value
    var Password = PasswordInput.value
    var ConfirmedPassword = ConfirmPasswordInput.value
    var Email = EmailInput.value
    
    // Check if Input is empty //
    if (Username === "" || Password === "" || ConfirmedPassword === "" || Email == "") {
        DebounceTimeout("All fields are required")
        return
    }

    // Check if password is less than 6 characters //
    if (Password.length < 6) {
        DebounceTimeout("Password must be greater than 6 characters")
        return
    }
    // Check if Password matches confirmed password //
    if (Password !== ConfirmedPassword) {
        DebounceTimeout("Password does not match")
        return
    }

    if (ValidateEmail(Email) == false) {
        DebounceTimeout("Enter a valid email")
        return
    }

    DebounceTimeout("Sign up successful", () => {
        LoginContainer.classList.add("hide")
        Status.classList.remove("hide")
        Status.classList.add("show")

        StoreData(Username, Password, Email)

        setTimeout(() => {
            VisitHomepage()
        }, 2500);
    })
}

function OnKeyPress(Data) {
    if (Data.keyCode == 13) {
        SignUp()
    }
}

// Event Connections //
window.addEventListener('load', OnWindowLoad)
window.addEventListener('keypress', OnKeyPress)
SignUpButton.addEventListener('click', SignUp)