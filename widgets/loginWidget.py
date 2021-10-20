from tkinter import *
from tkinter import messagebox
import database

current_database = database.currentDatabase

class new(Tk):
    def __init__(self, loginSuccess):
        super().__init__()

        self.geometry("300x100")
        self.resizable(0, 0) 
        self.title('Login')
        self.iconbitmap("icons/loginWidget.ico")
        
        self.columnconfigure(0, weight=1)
        self.columnconfigure(1, weight=3)

        self.loginCallback = loginSuccess

        self.createWidget() # creates the login widget

    def createWidget(self):

        username_label = Label(self, text="Username:")
        username_label.grid(column=0, row=0, sticky=W, padx=5, pady=5)

        username_entry = Entry(self)
        username_entry.grid(column=1, row=0, sticky=E, padx=5, pady=5)

        password_label = Label(self, text="Password:")
        password_label.grid(column=0, row=1, sticky=W, padx=5, pady=5)

        password_entry = Entry(self,  show="*")
        password_entry.grid(column=1, row=1, sticky=E, padx=5, pady=5)

        def showPassword():
            if password_entry.cget("show") == "*":
                password_entry.config(show="")
            else:
                password_entry.config(show="*")

        show_password_button = Button(self, text="Show Password", command=showPassword)
        show_password_button.grid(column=2, row=1, sticky=E)

        def register():
            self.attemptRegister(username_entry.get(), password_entry.get())

        register_button = Button(self, text="Register", command=register)
        register_button.grid(column=0, row=2, sticky=SW, padx=5, ipadx=15, pady=10)
        
        def login():
            self.attemptLogin(username_entry.get(), password_entry.get())

        login_button = Button(self, text="Login", command=login)
        login_button.grid(column=2, row=2, sticky=SE, padx=5, ipadx=15, pady=10)

    def attemptRegister(self, username, password):
        success = current_database.attemptRegister(username, password)
        if success == True:
            messagebox.showinfo("Registered", "You have successfully registered as " + username)
            self.loginCallback(current_database.get(username))
        elif success == "EMPTY":
            messagebox.showerror("Failed", "Username or Password cannot be empty")
        else:
            messagebox.showerror("Failed", "Username already taken")

    def attemptLogin(self, username, password):
        success = current_database.attemptLogin(username, password)
        if success == True:
            messagebox.showinfo("Logged in", "You have successfully logged in as " + username)
            self.loginCallback(current_database.get(username))
        elif success == False:
            messagebox.showerror("Failed", "Wrong Username or Password")
        elif success == "EMPTY":
            messagebox.showerror("Failed", "Username or Password cannot be empty")

    def doesAccountExist(self, username):
        return current_database.doesAccountExist(username)

    def destroyWindow(self):
        self.destroy()