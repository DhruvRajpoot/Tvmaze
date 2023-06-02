import React from "react";

const Alert = (props) => {
  return (
    <div>
      <div className="alert w-fit px-10 py-2 rounded-md fixed bottom-10 left-1/2 translate-x-[-50%] bg-green-600">
        <p>{props.text}</p>
      </div>
    </div>
  );
};

export default Alert;
