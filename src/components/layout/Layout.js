import { Container } from "@chakra-ui/layout";
import Navbar from "../navbar/";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <Container maxW="container.xl">{children}</Container>
    </>
  );
}
