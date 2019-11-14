import React from "react";

function SelectField(props) {
  return (
    <div className="field">
      <label className="label" htmlFor={props.data.name}>
        {props.data.label}
      </label>
      <div className="control">
        <div className="select">
          <select
            name={props.data.name}
            value={props.value}
            onChange={e =>
              props.onChangeMethod(props.data.name, e.target.value)
            }
          >
            {props.data.options.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}

export default SelectField;
