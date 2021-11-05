import { Box } from "@chakra-ui/react";
import { VStack, Divider } from "@chakra-ui/layout";

export default function UserInfo() {
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
        divider={<Divider borderColor="brand.800" />}
      >
        <div>
          <h3>Lucas Angelino</h3>
          <h5>Software Developer</h5>
        </div>
      </VStack>
    </Box>
  );
}
