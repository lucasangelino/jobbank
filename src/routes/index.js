import * as React from "react";

// Components
import JobOffers from "../components/jobwall";
const routes = [
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
    path: "/postulaciones",
    exact: true,
    main: () => <h2>Postulaciones</h2>,
    browserTitle: "Mis Postulaciones",
  },
];

export default routes;
