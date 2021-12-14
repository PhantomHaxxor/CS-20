import random
import data

pixel = data.pixel
rows = data.rows
cols = data.cols

class new(object):
    def __init__(self, i, j, walldens=0.2):
        self.i = i
        self.j = j
        self.x = i*pixel + pixel//2
        self.y = j*pixel + pixel//2

        self.f = 0
        self.g = 0
        self.h = 0

        self.neighbors = []
        self.previous = None
        self.wall = False

        if random.random() < walldens:
            self.wall = True

    def show(self, **kwargs):
        if not self.wall:
            data.canvas.create_rectangle(self.i*pixel,
                               self.j*pixel,
                               self.i*pixel + pixel,
                               self.j*pixel + pixel,
                               **kwargs)
        else:
            data.canvas.create_rectangle(self.i*pixel,
                               self.j*pixel,
                               self.i*pixel + pixel,
                               self.j*pixel + pixel,
                               fill='#2C2F33')

    def draw_line(self, **kwargs):
        if self.previous:
            data.canvas.create_line(self.previous.x,
                          self.previous.y,
                          self.x,
                          self.y,
                          **kwargs)

    def addNeighbors(self):
        grid = data.grid
        i = self.i
        j = self.j
        if i < rows - 1:
            self.neighbors.append(grid[i+1][j])
            if j > 0: self.neighbors.append(grid[i+1][j-1])
            if j < cols - 1: self.neighbors.append(grid[i+1][j+1])
        if i > 0:
            self.neighbors.append(grid[i-1][j])
            if j > 0: self.neighbors.append(grid[i-1][j-1])
            if j < cols - 1: self.neighbors.append(grid[i-1][j+1])
        if j < cols - 1: self.neighbors.append(grid[i][j+1])
        if j > 0: self.neighbors.append(grid[i][j-1])

    def getNeighbors(self):
        if len(self.neighbors) > 0:
            return self.neighbors
        else:
            self.addNeighbors()
            return self.neighbors