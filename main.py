import sys
sys.path.append("widgets")

import loginWidget
import pageWidget

currentForm = None

shouldLogin = True
loginUsername = "a"
loginPassword = "aaa"

def loginSuccess(accountData):
    global currentForm
    currentForm.destroyWindow()
    currentForm = pageWidget.new(accountData)

def createLoginWidget():
    global currentForm
    currentForm = loginWidget.new(loginSuccess)
    currentForm.mainloop()

    if shouldLogin:
        currentForm.attemptLogin(loginUsername, loginPassword)

if __name__ == "__main__":
    createLoginWidget()