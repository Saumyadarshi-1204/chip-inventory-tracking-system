import { useState } from 'react';
import api from '../api/api';

export default function AddComponent() {
  const [data, setData] = useState({
    component_type: '',
    supplier: '',
    description: '',
  });

  const submit = async () => {
    const res = await api.post('/components', data);
    alert(JSON.stringify(res.data, null, 2));
  };

  return (
    <div className="card">
      <h2>Add Component</h2>
      <input placeholder="Component Type"
        onChange={e => setData({ ...data, component_type: e.target.value })} />
      <input placeholder="Supplier"
        onChange={e => setData({ ...data, supplier: e.target.value })} />
      <input placeholder="Description"
        onChange={e => setData({ ...data, description: e.target.value })} />
      <button onClick={submit}>Submit</button>
    </div>
  );
}
