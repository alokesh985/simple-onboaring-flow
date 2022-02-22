import React from "react";
import style from "../../styles/steps/plan.module.scss";

const Plan: React.FC = () => {
  return (
    <div className={style.container}>
      <h2 className={style.heading}>How are you planning to use Eden?</h2>
      <span className={style.subHeading}>
        We'll streamline your setup experience accordingly.
      </span>
    </div>
  );
};

export default Plan;
