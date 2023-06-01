import React from "react";

const SecondaryButton = (props) => {
  const style = {
    width: props.width,
    height: props.height,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "8px",
    borderRadius: "5px",
    padding: props.padding,
    cursor: "pointer",
  };

  return (
    <button
      type="button"
      className="text-xs font-semibold text-white border border-[#f71a2c] hover:bg-[#000000e8] hover:text-white hover:border-white duration-300 active:scale-95"
      onClick={props.onClick}
      style={style}
    >
      <span className="text-base">{props.icon}</span>
      <p className="tracking-widest">{props.text}</p>
    </button>
  );
};

SecondaryButton.defaultProps = {
  padding: "12px 15px",
  height: "40px",
};

export default SecondaryButton;
