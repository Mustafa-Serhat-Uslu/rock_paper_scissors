import { createSelector } from "reselect";
import { RootState } from "../store";
import * as GameConstants from "../../game-logic/game-logic.constants";

const selectCurrentPlayState = (state: RootState): GameConstants.PlayStates =>
  state.playState;

export const selectPlayState = createSelector(
  [selectCurrentPlayState],
  (state) => state
);
