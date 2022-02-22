import React from "react";
import style from "../../styles/steps/name.module.scss";

const Name: React.FC = () => {
  return (
    <div className={style.container}>
      <h2 className={style.heading}>Welcome! First things first...</h2>
      <span className={style.subHeading}>
        You can always change them later.
      </span>
    </div>
  );
};

export default Name;
