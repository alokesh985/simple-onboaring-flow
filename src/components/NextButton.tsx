import React from "react";
import style from "./../styles/nextButton.module.scss";

interface Props {
  handleNext: Function;
  currentStage: number;
}

const NextButton: React.FC<Props> = ({ handleNext, currentStage }) => {
  const handleClick = () => handleNext(currentStage + 1);
  const buttonText = currentStage >= 4 ? "Launch Eden" : "Create Workspace";
  return (
    <button className={style.nextButton} onClick={handleClick}>
      {buttonText}
    </button>
  );
};

export default NextButton;
