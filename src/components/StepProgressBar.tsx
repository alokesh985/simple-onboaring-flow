import React from "react";
import { ProgressBar, Step } from "react-step-progress-bar";
import "react-step-progress-bar/styles.css";
import style from "./../styles/ProgressBar.module.scss";

interface Props {
  currentStep: number;
}

const StepProgressBar: React.FC<Props> = (props) => {
  let stepPercentage = 0;

  const { currentStep } = props;

  if (currentStep === 1) stepPercentage = 16.66;
  else if (currentStep === 2) stepPercentage = 50;
  else if (currentStep === 3) stepPercentage = 83.33;
  else stepPercentage = 100;

  const steps = [1, 2, 3, 4];

  return (
    <ProgressBar
      percent={stepPercentage}
      filledBackground="rgb(102, 77, 229)"
      height="2px"
    >
      {steps.map(() => {
        return (
          <Step>
            {({ accomplished, index }) => (
              <div
                className={`${style.indexedStep} ${
                  accomplished ? `${style.accomplished}` : null
                }`}
              >
                {index + 1}
              </div>
            )}
          </Step>
        );
      })}
    </ProgressBar>
  );
};

export default StepProgressBar;
