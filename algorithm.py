from math import sqrt

class astar(object):
    def __init__(self, start, end):
        self.lastCheckedNode = start
        self.openSet = []
        self.openSet.append(start)
        self.closedSet = {}
        self.start = start
        self.end = end
        self.current = start

        self.Total = len(self.openSet)

    def heuristic(self, a, b):
        return sqrt((a.x-b.x)**2 + (a.y-b.y)**2)

    def removeFromArray(self, arr, elt):
        if elt in arr: arr.remove(elt)

    def visualize(self):
        for node in self.openSet:
            node.show(fill='yellow')
        for node in self.closedSet.keys():
            node.show(fill='red')

    def step(self, visualize=False):
        if visualize:
           self.visualize()
           
        if len(self.openSet) > 0:
            winner = 0
            for i in range(1, len(self.openSet)):
                if self.openSet[i].f < self.openSet[winner].f:
                    winner = i
                if self.openSet[i].f == self.openSet[winner].f:
                    if self.openSet[i].g > self.openSet[winner].g:
                        winner = i
            
            self.current = self.openSet[winner]
            self.lastCheckedNode = self.current

            if self.current == self.end:               
                return True

            self.removeFromArray(self.openSet, self.current)
            self.closedSet[self.current] = True

            neighbors = self.current.getNeighbors()

            for neighbor in neighbors:
                try:
                    self.closedSet[neighbor]
                except:
                    if not neighbor.wall:
                        tempG = self.current.g + self.heuristic(neighbor, self.current)

                        if not neighbor in self.openSet:
                            self.openSet.append(neighbor)
                        elif tempG >= neighbor.g:
                            continue

                        neighbor.g = tempG
                        neighbor.h = self.heuristic(neighbor, self.end)
                        neighbor.f = neighbor.g + neighbor.h
                        neighbor.previous = self.current

            return False
        else:
            return -1