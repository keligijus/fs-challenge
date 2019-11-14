import React from "react";

function InputField(props) {
  return (
    <div className="field">
      <label className="label" htmlFor={props.data.name}>
        {props.data.label}
      </label>
      <div className="control">
        <input
          className="input"
          type={props.data.type}
          value={props.value}
          name={props.data.name}
          onChange={e => props.onChangeMethod(props.data.name, e.target.value)}
        ></input>
      </div>
    </div>
  );
}

export default InputField;
