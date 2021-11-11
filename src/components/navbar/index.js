import {
  Box,
  Flex,
  Avatar,
  HStack,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  Stack,
  useColorMode,
  Container,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import { useUser } from "../../hooks/useUser";

const Links = ["Home", "Postulaciones", "Empresa"];

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
              <IconButton
                size={"md"}
                icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                aria-label={"Open Menu"}
                display={{ md: "none" }}
                onClick={isOpen ? onClose : onOpen}
              />
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
                    <Link key={3} to={"/perfil"}>
                      {"Nueva Publicacion"}
                    </Link>
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
    </>
  );
}
