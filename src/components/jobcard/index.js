import { Box, Button } from "@chakra-ui/react";
import {
  VStack,
  Heading,
  Text,
  AspectRatio,
  Stack,
  Divider,
  Flex,
} from "@chakra-ui/layout";
import { Image } from "@chakra-ui/image";
import { EditIcon } from "@chakra-ui/icons";

export default function JobCard() {
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
        <EmployerDescription />
        <JobDescription />
        <ActionButtons />
      </VStack>
    </Box>
  );
}

const EmployerDescription = () => {
  return (
    <Stack spacing={0} w="full" direction="row" justifyContent="space-between">
      <Flex>
        <CompanyImage />
        <Box ml="3">
          <CompanyName />
          <JobPostedTime />
        </Box>
      </Flex>
      <EditIcon w={4} h={4} />
    </Stack>
  );
};

const CompanyName = () => {
  return (
    <Heading as="h2" size="md">
      Unilever
    </Heading>
  );
};

const CompanyImage = () => {
  return (
    <AspectRatio ratio={1} w={12}>
      <Image
        src={
          "https://media-exp1.licdn.com/dms/image/C4D0BAQEnq3lrhLlPFg/company-logo_100_100/0/1635930750004?e=1643846400&v=beta&t=A7zqDc_eMsx-VLL0AoktdlUv-1vpCUhEygpUDRl6IGw"
        }
        title="article"
        alt="article"
      />
    </AspectRatio>
  );
};

const JobPostedTime = () => {
  return <Text fontSize="xs">hace 5 horas</Text>;
};

const JobDescription = () => {
  return (
    <Box my={5}>
      <JobIntroduction />
      <JobRequirements />
    </Box>
  );
};

const JobIntroduction = () => {
  return (
    <Text fontSize="md" mb={5}>
      At Unilever, we are pioneering the Future of Work. Our Flex Experiences
      platform is enabling employees to work on projects across our entire
      organisation, that are aligned with their purpose and help them develop
      new skills and experiences.
    </Text>
  );
};

const JobRequirements = () => {
  return (
    <>
      <Heading as="h3" size="md">
        Requisitos:
      </Heading>
      <Text fontSize="md" fontWeight={"light"}>
        React
      </Text>
      <Text fontSize="md" fontWeight={"light"}>
        Node
      </Text>
      <Text fontSize="md" fontWeight={"light"}>
        Ingles avanzado (excluyente)
      </Text>
    </>
  );
};

const ActionButtons = () => {
  return (
    <Stack mt={2} w="full" direction="row" justifyContent="flex-end">
      <Button colorScheme="blue" size="md">
        Postularse
      </Button>
    </Stack>
  );
};
