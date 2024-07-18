import React, { useState, useEffect, useRef } from "react";

const SelectField = ({ title, value, options, setValue }) => {
  const [toggle, setToggle] = useState(false);

  const dropdownRef = useRef(null);

  const handleToggle = () => {
    setToggle((prev) => !prev);
  };

  const handleSelect = (option) => {
    setValue(option);
    handleToggle()
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setToggle(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []); 

  return (
    <div className="w-full">
      <label htmlFor="Fontsize" className="text-xs">
        {title}
      </label>{" "}
      <br />
      <div className="relative w-full" ref={dropdownRef}>
        <div
          onClick={handleToggle}
          className="py-2 mt-1 bg-gray-100 px-2 rounded-md text-xs w-full"
        >
          {value}
        </div>

        {toggle && (
          <div className="z-50 absolute top-10 w-full m-0 p-0 border rounded-md">
            <div className="flex flex-col gap-2 bg-white p-2 rounded-md text-xs w-full top-">
              {options.map((option) => (
                <div
                  key={option}
                  onClick={() => handleSelect(option)}
                  className="p-1 bg-gray-100 rounded-md hover:bg-gray-200"
                >
                  {option}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SelectField;
