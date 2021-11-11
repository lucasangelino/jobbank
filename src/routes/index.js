import * as React from "react";

// Components
import JobOffers from "../components/jobwall";
import Login from "../components/auth/Login";
import Register from "../components/auth/Register";

const routes = [
  {
    path: "/login",
    exact: true,
    main: () => <Login />,
    browserTitle: "JobBank",
  },
  {
    path: "/register",
    exact: true,
    main: () => <Register />,
    browserTitle: "JobBank",
  },
  {
    path: "/",
    exact: true,
    main: () => <JobOffers />,
    browserTitle: "JobBank",
  },
  {
    path: "/publicaciones",
    exact: true,
    main: () => <h2>Mis Publicaciones</h2>,
    browserTitle: "Mis Publicaciones",
  },
];

export default routes;
