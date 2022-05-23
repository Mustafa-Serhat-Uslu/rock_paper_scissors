// The amount of credit user starts the game with
export const beginningBalance: number = 5000;

// Amount required for one bet
export const betAmount: number = 500;

// Coefficients, in case of a user win (oneBet: x14, twoBet: x3)
export const winCoefficient: number = 14;
export const doubleBetWinCoefficient: number = 3;

// Amount of time the game stays in inPlay state
export const stateChangeTime: number = 3200;

// Game cards
export enum CardTypes {
  Rock = "rock",
  Paper = "paper",
  Scissors = "scissors",
}

// General states of the game
export enum PlayStates {
  BeforePlay = "beforePlay",
  InPlay = "inPlay",
  AfterPlay = "afterPlay",
}

// Game cards, used to map the cards in MainArea component or to choose a random card in getComputerSelection
export const cardTypesArr: string[] = [
  CardTypes.Rock,
  CardTypes.Paper,
  CardTypes.Scissors,
];

export type BetsType = {
  [key: string]: number;
};

// Used in the object type returned from getRoundResult
export type RoundResult = {
  roundCoefficient: number;
  computerSelection: string;
  winningCard: string;
};
