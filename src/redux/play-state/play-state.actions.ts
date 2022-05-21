import PlayStateTypes from "./play-state.types";

export const changePlayState = (item:any) => ({
  type: PlayStateTypes.CHANGE_PLAY_STATE,
  payload: item
});
