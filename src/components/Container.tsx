import React, { useState, useEffect } from "react";
import style from "./../styles/container.module.scss";
import Header from "./Header";
import StepProgressBar from "./StepProgressBar";
import Complete from "./steps/Complete";
import Name from "./steps/Name";
import Plan from "./steps/Plan";
import Workspace from "./steps/Workspace";
import NextButton from "./NextButton";

const Container: React.FC = () => {
  const [currentStep, updateCurrentStep] = useState(1);
  const [fullName, updateFullName] = useState("");
  const [displayName, updateDisplayName] = useState("");
  const [validation, updateValidation] = useState(false);

  useEffect(() => {
    if (fullName && displayName) {
      updateValidation(true);
    }
  }, [fullName, displayName]);

  return (
    <div className={style.mainContainer}>
      <Header />
      <div className={style.progressBar}>
        <StepProgressBar currentStep={currentStep} />
      </div>
      <div className={style.mainContent}>
        {currentStep === 1 ? (
          <Name
            handleDisplayNameChange={updateDisplayName}
            handleFullNameChange={updateFullName}
          />
        ) : currentStep === 2 ? (
          <Workspace />
        ) : currentStep === 3 ? (
          <Plan />
        ) : (
          <Complete />
        )}
      </div>
      <NextButton
        handleNext={updateCurrentStep}
        currentStage={currentStep}
        validated={validation}
      />
    </div>
  );
};

export default Container;
