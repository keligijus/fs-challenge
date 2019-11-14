import React from "react";

function TextareField(props) {
  return (
    <div className="field">
      <label className="label" htmlFor={props.data.name}>
        {props.data.label}
      </label>
      <div className="control">
        <textarea
          className="textarea"
          value={props.value}
          name={props.data.name}
          onChange={e => props.onChangeMethod(props.data.name, e.target.value)}
        />
      </div>
    </div>
  );
}

export default TextareField;
