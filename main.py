#!/usr/bin/python
import tkinter as tk
from tkinter import messagebox

#
from Node import Node
from Algorithm import Astar
import data

pixel = data.pixel
points = data.points
height = data.height
width = data.width
rows = data.rows
cols = data.cols
walldensity = data.walldensity
grid = data.grid

def reset():
    global points, src, dst
    points = 2
    src = None
    dst = None
    window.destroy()
    main()

def get_run(event):
    # get global values of vars
    global points, c, src, dst

    # get source vertex
    if points == 2:
        src = data.grid[event.x // pixel][event.y // pixel]
        # ignore input if its wall
        if src.wall:
            return
        src.show(fill='blue')
        points -= 1

    # get destination vertex
    elif points == 1:
        dst = data.grid[event.x // pixel][event.y // pixel]
        if dst.wall:
            return
        dst.show(fill='green')
        points -= 1

        # run A* Path Finder
        currentAlgorithm = Astar(src, dst)
        while True:
            ret = currentAlgorithm.step(True) # true allows visualization
            if ret:
                retry = messagebox.askquestion("Retry", "Found Path, Would you like to try again?")
                if retry == "yes":
                    reset()
                    break
                else:
                    exit()

            data.canvas.update()
    else: pass

def main():
    global window
    window = tk.Tk()

    data.canvas = tk.Canvas(window, width=width, height=height)
    data.canvas.pack()

    data.canvas.bind("<Button-1>", get_run)
    data.grid = [[Node(i, j, walldensity) for j in range(cols)] for i in range(rows)]

    for i in range(rows):
        for j in range(cols):
            data.grid[i][j].show(fill='#5865F2')

    tk.mainloop()

if __name__ == '__main__':
    main()