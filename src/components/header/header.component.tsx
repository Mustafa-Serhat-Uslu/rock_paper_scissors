import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import "./header.styles.scss";

import { HeaderLabel } from "./header-label/header-label";

import {selectBalance} from "../../redux/balance/balance.selectors";
import {selectWinCount, selectBetCount} from "../../redux/round-win-counts/round-win-counts.selectors";

interface Props {
  balance?: any;
  betCount?: any;
  winCount?: any;
}

const Header: React.FC<Props> = ({ balance, betCount, winCount }) => {
  return (
    <div className="header-container">
      <div className="mid-header-container">
        <HeaderLabel title={"BALANCE"} value={balance} />
        <HeaderLabel title={"BET"} value={betCount} />
        <HeaderLabel title={"WIN"} value={winCount} />
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  balance: selectBalance,
  betCount: selectBetCount,
  winCount: selectWinCount,
});

export default connect(mapStateToProps, null)(Header);
