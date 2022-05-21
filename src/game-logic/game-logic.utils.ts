import * as GameConstants from "./game-logic.constants";

// Get the winner of each card comparison
const compareCards = (card1: string, card2: string): string => {
  if (card1 === card2) {
    return "draw";
  }

  const cards: string[] = [card1, card2];

  const rock = GameConstants.CardTypes.Rock;
  const paper = GameConstants.CardTypes.Paper;
  const scissors = GameConstants.CardTypes.Scissors;

  switch (true) {
    case cards.includes(rock) && cards.includes(paper):
      return paper;
    case cards.includes(rock) && cards.includes(scissors):
      return rock;
    case cards.includes(scissors) && cards.includes(paper):
      return scissors;
    default:
      return "draw";
  }
};

// Chooses a random card for the computers selection from cardTypes
const getComputerSelection = (): string => {
  return GameConstants.cardTypesArr[Math.floor(Math.random() * 3 + 0)];
};

// Get winner of the round by returning winning coefficient for user; ( x0, x3 or x14) and the winning card
export const getRoundResult = (
  playerSelections: string[]
): GameConstants.RoundResult => {
  let result: GameConstants.RoundResult = {
    roundCoefficient: 0,
    computerSelection: getComputerSelection(),
    winningCard: ""
  };

  // Compare each card agains each other
  const roundResults: string[] = playerSelections.map((selection) =>
    compareCards(selection, result.computerSelection)
  );

  // Get winning card if player won
  const winningPlayerCard = playerSelections.filter((selection) =>
    roundResults.includes(selection)
  )[0];

  // Player lost round returns 0 as default
  if (!winningPlayerCard) {
    if (roundResults.includes("draw")) {
      result.winningCard = "draw";
    } else {
      result.winningCard = result.computerSelection;
    }
    return result;
  }

  // Player made two selections one draw one computer win
  if (
    winningPlayerCard === result.computerSelection &&
    playerSelections.includes(winningPlayerCard)
  ) {
    result.winningCard = "draw";
    return result;
  }

  result.winningCard = winningPlayerCard;

  const doubleBet: boolean = playerSelections.length > 1;

  // Player won round, if doubleBet return 3 otherwise 14
  if (doubleBet) {
    result.roundCoefficient = GameConstants.doubleBetWinCoefficient;
  } else {
    result.roundCoefficient = GameConstants.winCoefficient;
  }

  return result;
};

// Increases the selected cards bet
export const handleBetSetting = (
  currentBets: { [key: string]: number },
  selectedCardLabel: string
): { [key: string]: number } => {
  currentBets[selectedCardLabel] += GameConstants.betAmount;
  return currentBets;
};
