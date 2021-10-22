from tkinter import *
from tkinter import messagebox

class new(Tk):
    def __init__(self, accountData):
        super().__init__()

        self.geometry("512x512")
        self.resizable(0, 0) 
        self.title('Home Page')
        self.iconbitmap("icons/pageWidget.ico")

        self.accountData = accountData

        self.createWidget() # creates the login widget

    def createWidget(self):

        user_label = Label(self, text="Logged in as: " + self.accountData['username'])
        user_label.grid(column=0, row=0, sticky=NW, padx=5, pady=5)

    def destroyWindow(self):
        self.destroy()