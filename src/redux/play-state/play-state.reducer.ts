import PlayStateTypes from "./play-state.types";

import * as GameConstants from "../../game-logic/game-logic.constants";

const INITIAL_STATE = {
  playState: GameConstants.PlayStates.BeforePlay
};

const playStateReducer = (state = INITIAL_STATE, action:any) => {
  switch (action.type) {
    case PlayStateTypes.CHANGE_PLAY_STATE:
      return {
        ...state,
        playState: action.payload
      };

    default:
      return state;
  }
};

export default playStateReducer;
