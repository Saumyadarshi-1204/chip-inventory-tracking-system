export default function Sidebar({ setPage }) {
  return (
    <div className="sidebar">
      <h2>Inventory</h2>

      <button onClick={() => setPage('inventory')}>Inventory</button>
      <button onClick={() => setPage('component')}>Add Component</button>
      <button onClick={() => setPage('lot')}>Add Lot</button>
      <button onClick={() => setPage('transfer')}>Transfer</button>
      <button onClick={() => setPage('audit')}>Audit Log</button>
    </div>
  );
}
