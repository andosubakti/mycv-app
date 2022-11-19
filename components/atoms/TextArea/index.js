import React from "react";

const TextArea = ({
  label,
  onChange,
  value,
  isForm,
  disabled,
  placeholder,
}) => {
  return (
    <div className="flex flex-col gap-2 w-full">
      <div className="text-sm">{label}</div>
      <div className="flex flex-row relative">
        <textarea
          className="border border-solid border-customGray focus:border-customTosca outline-0 px-3 py-1 w-full"
          style={isForm ? { borderRadius: "6px" } : { borderRadius: "100px" }}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          disabled={disabled}
          placeholder={placeholder}
        ></textarea>
      </div>
    </div>
  );
};

export default TextArea;
