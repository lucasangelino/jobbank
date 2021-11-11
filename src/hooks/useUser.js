import { useState } from "react";

export function useUser() {
  const [user, setUser] = useState(() => localStorage.getItem("token"));
  const [user_id, setUserID] = useState(() => localStorage.getItem("user_id"));
  const [user_name, setUserName] = useState(() =>
    localStorage.getItem("user_name")
  );
  const [is_empresa, setIsEmpresa] = useState(() =>
    localStorage.getItem("is_empresa")
  );
  const login = (data) => {
    localStorage.setItem("token", data.token);
    localStorage.setItem("user_id", data.user_id);
    localStorage.setItem("user_name", data.user_name);
    localStorage.setItem("is_empresa", data.is_empresa);
    localStorage.setItem("intereses", data.intereses);
    setIsEmpresa(data.is_empresa);
    setUserName(data.user_name);
    setUserID(data.user_id);

    setUser(true);
  };

  const logout = () => {
    localStorage.clear();
    setUser(false);
  };

  return {
    user,
    user_id,
    user_name,
    is_empresa,
    login,
    logout,
  };
}
