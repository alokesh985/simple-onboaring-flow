import React from "react";
import style from "./../styles/header.module.scss";

const Header: React.FC = () => {
  return (
    <div className={style.headerContainer}>
      <img src="./header-icon.png" alt="header-icon" />
      <span className={style.headerText}>Eden</span>
    </div>
  );
};

export default Header;
