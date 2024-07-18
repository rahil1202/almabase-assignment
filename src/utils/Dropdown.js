import React, { useState } from "react";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";

const Dropdown = ({ open = true, title, children }) => {
  const [isOpen, setIsOpen] = useState(open);

  const handleToggle = (e) => {
    e.preventDefault();
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="border-b">
      <div
        className="flex items-center justify-between p-5 cursor-pointer"
        onClick={handleToggle}
      >
        <h6 className="text-xs font-semibold">{title}</h6>
        {isOpen ? (
          <BsChevronUp className="w-3" /> 
        ) : (
          <BsChevronDown className="w-3" />
        )}
      </div>
      {isOpen && <div className="">{children}</div>}
    </div>
  );
};

export default Dropdown;
