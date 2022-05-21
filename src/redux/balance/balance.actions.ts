import BalanceActionTypes from "./balance.types";

export const decreaseBalance = (item:any) => ({
  type: BalanceActionTypes.DECREASE_BALANCE,
  payload: item
});

export const increaseBalance = (item:any) => ({
  type: BalanceActionTypes.INCREASE_BALANCE,
  payload: item
});

export const resetBalance = () => ({
  type: BalanceActionTypes.RESET_BALANCE
});
