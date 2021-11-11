import * as React from "react";
import {
  Grid,
  Container,
  GridItem,
  useBreakpointValue,
} from "@chakra-ui/react";

// Components
import JobCard from "../jobcard/";
import Navbar from "../navbar";
import UserInfo from "../userInfo/";

export default function JobOffers() {
  const [publicaciones, setPublicaciones] = React.useState([]);
  const isMobile = useBreakpointValue({ base: false, md: true });

  React.useEffect(() => {
    async function getPublicaciones() {
      const res = await fetch("http://localhost:8080/publicacion/all");
      const data = await res.json();
      setPublicaciones(data);
    }
    getPublicaciones();
  }, []);

  return (
    <>
      <Navbar />
      <Container maxW="container.xl" py={5}>
        <Grid
          h="200px"
          templateRows="repeat(2, 1fr)"
          templateColumns="repeat(5, 1fr)"
          gap={4}
        >
          {isMobile && (
            <GridItem rowSpan={2} colSpan={1} borderRadius={4}>
              <UserInfo />
            </GridItem>
          )}

          <GridItem colSpan={4} borderRadius={4} px={10}>
            <Container maxW="container.xl" centerContent>
              {publicaciones.map((job, index) => (
                <JobCard key={index} />
              ))}
            </Container>
          </GridItem>
        </Grid>
      </Container>
    </>
  );
}
