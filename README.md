1. Generate a random number between 1 and 100.

2. Record the turn number the player is on. Start it on 1.

3. Provide the player with a way to guess what the number is.

4. Once a guess has been submitted first record it somewhere so the user can see their previous guesses.

5. Next, check whether it is the correct number.

6. If it is correct:
   a. Display congratulations message.
   b.  Stop the player from being able to enter more guesses (this would mess the game up).
   c. Display control allowing the player to restart the game.
   
7. If it is wrong and the player has turns left:
  a. Tell the player they are wrong and whether their guess was too high or too low.
  b. Allow them to enter another guess.
  c. Increment the turn number by 1.

8. If it is wrong and the player has no turns left:
  a. Tell the player it is game over.
  b. Stop the player from being able to enter more guesses (this would mess the game up).
  c. Display control allowing the player to restart the game.

9. Once the game restarts, make sure the game logic and UI are completely reset, then go back to step 1.

