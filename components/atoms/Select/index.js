import React from "react";

const Select = ({ label, option, onSelect }) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="text-sm">{label}</div>
      <select
        className="border-b-2 border-b-customGray focus:border-b-customTosca outline-0 px-3 py-1 w-full"
        onChange={(e) => onSelect(e.target.value)}
      >
        {option.map((item, index) => (
          <option key={index} value={item.value}>
            {item.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
