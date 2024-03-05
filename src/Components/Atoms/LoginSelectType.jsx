// LoginSelectType.jsx
import React from "react";

function LoginSelectType({ Title, imageData, isSelected, onClick }) {
  return (
    <div className={`select-none flex flex-col items-center justify-center`}>
      <p className={`text-primaryColor`}>
        {Title}
      </p>
      <div className={`relative`} onClick={onClick}>
        <img
          className={` border border-2 rounded-md ${isSelected
            ? 'border-primaryColor/[0.8]'
            : 'border-tertiaryColor/[0.2]'} mx-2`}
          src={imageData}
          alt={Title}
          style={{ height: "150px", width: "150px" }}
        />
        {isSelected &&
          <svg
            className={`absolute`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            fill="#035055"
            style={{
              height: "17px",
              width: "17px",
              bottom: "-7px",
              right: "0px"
            }}
          >
            <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z" />
            <path
              d="M369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
              fill="white"
            />
          </svg>}
      </div>
    </div>
  );
}

export default LoginSelectType;
