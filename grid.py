from tkinter import *


gridSize = {
    'X': 49,
    'Y': 49
}
grid = {}

def create():
    root = Tk()
    root.title('Pathfinding')
    root.geometry('1010x1010')
    root.resizable(0,0)

    center = Frame(root, bg='white', width=900, height=900, padx=3, pady=3)

    root.grid_rowconfigure(9, weight=1)
    root.grid_columnconfigure(9, weight=1)
    center.grid(row=1, sticky="nsew")

    center.grid_rowconfigure(0, weight=1)
    center.grid_columnconfigure(1, weight=1)


    for x in range(gridSize['X']):
        grid[x] = {}
        for y in range(gridSize['Y']):
            cell = Frame(center, bg='white', highlightbackground="black",
                        highlightcolor="black", highlightthickness=1,
                        width=25, height=25,  padx=3,  pady=3)
            cell.grid(row=x, column=y)
            grid[x][y] = 0

    return root, grid