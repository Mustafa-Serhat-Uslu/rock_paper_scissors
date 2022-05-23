import React from "react";
import "./text-area.styles.scss";
import { useSelector } from "react-redux";
import InPlayText from "./in-play-text/in-play-text.component";
import * as GameConstants from "../../game-logic/game-logic.constants";
import AfterPlayText from "./after-play-text/after-play-text.component";
import BeforePlayText from "./before-play-text/before-play-text.component";
import { selectPlayState } from "../../redux/play-state/play-state.selectors";

const TextArea: React.FC = () => {
  const playState: GameConstants.PlayStates = useSelector(selectPlayState);

  let textDisplay: JSX.Element;

  switch (playState) {
    case GameConstants.PlayStates.InPlay:
      textDisplay = <InPlayText />;
      break;
    case GameConstants.PlayStates.AfterPlay:
      textDisplay = <AfterPlayText />;
      break;
    default:
      textDisplay = <BeforePlayText />;
  }

  return <div className={"text-area-container"}>{textDisplay}</div>;
};

export default TextArea;
