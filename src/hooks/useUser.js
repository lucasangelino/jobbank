import { useState } from "react";

export function useUser() {
  const [user, setUser] = useState(() => localStorage.getItem("token"));

  const login = (token) => {
    localStorage.setItem("token", token);
    setUser(true);
  };

  const logout = () => {
    localStorage.clear();
    setUser(false);
  };

  return {
    user,
    is_company: true,
    login,
    logout,
  };
}
