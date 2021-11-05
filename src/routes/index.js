import * as React from "react";

// Components
import Login from "../components/auth/Login";
import Register from "../components/auth/Register";

const routes = [
  {
    path: "/",
    exact: true,
    main: () => <h2>JobBank</h2>,
    browserTitle: "JobBank",
  },
  {
    path: "/publicaciones",
    exact: true,
    main: () => <h2>Mis Publicaciones</h2>,
    browserTitle: "Mis Publicaciones",
  },
  {
    path: "/postulaciones",
    exact: true,
    main: () => <h2>Postulaciones</h2>,
    browserTitle: "Mis Postulaciones",
  },
  {
    path: "/login",
    exact: true,
    main: () => <Login />,
    browserTitle: "Mis Postulaciones",
  },
  {
    path: "/register",
    exact: true,
    main: () => <Register />,
    browserTitle: "Mis Postulaciones",
  },
];

export default routes;
