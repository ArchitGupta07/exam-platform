import React from "react";

interface InputFieldProps {
  name: string;
  placeholder: string;
  type?: string;
}

const InputField: React.FC<InputFieldProps> = ({
  name,
  placeholder,
  type = "text",
}) => {
  return (
    <div className="input-field">
      <input
        type={type}
        name={name}
        className="input-box"
        placeholder={placeholder}
        required
      />
      <label htmlFor="" className="input-label">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          //   style={{ fill: "rgba(0, 0, 0, 1)" }}
          className="svg"
        >
          <path d="M7.5 6.5C7.5 8.981 9.519 11 12 11s4.5-2.019 4.5-4.5S14.481 2 12 2 7.5 4.019 7.5 6.5zM20 21h1v-1c0-3.859-3.141-7-7-7h-4c-3.86 0-7 3.141-7 7v1h17z"></path>
        </svg>
      </label>
    </div>
  );
};

export default InputField;
