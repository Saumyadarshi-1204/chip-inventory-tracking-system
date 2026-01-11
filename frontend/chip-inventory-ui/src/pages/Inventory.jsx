import { useEffect, useState } from 'react';
import api from '../api/api';

export default function Inventory() {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    api.get('/inventory')
      .then(res => setRows(res.data))
      .catch(err => alert(err.message));
  }, []);

  return (
    <div className="card wide">
      <h2>Inventory Status</h2>

      <table>
        <thead>
          <tr>
            <th>Lot ID</th>
            <th>Component</th>
            <th>Quantity</th>
            <th>Location</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i}>
              <td>{r.lot_id}</td>
              <td>{r.component_type}</td>
              <td>{r.quantity_available}</td>
              <td>{r.location_name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
