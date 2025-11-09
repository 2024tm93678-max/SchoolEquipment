import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import AdminDashboard from "./pages/AdminDashboard";
import LabAssistantDashboard from "./pages/LabAssistantDashboard";
import StudentDashboard from "./pages/StudentDashboard";
import EquipmentList from "./pages/EquipmentList";

export default function App() {
  const [user, setUser] = useState(null);

  function handleLogout() {
    setUser(null);
  }

  return (
    <Router>
      <Navbar user={user} onLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<EquipmentList user={user} />} />
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/lab" element={<LabAssistantDashboard />} />
        <Route path="/student" element={<StudentDashboard user={user} />} />
        <Route path="/equipments" element={<EquipmentList user={user} />} />
      </Routes>
    </Router>
  );
}
