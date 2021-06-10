var UsernameInput = document.getElementById("UsernameInput")
var PasswordInput = document.getElementById("PasswordInput")
var LoginButton = document.getElementById("LoginButton")

var Settings = {
    LoginData: JSON.parse(localStorage.getItem("LoginData")),
    Debounce: false,
    DelayTime: 1000,
}

function VisitHomepage() {
    window.location.href = window.location.origin + "/HTML/homepage.html"
}

function GetRegisteredInfo() {
    return [
        Settings.LoginData.Username,
        Settings.LoginData.Password,
        Settings.LoginData.Email,
    ]
}

function DebounceTimeout(text, callback) {
    LoginButton.value = text
    Settings.Debounce = true

    setTimeout(() => {
        Settings.Debounce = false
        if (callback) {
            callback()
        } else {
            LoginButton.value = "Sign in"
        }
    }, Settings.DelayTime);
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
            Email: null,
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

function Login() {
    var Username = UsernameInput.value
    var Password = PasswordInput.value
    
    if (Settings.Debounce == true) {
        LoginButton.value = "Please wait before retrying"
        return
    }

    if (Username === "" || Password === "") {
        DebounceTimeout("You must enter in a Username and Password")
        return
    } 

    let [StoredUsername, StoredPassword, StoredEmail] = GetRegisteredInfo()

    // Check if the Login information matches the stored information //
    if ((Username == StoredUsername || Username == StoredEmail) && Password == StoredPassword) {
        DebounceTimeout("Sign in successful", () => {

        })
        // Make user visit homepage //
        VisitHomepage()
    } else {
        DebounceTimeout("Wrong Username/Email or Password")
    }
}

// Event Connections //
window.addEventListener('load', OnWindowLoad)
LoginButton.addEventListener('click', Login)

