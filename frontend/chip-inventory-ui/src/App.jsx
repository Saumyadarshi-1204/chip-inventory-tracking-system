import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import AddComponent from "./pages/AddComponent";
import AddLot from "./pages/AddLot";
import Transfer from "./pages/Transfer";
import Inventory from "./pages/Inventory";
import AuditLog from "./pages/AuditLog";
import "./styles.css";

export default function App() {
  const [page, setPage] = useState("inventory");

  return (
    <div className="app">
      <Sidebar setPage={setPage} />

      <div className="content">
        <Header />

        {page === "inventory" && <Inventory />}
        {page === "component" && <AddComponent />}
        {page === "lot" && <AddLot />}
        {page === "transfer" && <Transfer />}
        {page === "audit" && <AuditLog />}
      </div>
    </div>
  );
}
