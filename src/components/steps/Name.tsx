import React from "react";
import style from "../../styles/steps/name.module.scss";

interface Props {
  handleFullNameChange: Function;
  handleDisplayNameChange: Function;
}

const Name: React.FC<Props> = ({
  handleFullNameChange,
  handleDisplayNameChange,
}) => {
  const onFullNameChange = (e: any) => handleFullNameChange(e.target.value);
  const onDisplayNameChange = (e: any) =>
    handleDisplayNameChange(e.target.value);

  return (
    <div className={style.container}>
      <h2 className={style.heading}>Welcome! First things first...</h2>
      <span className={style.subHeading}>
        You can always change them later.
      </span>
      <div className={style.formContainer}>
        <div className={style.field}>
          <text className={style.label}>Full Name</text>
          <input
            className={style.inputField}
            placeholder="Steve Jobs"
            onChange={onFullNameChange}
          />
        </div>
        <div className={style.field}>
          <text className={style.label}>Display Name</text>
          <input
            className={style.inputField}
            placeholder="Steve"
            onChange={onDisplayNameChange}
          />
        </div>
      </div>
    </div>
  );
};

export default Name;
