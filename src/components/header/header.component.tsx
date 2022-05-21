import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import "./header.styles.scss";

import { HeaderLabel } from "./header-label/header-label";

import {selectBalance} from "../../redux/balance/balance.selectors";

interface Props {
  balance?: any;
  bet: number;
  win: number;
}

const Header: React.FC<Props> = ({ balance, bet, win }) => {
  return (
    <div className="header-container">
      <div className="mid-header-container">
        <HeaderLabel title={"BALANCE"} value={balance} />
        <HeaderLabel title={"BET"} value={bet} />
        <HeaderLabel title={"WIN"} value={win} />
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  balance: selectBalance
});

export default connect(mapStateToProps, null)(Header);
