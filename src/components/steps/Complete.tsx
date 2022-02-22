import React from "react";
import style from "../../styles/steps/complete.module.scss";

const Complete: React.FC = () => {
  return (
    <div className={style.container}>
      <img src="/completed-icon.png" alt="completed icon" />
      <h2 className={style.heading}>Congratulations NAME HERE!</h2>
      <span className={style.subHeading}>
        You have completed onboarding, you can start using the Eden!
      </span>
    </div>
  );
};

export default Complete;
