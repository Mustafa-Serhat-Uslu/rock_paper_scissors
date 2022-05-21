import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import "./selection-card.styles.scss";

import * as GameConstants from "../../../game-logic/game-logic.constants";
import * as GameUtils from "../../../game-logic/game-logic.utils";
import { BetCircle } from "../bet-circle/bet-circle.component";

import {adjustBets} from "../../../redux/bets/bets.actions";
import { selectBets } from "../../../redux/bets/bets.selectors";
import {decreaseBalance} from "../../../redux/balance/balance.actions";
import { selectBalance } from "../../../redux/balance/balance.selectors";
import { selectPlayState } from "../../../redux/play-state/play-state.selectors";
import { selectRoundResult } from "../../../redux/round-result/round-result.selectors";

interface Props {
  bets?: any;
  balance?: any;
  playState?: any;
  adjustBets?: any;
  cardLabel: string;
  roundResult?: any;
  decreaseBalance?: any;
}

const SelectionCard: React.FC<Props> = ({
  bets,
  balance,
  cardLabel,
  playState,
  adjustBets,
  roundResult,
  decreaseBalance,
}) => {

  // When a card is clicked check balance and selection count(no more than 2), if applicable add bet
  const handleCardClick = (clickedCard: string): void => {
    if (
      bets[clickedCard] ||
      Object.values(bets).filter((x:any) => x > 0).length < 2
    ) {
      if (balance >= GameConstants.betAmount) {
        decreaseBalance(GameConstants.betAmount);
        adjustBets(GameUtils.handleBetSetting(bets, clickedCard));
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
  if (playState===GameConstants.PlayStates.AfterPlay && cardLabel === roundResult.winningCard){
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
      onClick={() => playState === GameConstants.PlayStates.BeforePlay && handleCardClick(cardLabel)}
    >
      {bets[cardLabel] ? <BetCircle amount={bets[cardLabel]} /> : null}
      <h1 className={"card-h1"}>{cardLabel}</h1>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  bets: selectBets,
  balance: selectBalance,
  playState: selectPlayState,
  roundResult: selectRoundResult,
});

const mapDispatchToProps = (dispatch:any) => ({
  decreaseBalance: (item:number) => dispatch(decreaseBalance(item)),
  adjustBets: (item: { [key: string]: number }) => dispatch(adjustBets(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SelectionCard);
