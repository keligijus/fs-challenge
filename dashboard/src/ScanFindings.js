import React from "react";

function ScanFinding(props) {
  return (
    <table className="table is-narrow is-bordered">
      <thead>
        <tr>
          <th>Rule&nbsp;Id</th>
          <th>Description</th>
          <th>Severity</th>
          <th>Path</th>
        </tr>
      </thead>
      <tbody>
        {props.findings.map(f => (
          <tr>
            <td>{f.ruleId}</td>
            <td>{f.metadata && f.metadata.description}</td>
            <td>{f.metadata && f.metadata.severity}</td>
            <td>
              File: {f.location && f.location.path}, Line:
              {f.location &&
                f.location.positions &&
                f.location.positions.begin &&
                f.location.positions.begin.line}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ScanFinding;
