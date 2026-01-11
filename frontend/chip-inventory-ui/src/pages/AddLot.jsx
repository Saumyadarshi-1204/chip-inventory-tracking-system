import { useState } from 'react';
import api from '../api/api';

export default function AddLot() {
  const [data, setData] = useState({});

  const submit = async () => {
    const res = await api.post('/inventory/lot', data);
    alert(JSON.stringify(res.data, null, 2));
  };

  return (
    <div className="card">
      <h2>Add Lot</h2>
      <input placeholder="Lot ID" onChange={e => setData({ ...data, lot_id: e.target.value })} />
      <input placeholder="Component ID" onChange={e => setData({ ...data, component_id: e.target.value })} />
      <input placeholder="Quantity" onChange={e => setData({ ...data, quantity: e.target.value })} />
      <input placeholder="Location ID" onChange={e => setData({ ...data, location_id: e.target.value })} />
      <input placeholder="YYYY-MM-DD" onChange={e => setData({ ...data, receipt_date: e.target.value })} />
      <button onClick={submit}>Submit</button>
    </div>
  );
}
