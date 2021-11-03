import sys
sys.path.append("widgets")
import loginWidget
import pageWidget

currentWidget = None
shouldAutoLogin = False
loginUsername = "Test123"
loginPassword = "Test123"

def autoLogin():
   if currentWidget.doesAccountExist(loginUsername):
        currentWidget.attemptLogin(loginUsername, loginPassword)

def loginSuccess(accountData):
    global currentWidget
    currentWidget.destroyWindow()
    currentWidget = pageWidget.new(accountData, createLoginWidget)

def createLoginWidget():
    global currentWidget
    if currentWidget is not None:
        currentWidget.destroyWindow()

    currentWidget = loginWidget.new(loginSuccess)
    
    if shouldAutoLogin:
        autoLogin()

    currentWidget.mainloop()

if __name__ == "__main__":
    createLoginWidget()