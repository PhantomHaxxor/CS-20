from tkinter import *

class LoginForm():
    def __init__(self, window=None):
        self._window = window
        self.createForm()
        window.mainloop()

    def createForm(self):
        window = self._window

        window.geometry("500x500")
        window.resizable(False, False) 
        window.title('Login')

        usernameFrame = Frame(window)
        usernameLabel = Label(usernameFrame, text="Username:", font="none 12 bold", anchor=CENTER)
        usernameLabel.pack()

        passwordFrame = Frame(window)

        username = StringVar()
        password = StringVar()

        lbl1 = Label(window, text="List", font="none 32 bold", anchor=CENTER)
        lbl1.pack()
        
   

        usernameWidget = Entry(window, width=40)
        usernameWidget.insert(0, "Enter Username")
        usernameWidget.pack(pady=25)
            
        # Add an Entry widget for accepting User Password
        
        entry = Entry(window, width=25, textvariable=password, show="*")
        entry.pack()

        # Add a Button to reveal the password
        def showPassword():
            if entry.cget("show") == "*":
                entry.config(show="")
            else:
                entry.config(show="*")

        Button(window, text="Show Password", command=showPassword).pack()

   
    
if __name__ == "__main__":
    form = LoginForm(window=Tk())
    