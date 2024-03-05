// LoginSection.jsx
import React, { useState } from "react";
import LoginSelectType from "../Atoms/LoginSelectType";
import doctorPng from "../../Assets/Images/DoctorPng.png";
import patientPng from "../../Assets/Images/patientPng.png";
import InputField from "../Atoms/InputField";
function LoginSection() {
  const [selected, setSelected] = useState(null);

  const handleItemClick = index => {
    setSelected(index);
  };

  return (
    <div
      className={`flex flex-col items-center h-[93vh] w-full justify-center`}
    >
      <p className={` text-lg font-medium text-secondaryColor`}>
        Select Account Type
      </p>
      <div className={`select-none flex mt-4`}>
        <LoginSelectType
          Title="Patient"
          imageData={patientPng}
          isSelected={selected === 0}
          onClick={() => handleItemClick(0)}
        />
        <LoginSelectType
          Title="Doctor"
          imageData={doctorPng}
          isSelected={selected === 1}
          onClick={() => handleItemClick(1)}
        />
      </div>
      <p className={`pt-3 text-lg font-medium text-tertiaryColor`}>
        Welcome Back!
      </p>
      <InputField Type="text" placeHolder="Enter Email/Mobile No." />
      <InputField Type="password" placeHolder="Enter Password." />
    </div>
  );
}

export default LoginSection;
