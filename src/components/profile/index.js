import * as React from "react";

import { Text } from "@chakra-ui/layout";
import Layout from "../layout/Layout";
import Navbar from "../navbar";
import { useUser } from "../../hooks/useUser";

export default function Profile() {
  const [profile, setProfile] = React.useState(null);
  const { is_empresa, id } = useUser();

  React.useEffect(() => {
    function getPrefil() {
      const token = localStorage.getItem("token");
      const res = fetch(
        `http://localhost:8080/${is_empresa ? "empresa" : "postulante"}/${id}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = res.json();
      setProfile(data);
    }
    getPrefil();
  }, []);

  console.log(profile);

  return (
    <>
      <Navbar />
      <Layout>
        <Text>Datos empresa</Text>
      </Layout>
    </>
  );
}
