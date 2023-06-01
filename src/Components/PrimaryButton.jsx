import React from "react";

const PrimaryButton = (props) => {
  const style = {
    width: props.width,
    height: "48px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "6px",
    border: "none",
    borderRadius: "5px",
    padding: "12px 30px",
    cursor: "pointer",
  };

  return (
    <button
      type="button"
      className="text-sm sm:text-base font-semibold bg-[#f71a2c] text-[#202020] hover:text-white duration-300 active:scale-95"
      onClick={props.onClick}
      style={style}
    >
      <span>{props.icon}</span>
      <p>{props.text}</p>
    </button>
  );
};

export default PrimaryButton;
