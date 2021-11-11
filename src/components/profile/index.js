import * as React from "react";

import { Text } from "@chakra-ui/layout";
import Layout from "../layout/Layout";
import Navbar from "../navbar";
import { useUser } from "../../hooks/useUser";

export default function Profile() {
  const [profile, setProfile] = React.useState(null);
  const { is_empresa, id } = useUser();

  React.useEffect(() => {
    async function getPrefil() {
      const token = await localStorage.getItem("token");
      const res = await fetch(
        `http://localhost:8080/${is_empresa ? "empresa" : "postulante"}/${id}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = await res.json();
      setProfile(data);
    }
    getPrefil();
  }, []);

  console.log(profile);

  return (
    <>
      <Navbar />
      <Layout>
        <Text mt={10}>Mi Perfil</Text>
      </Layout>
    </>
  );
}
