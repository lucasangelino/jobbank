import { useCallback, useState } from "react";
import {
  Box,
  Heading,
  Text,
  Stack,
  Container,
  Input,
  Button,
  SimpleGrid,
  Icon,
  useBreakpointValue,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <Box position={"relative"}>
      <Container
        as={SimpleGrid}
        maxW={"7xl"}
        columns={{ base: 1, md: 2 }}
        spacing={{ base: 10, lg: 32 }}
        py={{ base: 10, sm: 20, lg: 32 }}
      >
        <Stack spacing={{ base: 10, md: 20 }}>
          <Heading
            lineHeight={1.1}
            fontSize={{ base: "3xl", sm: "4xl", md: "5xl", lg: "6xl" }}
          >
            Encuentra trabajo con{" "}
            <Text
              as={"span"}
              bgGradient="linear(to-r, red.400,pink.400)"
              bgClip="text"
            >
              JobBank
            </Text>{" "}
            <Text fontSize="3xl" mt="10">
              Mas de mil ofertas te están esperando
            </Text>
          </Heading>
          <Stack direction={"row"} spacing={4} align={"center"}>
            <Text
              fontFamily={"heading"}
              fontSize={{ base: "4xl", md: "6xl" }}
            ></Text>
          </Stack>
        </Stack>
        <LoginForm />
      </Container>
      <Blur
        position={"absolute"}
        top={-10}
        left={-10}
        style={{ filter: "blur(70px)" }}
      />
    </Box>
  );
}

export const Blur = (props) => {
  return (
    <Icon
      width={useBreakpointValue({ base: "100%", md: "40vw", lg: "30vw" })}
      zIndex={useBreakpointValue({ base: -1, md: -1, lg: 0 })}
      height="560px"
      viewBox="0 0 528 560"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="71" cy="61" r="111" fill="#F56565" />
      <circle cx="244" cy="106" r="139" fill="#ED64A6" />
      <circle cy="291" r="139" fill="#ED64A6" />
      <circle cx="80.5" cy="189.5" r="101.5" fill="#ED8936" />
      <circle cx="196.5" cy="317.5" r="101.5" fill="#ECC94B" />
      <circle cx="70.5" cy="458.5" r="101.5" fill="#48BB78" />
      <circle cx="426.5" cy="-0.5" r="101.5" fill="#4299E1" />
    </Icon>
  );
};

const LoginForm = () => {
  const [login, setLogin] = useState({
    user: "",
    password: "",
  });

  const handleInputchange = (e) => {
    setLogin({
      ...login,
      [e.target.name]: e.target.value,
    });
  };

  const handleLoginClick = () => {
    console.log(login);
  };

  return (
    <Stack
      bg={"gray.50"}
      rounded={"xl"}
      p={{ base: 4, sm: 6, md: 8 }}
      spacing={{ base: 8 }}
      maxW={{ lg: "lg" }}
    >
      <Stack spacing={4}>
        <Heading
          color={"gray.800"}
          lineHeight={1.1}
          fontSize={{ base: "2xl", sm: "3xl", md: "4xl" }}
        >
          Inicia sesión
        </Heading>
        <Text color={"gray.500"} fontSize={{ base: "sm", sm: "md" }}></Text>
      </Stack>
      <Box as={"form"} mt={10}>
        <Stack spacing={4}>
          <Input
            name="user"
            placeholder="Grupo 9"
            bg={"gray.100"}
            border={0}
            color={"gray.500"}
            _placeholder={{
              color: "gray.500",
            }}
            onChange={handleInputchange}
          />
          <Input
            name="password"
            placeholder="Contraseña"
            bg={"gray.100"}
            border={0}
            color={"gray.500"}
            _placeholder={{
              color: "gray.500",
            }}
            onChange={handleInputchange}
          />
        </Stack>
        <Button
          fontFamily={"heading"}
          mt={8}
          mb={4}
          w={"full"}
          bgGradient="linear(to-r, red.400,pink.400)"
          color={"white"}
          _hover={{
            bgGradient: "linear(to-r, red.400,pink.400)",
            boxShadow: "xl",
          }}
          onClick={handleLoginClick}
        >
          Login
        </Button>
        <Link to="/register">o Registrate</Link>
      </Box>
    </Stack>
  );
};
export default Login;
