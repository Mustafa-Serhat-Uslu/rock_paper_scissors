import { createSelector } from "reselect";
import { RootState } from "../store";

import * as GameConstants from "../../game-logic/game-logic.constants";

const selectCurrentBets = (state: RootState): GameConstants.BetsType =>
  state.bets;

export const selectBets = createSelector([selectCurrentBets], (state) => state);
