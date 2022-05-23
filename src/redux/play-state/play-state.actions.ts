import PlayStateTypes from "./play-state.types";

import { createAction, withMatcher, ActionWithPayload } from "../reducer.utils";

import { PlayStates } from "../../game-logic/game-logic.constants";

export type ChangePlayState = ActionWithPayload<
  PlayStateTypes.CHANGE_PLAY_STATE,
  PlayStates
>;

export const changePlayState = withMatcher(
  (item: PlayStates): ChangePlayState =>
    createAction(PlayStateTypes.CHANGE_PLAY_STATE, item)
);
