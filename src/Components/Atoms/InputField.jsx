import React from "react";

function InputField({ Type, placeHolder }) {
  return (
    <input
      type={Type}
      placeholder={placeHolder}
      className={`mt-2 pl-3 rounded-md `}
      style={{ height: "45px", width: "330px" }}
    />
  );
}

export default InputField;
