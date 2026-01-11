import { useState } from "react";
import api from "../api/api";

export default function AuditLog() {
  const [lotId, setLotId] = useState("");
  const [logs, setLogs] = useState([]);

  const fetchLogs = async () => {
    try {
      const res = await api.get(`/transfers/audit/${lotId}`);
      setLogs(res.data);

      if (res.data.length === 0) {
        alert("No audit logs found for this lot");
      }

      // ✅ CLEAR INPUT AFTER FETCH
      setLotId("");
    } catch (err) {
      alert(
        "Failed to fetch audit logs: " +
          (err.response?.data?.error || err.message)
      );
    }
  };

  return (
    <div className="card wide">
      <h2>Audit Log</h2>

      <input
        placeholder="Enter Lot ID"
        value={lotId}
        onChange={(e) => setLotId(e.target.value)}
      />

      <button onClick={fetchLogs}>View History</button>

      {logs.length > 0 && (
        <table>
          <thead>
            <tr>
              <th>Action</th>
              <th>Performed By</th>
              <th>Timestamp</th>
              <th>Remarks</th>
            </tr>
          </thead>
          <tbody>
            {logs.map((l, i) => (
              <tr key={i}>
                <td>{l.action}</td>
                <td>{l.performed_by}</td>
                <td>{new Date(l.timestamp).toLocaleString()}</td>
                <td>{l.remarks}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
