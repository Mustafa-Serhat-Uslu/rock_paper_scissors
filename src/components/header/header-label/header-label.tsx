import React from "react";
import "./header-label.styles.scss";

interface Props {
  title: string;
  value: number;
}

export const HeaderLabel: React.FC<Props> = ({ title, value }) => {
  return (
    <div className={"header-label-container"}>
      <span className={"header-label-title"}>{title}:</span>
      <span className={"header-label-value"}>{value}</span>
    </div>
  );
};
