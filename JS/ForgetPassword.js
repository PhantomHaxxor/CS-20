var EmailInput = document.getElementById("EmailInput")
var CodeInput = document.getElementById("CodeInput")

var CodeContainer = document.getElementById("CodeContainer")
var EmailContainer = document.getElementById("EmailContainer")
var EmailText = document.getElementById("EmailText")
var EmailSentContainer = document.getElementById("EmailSentContainer")

var ResetContainer = document.getElementById("ResetContainer")

var PasswordInput = document.getElementById("PasswordInput")
var ConfirmedPasswordInput = document.getElementById("ConfirmedPasswordInput")

var RequestButton = document.getElementById("RequestCodeButton")

var Settings = {
    LoginData: JSON.parse(localStorage.getItem("LoginData")),
    Debounce: false,
    DelayTime: 1000,
    LoginCode: null,

    IsOnVerification: false,
    IsOnReset: false,
}

function GenerateCode(count) {
    var chars = 'acdefhiklmnoqrstuvwxyz0123456789'.split('');
    var result = '';
    for(var i=0; i<count; i++){
      var x = Math.floor(Math.random() * chars.length);
      result += chars[x];
    }
    return result;
  }

function VisitHomepage() {
    window.location.href = window.location.origin + "/HTML/homepage.html"
}

function StoreData(Password) {
    console.log("Storing Data")
    var CurrentData = Settings.LoginData
    CurrentData.Password = Password
    var StringifiedArray = JSON.stringify(CurrentData)

    console.log("Storing Data: " + StringifiedArray)
    localStorage.setItem("LoginData", StringifiedArray)
}

function GetRegisteredInfo() {
    return [
        Settings.LoginData.Username,
        Settings.LoginData.Password,
        Settings.LoginData.Email,
    ]
}

function DebounceTimeout(text, callback) {
    RequestButton.value = text
    Settings.Debounce = true

    setTimeout(() => {
        Settings.Debounce = false
        if (callback) {
            callback()
        } else {
            RequestButton.value = "Request Code"
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

function ResetPassword() {
    var Password = PasswordInput.value
    var ConfirmedPassword = ConfirmedPasswordInput.value

    if (Password.length < 6) {
        DebounceTimeout("Password must be greater than 6 characters")
        return
    }
    // Check if Password matches confirmed password //
    if (Password !== ConfirmedPassword) {
        DebounceTimeout("Password does not match")
        return
    }

    DebounceTimeout("Reset Successful", () => {
        StoreData(Password)

        setTimeout(() => {
           VisitHomepage()
        }, 2500);
    })
}

function EnterCode() {
    
    var Code = Settings.LoginCode
    var InputCode = CodeInput.value

    if (Code === InputCode) {
        EmailContainer.classList.remove("show")
        EmailSentContainer.classList.remove("show")
        CodeContainer.classList.remove("show")

        EmailContainer.classList.add("hide")
        EmailSentContainer.classList.add("hide")
        CodeContainer.classList.add("hide")

        ResetContainer.classList.remove("hide")

        Settings.IsOnVerification = false
        Settings.IsOnReset = true
    } else {
        DebounceTimeout("Wrong Code")
    }
}

function RequestCode() {
    if (Settings.Debounce == true) {
        RequestButton.value = "Please wait before retrying"
        return
    }

    if (Settings.LoginData.AccountCreated == false) {
        DebounceTimeout("No Account Created")
        return
    }
    
    let [StoredUsername, StoredPassword, StoredEmail] = GetRegisteredInfo()

    var Email = EmailInput.value

    if (Email == StoredEmail) {

        EmailContainer.classList.add("hide")
        EmailSentContainer.classList.add("show")
        CodeContainer.classList.add("show")

        var Code = GenerateCode(6).toUpperCase()

        EmailText.innerHTML = Code
        Settings.LoginCode = Code
        Settings.IsOnVerification = true
    } else {
        DebounceTimeout("Wrong Email")
    }
}

function HandleClick() {
    if (Settings.IsOnVerification === true) {
        EnterCode()
    }  else if (Settings.IsOnReset) {
        ResetPassword()
    } else {
        RequestCode()
    }
}

// Event Connections //
window.addEventListener('load', OnWindowLoad)
RequestButton.addEventListener('click', HandleClick)

