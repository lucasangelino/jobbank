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
  Lorem,
  ModalFooter,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import { useUser } from "../../hooks/useUser";

export default function Navbar() {
  const { logout, is_company } = useUser();

  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleLogout = () => {
    logout();
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
          <ModalBody></ModalBody>
          <ModalFooter>
            <Button
              colorScheme="blue"
              variant="outline"
              mr={3}
              onClick={onClose}
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
