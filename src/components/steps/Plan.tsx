import React, { useState } from "react";
import style from "../../styles/steps/plan.module.scss";

interface Props {
  handleUpdatePlan: Function;
}

const Plan: React.FC<Props> = ({ handleUpdatePlan }) => {
  const [selectedPlan, updateSelectedPlan] = useState("single");

  const onClickPlan = (plan: string) => {
    updateSelectedPlan(plan);
    handleUpdatePlan(plan);
  };

  return (
    <div className={style.container}>
      <h2 className={style.heading}>How are you planning to use Eden?</h2>
      <span className={style.subHeading}>
        We'll streamline your setup experience accordingly.
      </span>
      <div className={style.plansContainer}>
        <div
          className={`${style.plan} ${
            selectedPlan === "single" ? style.selectedPlan : ``
          }`}
          onClick={() => onClickPlan("single")}
        >
          <img src="/single-person.png" />
          <p className={style.planHeading}>For myself</p>
          <p className={style.planDetails}>
            Write better. Think more clearly. Stay organized.
          </p>
        </div>
        <div
          className={`${style.plan} ${
            selectedPlan === "multiple" ? style.selectedPlan : ``
          }`}
          onClick={() => onClickPlan("multiple")}
        >
          <img src="/multiple-people.png" />
          <p className={style.planHeading}>With my team</p>
          <p className={style.planDetails}>
            Wikis, docs, tasks & projects, all in one place.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Plan;
