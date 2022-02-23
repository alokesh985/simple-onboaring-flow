import React from "react";
import style from "../../styles/steps/complete.module.scss";

interface Props {
  displayName: string;
}

const Complete: React.FC<Props> = ({ displayName }) => {
  return (
    <div className={style.container}>
      <img src="/completed-icon.png" alt="completed icon" />
      <h2 className={style.heading}>Congratulations {displayName}!</h2>
      <span className={style.subHeading}>
        You have completed onboarding, you can start using the Eden!
      </span>
    </div>
  );
};

export default Complete;
