import React from "react";
import { useSelector } from "react-redux";

import "./header.styles.scss";

import {
  selectWinCount,
  selectBetCount,
} from "../../redux/round-win-counts/round-win-counts.selectors";
import { HeaderLabel } from "./header-label/header-label";
import { selectBalance } from "../../redux/balance/balance.selectors";

const Header: React.FC = () => {
  const balance = useSelector(selectBalance);
  const winCount = useSelector(selectWinCount);
  const betCount = useSelector(selectBetCount);

  return (
    <div className="header-container">
      <div className="mid-header-container">
        <HeaderLabel title={"balance"} value={balance} />
        <HeaderLabel title={"bet"} value={betCount} />
        <HeaderLabel title={"win"} value={winCount} />
      </div>
    </div>
  );
};

export default Header;
