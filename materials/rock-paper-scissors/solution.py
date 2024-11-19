import os
import random
import readline

wins = 0
losses = 0

while True:
    # Get a move (rock, paper, scissors) from the user
    move = input("Enter move (rock, paper, scissors): ")
    os.system("clear")

    # Choose a random opponent move (rock, paper, scissors)
    opp = random.choice(["rock", "paper", "scissors"])

    print("your move", move.upper(), "opponent move", opp.upper())

    # If player choose rock and opponent chooses paper increase losses by 1
    if move == "rock" and opp == "paper":
        losses += 1

    # If player choose rock and opponent chooses scissors increase wins by 1
    elif move == "rock" and opp == "scissors":
        wins += 1

    # If player choose paper and opponent chooses scissors increase losses by 1
    elif move == "paper" and opp == "scissors":
        losses += 1

    # If player choose paper and opponent chooses rock increase wins by 1
    elif move == "paper" and opp == "rock":
        wins += 1

    # If player choose scissors and opponent chooses rock increase losses by 1
    elif move == "scissors" and opp == "rock":
        losses += 1

    # If player choose scissors and opponent chooses paper increase wins by 1
    elif move == "scissors" and opp == "paper":
        wins += 1

    # Display scores
    print("wins", wins, "losses", losses)

    # If player gets 10 wins, they win the game and the game ends
    if wins == 10:
        print("You win")
        break

    # If player gets 10 losses, they lose the game and the game ends
    elif losses == 10:
        print("You lose")
        break
