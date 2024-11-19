import random

answer = random.randrange(1, 101)

while True:
    guess = int(input("Enter guess: "))

    if guess == answer:
        print("correct")
        break

    elif guess < answer:
        print("too low")

    elif guess > answer:
        print("too high")
