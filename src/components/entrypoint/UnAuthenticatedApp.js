import * as React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
// Components

// routes
export default function UnAuthenticatedApp() {
  console.log("UnAuthenticatedApp");
  return (
    <div>
      <Routes>
        <Route path="/auth" element={<h1>Login</h1>} />
      </Routes>
    </div>
  );
}
