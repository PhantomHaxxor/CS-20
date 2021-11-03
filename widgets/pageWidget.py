from tkinter import *

class new(Tk):
    def __init__(self, accountData, logoutFunc):
        super().__init__()

        self.geometry("512x512")
        self.resizable(0, 0) 
        self.title('Home Page')
        self.iconbitmap("icons/pageWidget.ico")

        self.accountData = accountData
        self.logoutFunc = logoutFunc

        self.createWidget() # creates the login widget

    def createWidget(self):

        user_label = Label(self, text="Logged in as: " + self.accountData['username'])
        user_label.grid(column=0, row=0, sticky=NW, padx=5, pady=5)

        logout_button = Button(self, text="Logout", command=self.logoutFunc)
        logout_button.grid(column=0, row=1, sticky=NW, padx=5, pady=5)

    def destroyWindow(self):
        self.destroy()