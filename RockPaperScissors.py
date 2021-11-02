import random

choices = ['r','s','p']

def check_win(user, computer):
    if (user == 'r' and computer == 's') or (user == 's' and computer == 'p') or (user == 'p' and computer == 'r'):
        return True

if __name__ == "__main__":
    while True:

        player = input("What is your choice - 'r' for rock, 's' for scissor, 'p' for paper, 'quit' to quit: ")
        opponent = random.choice(choices)
        
        if player == 'quit':
            break

        print("You chose: " + player)
        print("Opponent chose: " + opponent)

        if check_win(player, opponent):
            print("You win!")
        elif player == opponent:
            print("It's a tie!")
        else:
            print("You lose!")
        


