import { useState } from "react";
import api from "../api/api";

export default function AddLot() {
  const [form, setForm] = useState({
    lot_id: "",
    component_id: "",
    quantity: "",
    location_id: "",
    receipt_date: "",
  });

  const submit = async () => {
    await api.post("/inventory/lot", form);
    alert("Lot and inventory added");

    // RESET FORM
    setForm({
      lot_id: "",
      component_id: "",
      quantity: "",
      location_id: "",
      receipt_date: "",
    });
  };

  return (
    <div className="card">
      <h2>Add Lot</h2>

      <input placeholder="Lot ID" value={form.lot_id}
        onChange={e => setForm({ ...form, lot_id: e.target.value })} />

      <input placeholder="Component ID" value={form.component_id}
        onChange={e => setForm({ ...form, component_id: e.target.value })} />

      <input placeholder="Quantity" value={form.quantity}
        onChange={e => setForm({ ...form, quantity: e.target.value })} />

      <input placeholder="Location ID" value={form.location_id}
        onChange={e => setForm({ ...form, location_id: e.target.value })} />

      <input placeholder="YYYY-MM-DD" value={form.receipt_date}
        onChange={e => setForm({ ...form, receipt_date: e.target.value })} />

      <button onClick={submit}>Submit</button>
    </div>
  );
}
