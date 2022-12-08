# Tenzies Game
A simple game for children, where you roll ten dice and then selecting a number click to freeze the dice of that number. You continue to roll the others until they are all the same number.
This project was built purely for fun. I used it as an opportunity to practice core elements of React, JS and CSS. It did lead to some competition amongst my nephews who enjoyed playing it and wanted to achieve the lowest time score possible. I thought the use of the confetti component was a nice touch on completing the game too.

**Link to project:** https://tenzies-fe-app.netlify.app/
![TenziesGif](https://user-images.githubusercontent.com/88390425/206441302-9a82cdc4-03be-41ae-a0dc-847eb6c29c5e.gif)
<img width="1422" alt="Screenshot 2022-09-13 at 18 22 46" src="https://user-images.githubusercontent.com/88390425/189958660-40382c34-99db-4173-8a00-e9d518fc0397.png">
<img width="1303" alt="Screenshot 2022-09-13 at 18 22 59" src="https://user-images.githubusercontent.com/88390425/189958678-850c837b-8290-4cea-a724-af1120802fec.png">


## How It's Made:

**Tech used:** ReactJS, JavaScript, CSS
The project is built entirely in ReactJS. The overall project was from a figma design, the dice were designed by me, creating the die face in CSS with flexbox and then conditionally rendering the dice depending on the value between 1-6. I also used localStorage in this app to store the time taked to complete each game. That way the highscore remains, when a user wants to return to repeat the game and improve on their past performance.

## Optimizations
It's a simple game, and serves as a good MVP. I think the styling could be improved: the app is responsive, but could certainly be made more beautiful with time.

There are several features which could be added to the game going forward to make it more engaging, the count-up of the clock could be changed to a count-down and there could be different difficulty levels for the user to choose which would change the speed in order to complete the game.

Also, a leaderboard could be added where users input their names and the highscore is specific to the individual name.

## Lessons Learned:
As with every project there is always a lote learnt. With this one I learnt a lot about using setInterval in React, as well as setting and getting localStorage, which was very interesting and enjoyable to work with some more. Likewise I got to flex my CSS skills a bit more making the dice look good and that was quite rewarding to see it all come together.
