import { useState } from "react";
import api from "../api/api";

export default function Transfer() {
  const [form, setForm] = useState({
    lot_id: "",
    from_location_id: "",
    to_location_id: "",
    requested_by: "",
  });

  const submit = async () => {
    try {
      const payload = {
        lot_id: form.lot_id,
        from_location_id: Number(form.from_location_id),
        to_location_id: Number(form.to_location_id),
        requested_by: Number(form.requested_by),
      };

      const res = await api.post("/transfers", payload);

      alert("Transfer request created successfully");

      // clear form
      setForm({
        lot_id: "",
        from_location_id: "",
        to_location_id: "",
        requested_by: "",
      });
    } catch (err) {
      alert(
        "Transfer request failed: " +
          (err.response?.data?.error || err.message)
      );
    }
  };

  return (
    <div className="card">
      <h2>Request Transfer</h2>

      <input
        placeholder="Lot ID"
        value={form.lot_id}
        onChange={(e) => setForm({ ...form, lot_id: e.target.value })}
      />

      <input
        placeholder="From Location ID"
        value={form.from_location_id}
        onChange={(e) =>
          setForm({ ...form, from_location_id: e.target.value })
        }
      />

      <input
        placeholder="To Location ID"
        value={form.to_location_id}
        onChange={(e) =>
          setForm({ ...form, to_location_id: e.target.value })
        }
      />

      <input
        placeholder="Requested By (User ID)"
        value={form.requested_by}
        onChange={(e) =>
          setForm({ ...form, requested_by: e.target.value })
        }
      />

      <button onClick={submit}>Submit</button>
    </div>
  );
}
