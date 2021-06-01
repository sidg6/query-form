import React from "react";
import './Button.css';

const Button = ({ btnTxt, containerStyle, handleClick, showInfo, btnStyleName, spriteIcon, spriteClass, tabIndex }) => {

  let btnStyle;

  const onClickHandler = (event, show) => {
    if (handleClick) {
      handleClick(event, show);
    }
  };

  const handleBtnStyle = (name) => {
    switch (name) {
      case "blueGradient":
        btnStyle = "blueGradientStyle";
        break;
      case "disabled":
        btnStyle = "disabledStyle";
        break;
      case "blue":
        btnStyle = "blueStyle";
        break;
      default:
        btnStyle = "primaryBtnStyle";
    }
  };

  handleBtnStyle(btnStyleName);

  return (
    <button
      tabIndex={tabIndex}
      onClick={(event) => onClickHandler(event, showInfo)}
      className={`buttonWrapper ${btnStyle}`}
      style={containerStyle} >
      {spriteIcon ? <span className={`${spriteClass}`}></span> : ''}
      <span className="btnText">{btnTxt}</span>
    </button>
  );
};

export default Button;
