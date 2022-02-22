import React from "react";
import style from "../../styles/steps/workspace.module.scss";

const Workspace: React.FC = () => {
  return (
    <div className={style.container}>
      <h2 className={style.heading}>Let's set up a home for all your work</h2>
      <span className={style.subHeading}>
        You can always create another workspace later.
      </span>
      <div className={style.formContainer}>
        <div className={style.field}>
          <text className={style.label}>Workspace Name</text>
          <input className={style.inputField} placeholder="Eden" />
        </div>
        <div className={style.field}>
          <text className={style.label}>Workspace URL</text>
          <input className={style.inputField} placeholder="Steve" />
        </div>
      </div>
    </div>
  );
};

export default Workspace;
