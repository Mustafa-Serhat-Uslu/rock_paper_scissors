import React from "react";
import { useState } from "react";
import "./styles.scss";

import Header from "./components/header/header.component";
import Button from "./components/button/button.component";
import TextArea from "./components/text-area/text-area.component";
import SelectionCard from "./components/reusables/selection-card/selection-card.component";

import * as GameConstants from "./game-logic/game-logic.constants";

const App: React.FC = () => {
  const [winCount, setWinCount] = useState<number>(0);
  const [roundCount, setRoundCount] = useState<number>(0);
  const [roundResult, setRoundResult] = useState<GameConstants.RoundResult>();

  console.log("! APP RENDER !");

  return (
    <div className={"app-container"}>
      <Header bet={roundCount} win={winCount} />

      <div className={"main-area-container"}>
        <div className={"text-container"}>
          <TextArea
            roundResult={roundResult}
          />
        </div>

        <div className="cards-container">
          {GameConstants.cardTypesArr.map((cardType) => (
            <SelectionCard
              winner={""}
              key={cardType}
              cardLabel={cardType}
            />
          ))}
        </div>

        <Button
          setRoundResult={setRoundResult}
        />
      </div>
    </div>
  );
};

export default App;
