import { createSelector } from "reselect";

const selectCurrentBalance = (state:any) => state.balance;

export const selectBalance = createSelector(
  [selectCurrentBalance],
  (state) => state.balance
);
