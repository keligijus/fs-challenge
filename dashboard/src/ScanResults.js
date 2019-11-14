import React, { useState, useEffect } from "react";
import ScanFindings from "./ScanFindings";
import axios from "axios";

function ScanResults() {
  const [resultsData, setResultsData] = useState([]);
  const [displayRowId, setDisplayRowId] = useState(0);

  function dataMapper(data) {
    return data.map(d => {
      d.findings = JSON.parse(d.findings);
      d.findings = d.findings.findings; // uhh, dirty :(
      d.statusTimestamp = getStatusTimestamp(d);
      return d;
    });
  }

  function getStatusTimestamp(r) {
    if (r.statusName === "Queued") {
      return r.queuedAt;
    }
    if (r.statusName === "In Progress") {
      return r.scanningAt;
    }

    return r.finishedAt;
  }

  function toggleFindings(id) {
    const newDisplayRowId = displayRowId === id ? 0 : id;
    setDisplayRowId(newDisplayRowId);
  }

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get("http://localhost:3000/api/results");
      setResultsData(dataMapper(response.data));
    }

    if (!resultsData.length) fetchData();
  }, []);

  return (
    <div className="section">
      <table className="table is-fullwidth">
        <thead>
          <tr>
            <th>Id</th>
            <th>Findings</th>
            <th>Repository Name</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {resultsData.length === 0 ? (
            <tr>
              <td colSpan="4">No results.</td>
            </tr>
          ) : (
            resultsData.map(r => (
              <React.Fragment key={r.id}>
                <tr
                  className={
                    r.findings && r.findings.length ? "has-findings" : ""
                  }
                  onClick={
                    r.findings && r.findings.length
                      ? () => toggleFindings(r.id)
                      : () => toggleFindings(displayRowId)
                  }
                >
                  <td>{r.id}</td>
                  <td>
                    {r.findings && r.findings.length ? (
                      <span className="tag is-primary">
                        {r.findings && r.findings.length}
                      </span>
                    ) : (
                      <span></span>
                    )}
                  </td>
                  <td>{r.repositoryName}</td>
                  <td>
                    {r.statusName} @ {r.statusTimestamp}
                  </td>
                </tr>
                {displayRowId === r.id ? (
                  <tr>
                    <td colSpan="4">
                      <ScanFindings findings={r.findings} />
                    </td>
                  </tr>
                ) : (
                  <></>
                )}
              </React.Fragment>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default ScanResults;
