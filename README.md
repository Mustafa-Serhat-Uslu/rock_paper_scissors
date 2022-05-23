# Rock Paper Scissors Game

Live app:
https://mustafa-serhat-uslu.github.io/rock_paper_scissors/


The tech stack: 
TypeScript, React, Redux, Scss


Summary:
This is a responsive React application. Redux workflow is used to control all of the state. Rules of the game are spesified in "game-logic.utils" and can be modified easily. The app is made up of three main components; Header, TextArea, CardsContainer and Button. 


- Header:
Used only to keep track of the game balance and the counters.

- TextArea:
This is the component that interacts with the user in three ways according to the three playStates; "beforePlay", "inPlay" and "afterPlay". AfterPlay will show the results while inPlay will show the selected cards for the round. The card on the left will be the computers random selection.

- CardsContainer
Card options will be displayed on this component. Bets can be made by clicking on one or two of the cards. Bets will increase the same amount for each click.

- Button
Interaction with button is possible in beforePlay state if any bet has been placed. In InPlay  state there will be no interactions and in the afterPlay state xthe button can be used to move on to the next round to make new bets.
