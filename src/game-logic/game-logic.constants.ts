// The amount of credit user starts the game with
export const beginningBalance: number = 1;

// Amount required for one bet
export const betAmount: number = 1;

// Coefficients, in case of a user win (oneBet: x14, twoBet: x3)
export const winCoefficient: number = 14;
export const doubleBetWinCoefficient: number = 3;

// Amount of time the game stays in inPlay state
export const stateChangeTime: number = 3000;

// Game cards
export enum CardTypes {
  Rock = "rock",
  Paper = "paper",
  Scissors = "scissors"
}

// General states of the game
export enum PlayStates {
  BeforePlay = "beforePlay",
  InPlay = "inPlay",
  AfterPlay = "afterPlay"
}

// Game cards, used to map the cards in MainArea component or to choose a random card in getComputerSelection
export const cardTypesArr: string[] = [
  CardTypes.Rock,
  CardTypes.Paper,
  CardTypes.Scissors
];

// Default bets state for each round start
export const startingBets: { [key: string]: number } = {
  "rock": 0,
  "paper": 0,
  "scissors": 0
};

// Used in the object type returned from getRoundResult
export interface RoundResult {
  roundCoefficient: number;
  computerSelection: string;
  winningCard: string;
}
