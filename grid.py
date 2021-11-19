gridSize = {
    'X': 10,
    'Y': 10
}
grid = {}

def create():
    for x in range(gridSize['X']):
        grid[x] = {}
        for y in range(gridSize['Y']):
            grid[x][y] = 0
    return grid