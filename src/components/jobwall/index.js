import { Grid, Container, GridItem } from "@chakra-ui/react";

// Components
import JobCard from "../jobcard/";
import UserInfo from "../userInfo/";

export default function JobOffers() {
  return (
    <Container maxW="container.xl" py={5}>
      <Grid
        h="200px"
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(5, 1fr)"
        gap={4}
      >
        <GridItem rowSpan={2} colSpan={1} borderRadius={4}>
          <UserInfo />
        </GridItem>

        <GridItem colSpan={4} borderRadius={4}>
          <Container maxW="container.xl" centerContent px={20}>
            {[1, 2, 3, 4, 5, 6, 7, 8].map((job, index) => (
              <JobCard key={index} />
            ))}
          </Container>
        </GridItem>
      </Grid>
    </Container>
  );
}
