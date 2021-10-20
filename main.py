import sys
sys.path.append("widgets")
import loginWidget
import pageWidget

currentForm = None

shouldAutoLogin = True
loginUsername = "aa"
loginPassword = "aaa"

def autoLogin():
   if currentForm.doesAccountExist(loginUsername):
        currentForm.attemptLogin(loginUsername, loginPassword)

def loginSuccess(accountData):
    global currentForm
    currentForm.destroyWindow()
    currentForm = pageWidget.new(accountData)

def createLoginWidget():
    global currentForm
    currentForm = loginWidget.new(loginSuccess)
    
    if shouldAutoLogin:
        autoLogin()

    currentForm.mainloop()

if __name__ == "__main__":
    createLoginWidget()

