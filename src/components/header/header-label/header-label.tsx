import React from "react";
import "./header-label.styles.scss";

type Props = {
  title: string;
  value: number;
};

export const HeaderLabel: React.FC<Props> = ({ title, value }) => {
  let valueClasses = "header-label-value";

  if (title === "balance" && value === 0) {
    valueClasses += " red-Zero";
  }

  return (
    <div className={"header-label-container"}>
      <span className={"header-label-title"}>{title}:</span>
      <span className={valueClasses}>{value}</span>
    </div>
  );
};
