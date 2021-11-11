import * as React from "react";

import {
  Box,
  Flex,
  Avatar,
  Text,
  HStack,
  Button,
  Modal,
  useDisclosure,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Input,
  ModalFooter,
} from "@chakra-ui/react";
import { VStack, Divider } from "@chakra-ui/layout";
import { useUser } from "../../hooks/useUser";

export default function UserInfo() {
  const [intereses, setIntereses] = React.useState([]);
  const [newInteres, setNewInteres] = React.useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { is_empresa, user_name } = useUser();

  const addInteres = async () => {
    const token = localStorage.getItem("token");
    const response = await fetch(
      "http://localhost:8080/postulante/interes/add",
      {
        method: "POST",
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(intereses),
      }
    );
    const parsedResponse = await response.json();
  };

  const handleChange = (e) => {
    setNewInteres({
      ...newInteres,
      [e.target.name]: e.target.value,
    });
  };

  const handleAgregar = () => {
    console.log(newInteres);
    setIntereses([...intereses, Object.values(newInteres)]);
    onClose();
  };

  return (
    <>
      <Box
        w={"full"}
        rounded={"lg"}
        p={1}
        m={5}
        bg={"white"}
        border="2px"
        borderColor="#E0DFDC"
      >
        <VStack
          w="full"
          h="full"
          p={2}
          alignContent="space-between"
          divider={<Divider borderColor="gray.100" />}
        >
          <Avatar
            size={"lg"}
            src={"https://randomuser.me/api/portraits/thumb/men/75.jpg"}
          />
          <Flex flexDirection={"column"} alignItems="center">
            <Text fontSize={20} fontWeight={"bold"}>
              {user_name}
            </Text>
            <Text fontSize={15}>Software Developer</Text>
          </Flex>
          <HStack justifyContent="space-between" w="full">
            <Text fontSize={"xs"} color="gray.500">
              Quien ha visto tu perfil?
            </Text>
            <Text fontSize={"xs"} color="brand.800">
              90
            </Text>
          </HStack>

          <HStack justifyContent="space-between" w="full">
            <Text fontSize={"xs"} color="gray.500">
              Amplia tu red de contactos
            </Text>
            <Text fontSize={"xs"} color="brand.800">
              500+
            </Text>
          </HStack>
          {!is_empresa ? null : (
            <HStack justifyContent="space-between" w="full">
              <Button onClick={onOpen}>
                <Text fontSize={"xs"} color="blue.500">
                  Agregar Intereses
                </Text>
              </Button>
            </HStack>
          )}
        </VStack>
        <HStack justifyContent="space-between" w="full">
          {intereses.map((interes) => (
            <Text fontSize={"xs"} color="gray.500">
              {interes}
            </Text>
          ))}
        </HStack>
      </Box>
      <Modal
        isCentered
        onClose={onClose}
        isOpen={isOpen}
        motionPreset="slideInBottom"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Agregar Interes</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Input
              name="interes1"
              mb={4}
              placeholder="Escribe un Interes"
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
