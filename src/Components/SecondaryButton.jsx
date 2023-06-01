import React from "react";

const SecondaryButton = (props) => {
  const style = {
    width: props.width,
    height: "48px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "6px",
    borderRadius: "5px",
    padding: "12px 30px",
    cursor: "pointer",
  };

  return (
    <button
      type="button"
      className="text-sm sm:text-base font-semibold text-[#f71a2c] border border-[#f71a2c] hover:bg-[#000000e8] hover:text-white hover:border-white duration-300 active:scale-95"
      onClick={props.onClick}
      style={style}
    >
      <span>{props.icon}</span>
      <p>{props.text}</p>
    </button>
  );
};

export default SecondaryButton;
