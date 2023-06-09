import React from "react";

const InputRow = ({
  type,
  name,
  value,
  handleChange,
  labelText,
  placeholder,
  qr,
}) => {
  return (
    <div className={qr ? "form-qr" : "form-row"}>
      <label htmlFor={name} className={qr ? "form-label-qr" : "form-label"}>
        {labelText || name}
      </label>
      <input
        id={name}
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
        className="form-input"
      />
    </div>
  );
};

export default InputRow;
