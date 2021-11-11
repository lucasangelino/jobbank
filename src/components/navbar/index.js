import * as React from "react";
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Modal,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorMode,
  Container,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Input,
  ModalFooter,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import { useUser } from "../../hooks/useUser";

export default function Navbar() {
  const { logout, is_company } = useUser();
  const [postulacion, setPostulacion] = React.useState({
    titulo: "",
    req1: "",
    req2: "",
  });

  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleLogout = () => {
    logout();
  };

  const handleChange = (e) => {
    setPostulacion({
      ...postulacion,
      [e.target.name]: e.target.value,
    });
  };

  const handleAgregar = async () => {
    const token = localStorage.getItem("token");
    const res = fetch("http://localhost:8080/publicacion/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(postulacion),
    });
    const data = await res.json();
    return data;
  };

  return (
    <>
      <Box>
        <Container maxW="full" bg={"white"}>
          <Box px={4}>
            <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
              {/* <IconButton
                size={"md"}
                icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                aria-label={"Open Menu"}
                display={{ md: "none" }}
                onClick={isOpen ? onClose : onOpen}
              /> */}
              <HStack spacing={8} alignItems={"center"}>
                <HStack
                  as={"nav"}
                  spacing={4}
                  display={{ base: "none", md: "flex" }}
                >
                  <Link key={1} to={"/"}>
                    {"Home"}
                  </Link>
                  <Link key={2} to={"/"}>
                    {"Postulaciones"}
                  </Link>
                  <Link key={3} to={"/perfil"}>
                    {"Perfil"}
                  </Link>
                  {is_company && (
                    <Button variant="link" onClick={onOpen}>
                      {"Nueva Publicacion"}
                    </Button>
                  )}
                </HStack>
              </HStack>
              <Flex alignItems={"center"}>
                <Menu>
                  <MenuButton
                    as={Button}
                    rounded={"full"}
                    variant={"link"}
                    cursor={"pointer"}
                    minW={0}
                    mr={4}
                  >
                    <Avatar
                      size={"sm"}
                      src={
                        "https://randomuser.me/api/portraits/thumb/men/75.jpg"
                      }
                    />
                  </MenuButton>
                  <MenuList>
                    <MenuItem>Ver perfil</MenuItem>
                    <MenuItem>Ver postulaciones</MenuItem>
                    <MenuDivider />
                    <MenuItem onClick={handleLogout}>Cerrar Sesion</MenuItem>
                  </MenuList>
                </Menu>
                <Button onClick={toggleColorMode}>
                  {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
                </Button>
              </Flex>
            </Flex>
          </Box>
        </Container>
      </Box>
      <Modal
        isCentered
        onClose={onClose}
        isOpen={isOpen}
        motionPreset="slideInBottom"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Agregar Publicacion</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Input
              name="name"
              mb={4}
              placeholder="Titulo"
              bg={"gray.100"}
              border={0}
              color={"gray.500"}
              _placeholder={{
                color: "gray.500",
              }}
              onChange={handleChange}
            />
            <Input
              name="req1"
              mb={4}
              placeholder="Requisito"
              bg={"gray.100"}
              border={0}
              color={"gray.500"}
              _placeholder={{
                color: "gray.500",
              }}
              onChange={handleChange}
            />
            <Input
              name="req2"
              mb={4}
              placeholder="Requisito"
              bg={"gray.100"}
              border={0}
              color={"gray.500"}
              _placeholder={{
                color: "gray.500",
              }}
              onChange={handleChange}
            />
          </ModalBody>
          <ModalFooter>
            <Button
              colorScheme="blue"
              variant="outline"
              mr={3}
              onClick={handleAgregar}
            >
              Agregrar
            </Button>
            <Button variant="ghost">Cancelar</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
