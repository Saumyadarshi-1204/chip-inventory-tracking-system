import { useState } from 'react';
import api from '../api/api';

export default function Transfer() {
  const [data, setData] = useState({});

  const submit = async () => {
    const res = await api.post('/transfers', data);
    alert(JSON.stringify(res.data, null, 2));
  };

  return (
    <div className="card">
      <h2>Request Transfer</h2>
      <input placeholder="Lot ID" onChange={e => setData({ ...data, lot_id: e.target.value })} />
      <input placeholder="From Location" onChange={e => setData({ ...data, from_location_id: e.target.value })} />
      <input placeholder="To Location" onChange={e => setData({ ...data, to_location_id: e.target.value })} />
      <input placeholder="User ID" onChange={e => setData({ ...data, requested_by: e.target.value })} />
      <button onClick={submit}>Submit</button>
    </div>
  );
}
