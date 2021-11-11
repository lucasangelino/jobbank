import { Text } from "@chakra-ui/layout";
import * as React from "react";
import Navbar from "../navbar";
import JobCard from "../jobcard/";

export default function MisPostulaciones() {
  const [postulaciones, setPostulaciones] = React.useState([]);
  React.useEffect(() => {
    async function getPostulaciones() {
      const res = await fetch("http://localhost:8080/publicacion/");
      const postulaciones = await res.json();
      setPostulaciones(postulaciones);
    }
    getPostulaciones();
  }, []);

  return (
    <>
      <Navbar />
      <Text fontSize="4xl" mt={10}>
        Mis Postulaciones
      </Text>
      {postulaciones.map((postulacion) => (
        <JobCard job={postulacion} isPosted={postulacion.postulado} />
      ))}
    </>
  );
}
