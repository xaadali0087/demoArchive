import React, { FC } from "react";

import ProgressLineBar from "@ramonak/react-progress-bar";

type ProgressBarProps = {
  completed: number;
};

const ProgressBar: FC<ProgressBarProps> = ({ completed }) => {
  return (
    <ProgressLineBar
      completed={completed}
      bgColor="linear-gradient(90.34deg, #FF416C -13.74%, #FF4A30 106.66%)"
      labelAlignment="outside"
      labelColor="#000"
      height="12px"
      baseBgColor="#E0E0E0"
    />
  );
};

export default ProgressBar;
