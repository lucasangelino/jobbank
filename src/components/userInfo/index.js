import { Box, Flex, Avatar, Text, HStack, Button } from "@chakra-ui/react";
import { VStack, Divider } from "@chakra-ui/layout";

export default function UserInfo() {
  const addInteres = () => {
    console.log("addInteres");
  };

  return (
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
            Lucas Angelino
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

        <HStack justifyContent="space-between" w="full">
          <Button onClick={addInteres}>
            <Text fontSize={"xs"} color="blue.500">
              Agregar Intereses
            </Text>
          </Button>
        </HStack>
      </VStack>
    </Box>
  );
}
