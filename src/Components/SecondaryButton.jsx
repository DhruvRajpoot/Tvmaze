import React from "react";

const SecondaryButton = (props) => {
  const style = {
    width: props.width,
    height: "48px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "6px",
    color: "#f4d113",
    border: "1px solid #f4d113",
    borderRadius: "64px",
    padding: "12px 30px",
    cursor: "pointer",
  };

  return (
    <button
      type="button"
      className="text-sm sm:text-base font-semibold hover:bg-[#fff9d4] duration-300 active:scale-95"
      onClick={props.onClick}
      style={style}
    >
      <span>{props.icon}</span>
      <p>{props.text}</p>
    </button>
  );
};

export default SecondaryButton;
