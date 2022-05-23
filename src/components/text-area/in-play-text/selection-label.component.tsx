import React from "react";
import "./in-play-text.styles.scss";

type Props = {
  label: string;
};

const SelectionLabel: React.FC<Props> = ({ label }) => {
  return <h1 className={"user-selection-h1"}>{label}</h1>;
};

export default SelectionLabel;
