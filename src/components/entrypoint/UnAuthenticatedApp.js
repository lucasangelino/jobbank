import * as React from "react";
import { Routes, Route } from "react-router-dom";
// Components
import Login from "../auth/Login";
import Register from "../auth/Register";

// routes
export default function UnAuthenticatedApp() {
  console.log("UnAuthenticatedApp");
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}
