import BetTypes from "./bets.types";

export const adjustBets = (item:any) => ({
  type: BetTypes.ADJUST_BETS,
  payload: item
});

export const resetBets = () => ({
  type: BetTypes.RESET_BETS
});
