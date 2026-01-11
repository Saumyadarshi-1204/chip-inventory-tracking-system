import { useState } from 'react';
import api from '../api/api';

export default function AuditLog() {
  const [lotId, setLotId] = useState('');
  const [logs, setLogs] = useState([]);

  const fetchLogs = async () => {
    const res = await api.get(`/lots/${lotId}/history`);
    setLogs(res.data);
  };

  return (
    <div className="card wide">
      <h2>Lot Audit Log</h2>

      <input
        placeholder="Enter Lot ID"
        value={lotId}
        onChange={e => setLotId(e.target.value)}
      />

      <button onClick={fetchLogs}>View History</button>

      <ul className="audit-list">
        {logs.map((l, i) => (
          <li key={i}>
            <strong>{l.action}</strong> — {new Date(l.timestamp).toLocaleString()}
            <div className="muted">{l.remarks}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
