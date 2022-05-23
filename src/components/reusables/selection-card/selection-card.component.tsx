import React from "react";
import "./selection-card.styles.scss";
import { AnyAction, Dispatch } from "redux";
import { useSelector, useDispatch } from "react-redux";
import { adjustBets } from "../../../redux/bets/bets.actions";
import { BetCircle } from "../bet-circle/bet-circle.component";
import { selectBets } from "../../../redux/bets/bets.selectors";
import { BetsType } from "../../../game-logic/game-logic.constants";
import { decreaseBalance } from "../../../redux/balance/balance.actions";
import { selectBalance } from "../../../redux/balance/balance.selectors";
import { selectPlayState } from "../../../redux/play-state/play-state.selectors";
import { RoundResultState } from "../../../redux/round-result/round-result.reducer";
import { selectRoundResult } from "../../../redux/round-result/round-result.selectors";

import * as GameUtils from "../../../game-logic/game-logic.utils";
import * as GameConstants from "../../../game-logic/game-logic.constants";

type Props = {
  cardLabel: string;
};

const SelectionCard: React.FC<Props> = ({ cardLabel }) => {
  const dispatch: Dispatch<AnyAction> = useDispatch();

  const bets: BetsType = useSelector(selectBets);
  const balance: number = useSelector(selectBalance);
  const roundResult: RoundResultState = useSelector(selectRoundResult);
  const playState: GameConstants.PlayStates = useSelector(selectPlayState);

  // When a card is clicked check balance and selection count(no more than 2), if applicable add bet
  const handleCardClick = (clickedCard: string): void => {
    if (
      bets[clickedCard] ||
      Object.values(bets).filter((x: any) => x > 0).length < 2
    ) {
      if (balance >= GameConstants.betAmount) {
        dispatch(decreaseBalance(GameConstants.betAmount));
        dispatch(adjustBets(GameUtils.handleBetSetting(bets, clickedCard)));
      }
    }
  };

  let selectionCardContainerClassNames: string = "selection-card-container";

  // Define card color depending on cardLabel
  switch (cardLabel) {
    case GameConstants.CardTypes.Rock:
      selectionCardContainerClassNames += " blue";
      break;
    case GameConstants.CardTypes.Paper:
      selectionCardContainerClassNames += " green";
      break;
    case GameConstants.CardTypes.Scissors:
      selectionCardContainerClassNames += " red";
      break;
    default:
      selectionCardContainerClassNames += " blue";
      break;
  }

  // Define highligting of card borders on AfterPlay state depending on the winner
  if (
    playState === GameConstants.PlayStates.AfterPlay &&
    cardLabel === roundResult.winningCard
  ) {
    switch (roundResult.winningCard) {
      case GameConstants.CardTypes.Rock:
        selectionCardContainerClassNames += " blue-win";
        break;
      case GameConstants.CardTypes.Paper:
        selectionCardContainerClassNames += " green-win";
        break;
      case GameConstants.CardTypes.Scissors:
        selectionCardContainerClassNames += " red-win";
        break;
      default:
        break;
    }
  }

  return (
    <div
      className={selectionCardContainerClassNames}
      onClick={() =>
        playState === GameConstants.PlayStates.BeforePlay &&
        handleCardClick(cardLabel)
      }
    >
      {bets[cardLabel] ? <BetCircle amount={bets[cardLabel]} /> : null}
      <h1 className={"card-h1"}>{cardLabel}</h1>
    </div>
  );
};

export default SelectionCard;
