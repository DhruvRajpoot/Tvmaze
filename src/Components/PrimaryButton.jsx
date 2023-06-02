import React from "react";

const PrimaryButton = (props) => {
  const style = {
    width: props.width,
    height: props.height,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "8px",
    border: "none",
    borderRadius: "5px",
    padding: "12px 30px",
    cursor: "pointer",
  };

  return (
    <button
      type={props.type}
      className={`text-sm sm:text-base font-semibold bg-[${props.disabled?'#c11322':'#f71a2c'}] text-[#202020] hover:text-white duration-300 active:scale-95`}
      onClick={props.onClick}
      style={style}
      disabled={props.disabled} 
    >
      <span className="text-lg">{props.icon}</span>
      <p className="tracking-widest">{props.text}</p>
    </button>
  );
};

PrimaryButton.defaultProps = {
  height: "48px",
  isDiabled: false,
  type: "button",
};

export default PrimaryButton;
