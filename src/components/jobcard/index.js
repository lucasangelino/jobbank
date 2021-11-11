import { Box, Button } from "@chakra-ui/react";
import {
  VStack,
  Heading,
  Text,
  AspectRatio,
  Stack,
  Divider,
  Flex,
  Badge,
} from "@chakra-ui/layout";
import { Image } from "@chakra-ui/image";
import { HamburgerIcon } from "@chakra-ui/icons";

export default function JobCard({ job }) {
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
        divider={<Divider borderColor="gray.300" />}
      >
        <EmployerDescription title={job.company_title} time={job.date} />
        <JobDescription description={job.description} JobReq={job.requisitos} />
        {job.postulado ? (
          <Text>Postulado</Text>
        ) : (
          <ActionButtons isOpen={job.is_open} />
        )}
      </VStack>
    </Box>
  );
}

const EmployerDescription = ({ title, time }) => {
  return (
    <Stack spacing={0} w="full" direction="row" justifyContent="space-between">
      <Flex>
        <CompanyImage />
        <Box ml="3">
          <CompanyName title={title} />
          <JobPostedTime time={time} />
        </Box>
      </Flex>
      <HamburgerIcon w={4} h={4} />
    </Stack>
  );
};

const CompanyName = ({ title }) => {
  return (
    <Heading as="h2" size="md">
      {title}
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

const JobPostedTime = ({ time }) => {
  return <Text fontSize="xs">{time}</Text>;
};

const JobDescription = ({ description, JobReq }) => {
  return (
    <Box my={5}>
      <JobIntroduction intro={description} />
      <JobRequirements req={JobReq} />
    </Box>
  );
};

const JobIntroduction = ({ intro }) => {
  return (
    <Text fontSize="md" mb={5} textAlign={"left"}>
      {intro}
    </Text>
  );
};

const JobRequirements = ({ req }) => {
  return (
    <>
      <Heading as="h3" size="md" mb={4}>
        Requisitos:
      </Heading>
      {req.map((item) => {
        return (
          <Badge variant="solid" colorScheme="green" p={1} mx={1}>
            {item}
          </Badge>
        );
      })}
    </>
  );
};

const ActionButtons = ({ isOpen }) => {
  return (
    <Stack mt={2} w="full" direction="row" justifyContent="flex-end">
      <Button
        colorScheme={isOpen ? "blue" : "red"}
        size="md"
        variant={isOpen ? "outline" : ""}
        isDisabled={!isOpen}
      >
        {isOpen ? "Postularse" : "Cerrado"}
      </Button>
    </Stack>
  );
};
