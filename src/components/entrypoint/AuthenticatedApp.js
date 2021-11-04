import * as React from "react";
import { Routes, Route } from "react-router-dom";

// Components
import View from "../layout/View";
import Layout from "../layout/Layout";

// routes
import routes from "../../routes/";
export default function AuthenticatedApp() {
  return (
    <div>
      <Layout />
      <Routes>
        {routes.map((route, index) => {
          const { path, main, exact, title } = route;
          return (
            <Route
              key={index}
              path={path}
              exact={exact}
              element={<View component={main} title={title} />}
            />
          );
        })}
      </Routes>
    </div>
  );
}
