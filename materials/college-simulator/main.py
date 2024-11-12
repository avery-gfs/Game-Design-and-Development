import os       # for certain OS features
import random   # for generating and selecting random values
import readline # for handling user input elegantly

energy = 50
gpa = 20
ohResult = ""

# Loop until we exit game
while True:
    os.system("clear") # clear the screen

    # Use multiple print commands to print on separate lines
    print("COLLEGE SIMULATOR VERSION 0.1.0 🏫")
    print()
    print("Your stats are:")
    print("  Energy: ", energy, "%")
    print("  GPA: ", gpa / 10.0)
    print()
    print("In college, your can:")
    print("  - Work when you should be resting")
    print("  - Rest when you should be working")
    print("  - Go to office hours", ohResult)
    print()

    # Get user input
    choice = input("Enter a choice (work, rest, oh, exit): ")

    # Update stats based on choice

    if choice == "work":
        energy -= 10
        gpa += 2

    if choice == "rest":
        gpa -= 4
        energy += 5

    if choice == "oh":
        # Get random boolean value
        isHelpful = random.choice([True, False])

        if isHelpful:
            ohResult = "(Your last trip to office hours was HELPFUL)"
            gpa += 4
        else:
            ohResult = "(Your last trip to office hours was UNHELPFUL)"
            gpa -= 4
    else:
        ohResult = ""

    if choice == "exit":
        break # break out of the while loop

    if energy <= 0:
        print("You lose (exhaustion)")
        break # break out of the while loop

    if gpa <= 0:
        print("You lose (failure)")
        break # break out of the while loop
