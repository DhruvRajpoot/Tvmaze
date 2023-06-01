import React from "react";

const PrimaryButton = (props) => {
  const style = {
    width: props.width,
    height: "48px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "6px",
    backgroundColor: "#f4d113",
    color: "#202020",
    border: "none",
    borderRadius: "64px",
    padding: "12px 30px",
    cursor: "pointer",
  };

  return (
    <button
      type="button"
      className="text-sm sm:text-base font-semibold hover:shadow-[3px_3px_14px_#fee65e] duration-300 active:scale-95"
      onClick={props.onClick}
      style={style}
    >
      <span>{props.icon}</span>
      <p>{props.text}</p>
    </button>
  );
};

export default PrimaryButton;
