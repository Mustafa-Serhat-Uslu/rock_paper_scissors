import { createSelector } from "reselect";

const selectCurrentPlayState = (state:any) => state.playState;

export const selectPlayState = createSelector(
  [selectCurrentPlayState],
  (state) => state.playState
);
