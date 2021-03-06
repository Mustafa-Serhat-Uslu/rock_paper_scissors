import React from "react";
import "./app.styles.scss";

import Header from "./components/header/header.component";
import Button from "./components/button/button.component";
import TextArea from "./components/text-area/text-area.component";
import SelectionCard from "./components/reusables/selection-card/selection-card.component";

import * as GameConstants from "./game-logic/game-logic.constants";

const App: React.FC = () => {
  return (
    <div className={"app-container"}>
      <Header />

      <div className={"main-area-container"}>
        <TextArea />

        <div className="cards-container">
          {GameConstants.cardTypesArr.map((cardType) => (
            <SelectionCard key={cardType} cardLabel={cardType} />
          ))}
        </div>

        <Button />
      </div>
    </div>
  );
};

export default App;
