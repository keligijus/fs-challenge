import React, { useState, useEffect } from "react";
import InputField from "./InputField";
import TextareaField from "./TextareaField";
import SelectField from "./SelectField";

import axios from "axios";

const DEFAULT_FORM_DATA = Object.freeze({
  repositoryName: "",
  findings: "",
  statusId: 1
});

function ScanResultForm() {
  const [formData, setFormData] = useState(DEFAULT_FORM_DATA);
  const [formMessage, setFormMessage] = useState({ type: "", message: "" });

  function onChangeMethod(key, val) {
    const newFormData = JSON.parse(JSON.stringify(formData));
    newFormData[key] = val;

    setFormData(newFormData);
  }

  function submitForm(e) {
    e.preventDefault();
    setFormMessage({});

    return axios
      .post("http://localhost:3000/api/result", formData)
      .then(() => {
        setFormData(DEFAULT_FORM_DATA);
        setFormMessage({ type: "success", message: "Saved!" });
      })
      .catch(e => {
        setFormMessage({ type: "danger", message: "Error! Wrong format!" });
      });
  }

  return (
    <form className="section">
      <InputField
        data={{
          name: "repositoryName",
          label: "Repository Name",
          type: "text"
        }}
        value={formData.repositoryName}
        onChangeMethod={onChangeMethod}
      />

      <TextareaField
        data={{
          name: "findings",
          label: "Findings (JSON)"
        }}
        value={formData.findings}
        onChangeMethod={onChangeMethod}
      />

      <SelectField
        data={{
          name: "statusId",
          label: "Status",
          options: [
            { label: "Queued", value: 1 },
            { label: "In Progress", value: 2 },
            { label: "Success", value: 3 },
            { label: "Failure", value: 4 }
          ]
        }}
        value={formData.status}
        onChangeMethod={onChangeMethod}
      />

      <button className="button is-primary" onClick={submitForm}>
        Save
      </button>

      <br />

      {formMessage.message && formMessage.message.length ? (
        <article className={`message is-${formMessage.type}`}>
          {" "}
          <div className="message-body">{formMessage.message}</div>
        </article>
      ) : (
        <></>
      )}
    </form>
  );
}

export default ScanResultForm;
