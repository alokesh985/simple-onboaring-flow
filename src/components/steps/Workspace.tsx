import React from "react";
import style from "../../styles/steps/workspace.module.scss";

interface Props {
  onWorkspaceNameChange: Function;
  onWorkspaceURLChange: Function;
}

const customStyle: any = {
  prefilledField: {
    display: "flex",
    flexDirection: "row",
  },
  prefilledPart: {
    height: "4vh",
    width: "8vw",
    cursor: "not-allowed",
  },
  inputField: {
    height: "4vh",
    width: "12vw",
  },
  commonField: {
    borderRadius: "5px",
    border: "1px solid lightgray",
    padding: "8px",
  },
  optionalText: {
    color: "#cdd1d9",
  },
};

const Workspace: React.FC<Props> = ({
  onWorkspaceNameChange,
  onWorkspaceURLChange,
}) => {
  const handleWorkspaceNameChange = (e: any) =>
    onWorkspaceNameChange(e.target.value);
  const handleWorkspaceURLChange = (e: any) => {
    let url = "www.eden.com/";
    url += e.target.value;
    onWorkspaceURLChange(url);
  };

  return (
    <div className={style.container}>
      <h2 className={style.heading}>Let's set up a home for all your work</h2>
      <span className={style.subHeading}>
        You can always create another workspace later.
      </span>
      <div className={style.formContainer}>
        <div className={style.field}>
          <text className={style.label}>Workspace Name</text>
          <input
            className={style.inputField}
            placeholder="Eden"
            onChange={handleWorkspaceNameChange}
          />
        </div>
        <div className={style.field}>
          <text className={style.label}>
            Workspace URL{" "}
            <span style={customStyle.optionalText}>(optional)</span>
          </text>
          <div style={customStyle.prefilledField}>
            <input
              style={{
                ...customStyle.prefilledPart,
                ...customStyle.commonField,
              }}
              disabled
              placeholder="www.eden.com/"
              onChange={handleWorkspaceURLChange}
            />
            <input
              style={{ ...customStyle.inputField, ...customStyle.commonField }}
              placeholder="Example"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Workspace;
