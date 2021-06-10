var LogoutBtn = document.getElementsByClassName("LogoutBtn")[0]
var toggleButton = document.getElementsByClassName('toggle-button')[0]
var navbarLinks = document.getElementsByClassName('navbar-links')[0]

var Settings = {
    LoginData: JSON.parse(localStorage.getItem("LoginData")),
    Debounce: false,
    DelayTime: 1000,
}

// Small Functions //
function ToggleNavBar() {
    navbarLinks.classList.toggle('active')
}

function RemoveSignedIn() {
    console.log("Storing Data")

    Settings.LoginData.SignedIn = false
    var StringifiedArray = JSON.stringify(Settings.LoginData)
    console.log("Storing Data: " + StringifiedArray)
    localStorage.setItem("LoginData", StringifiedArray)
}


// Big Functions //
function OnWindowLoad() {
    // Runs when window loads and logs out a user if they wern't signed in //

    // Print Current Details //
    console.log(Settings.LoginData)

    // Default LoginData Template //
    if (Settings.LoginData == null || Settings.LoginData.AccountCreated == false) {
        Logout()
        return
    }
}

function Logout() {
    console.log("Log out")

    // Make user logout by getting rid of their current data //
    if (Settings.LoginData && Settings.LoginData.AccountCreated == true) {
        RemoveSignedIn()
    }

    window.location.href = window.location.origin
}

// Event Listeners //
window.addEventListener('load', OnWindowLoad)
toggleButton.addEventListener('click', ToggleNavBar)