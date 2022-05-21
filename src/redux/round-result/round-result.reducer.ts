import RoundResultTypes from "./round-result.types";

import * as GameConstants from "../../game-logic/game-logic.constants";

const INITIAL_STATE = {
  roundResult: { roundCoefficient: 0, computerSelection: "", winningCard: "" }
};

const roundResultReducer = (state = INITIAL_STATE, action:any) => {
  switch (action.type) {
    case RoundResultTypes.SET_ROUND_RESULT:
      return {
        ...state,
        roundResult: {...action.payload}
      };

    default:
      return state;
  }
};

export default roundResultReducer;
