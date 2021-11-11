import * as React from "react";

// Components
import JobOffers from "../components/jobwall";
import Login from "../components/auth/Login";
import Register from "../components/auth/Register";
import Profile from "../components/profile";
import MisPostulaciones from "../components/postulaciones";

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
  {
    path: "/profile",
    exact: true,
    main: () => <Profile />,
    browserTitle: "Mis Publicaciones",
  },
  {
    path: "/postulaciones",
    exact: true,
    main: () => <MisPostulaciones />,
    browserTitle: "Mis Publicaciones",
  },
];

export default routes;
