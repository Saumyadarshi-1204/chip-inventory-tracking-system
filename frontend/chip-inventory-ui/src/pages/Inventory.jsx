import { useEffect, useState } from "react";
import api from "../api/api";

export default function Inventory() {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api
      .get("/inventory")
      .then((res) => setRows(res.data))
      .catch(() => alert("Failed to load inventory"))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="card wide">
      <h2>Inventory Status</h2>

      {loading && <p>Loading inventory...</p>}

      {!loading && rows.length === 0 && (
        <p className="muted">No inventory records found.</p>
      )}

      {!loading && rows.length > 0 && (
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
      )}
    </div>
  );
}
