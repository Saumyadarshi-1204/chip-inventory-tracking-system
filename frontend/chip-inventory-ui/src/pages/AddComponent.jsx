import { useState } from "react";
import api from "../api/api";

export default function AddComponent() {
  const [form, setForm] = useState({
    component_type: "",
    supplier: "",
    description: "",
  });

  const submit = async () => {
    const res = await api.post("/components", form);
    alert("Component added successfully");

    // RESET FORM
    setForm({
      component_type: "",
      supplier: "",
      description: "",
    });
  };

  return (
    <div className="card">
      <h2>Add Component</h2>

      <input
        placeholder="Component Type"
        value={form.component_type}
        onChange={(e) =>
          setForm({ ...form, component_type: e.target.value })
        }
      />

      <input
        placeholder="Supplier"
        value={form.supplier}
        onChange={(e) =>
          setForm({ ...form, supplier: e.target.value })
        }
      />

      <input
        placeholder="Description"
        value={form.description}
        onChange={(e) =>
          setForm({ ...form, description: e.target.value })
        }
      />

      <button onClick={submit}>Submit</button>
    </div>
  );
}
