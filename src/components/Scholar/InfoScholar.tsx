import {
  Box,
  Text,
  HStack,
  VStack,
  Flex,
  Button,
  StackDivider,
  Divider,
} from '@chakra-ui/react';

import ParamAxie from '~/components/Scholar/ParamAxie';

const InfoScholar = () => {
  return (
    <Box>
      <Flex px="6" py="8" color="white" align="center" justify="space-between">
        <HStack fontSize="md" fontWeight="bold" spacing="4">
          <Text>No.2</Text>
          <Text>Jessie (G11)</Text>
        </HStack>
        <Text fontSize="xs" color="#FFFFFFCC">
          Faction K
        </Text>
      </Flex>
      <Box bg="white" borderRadius="3xl">
        <Box h="full">
          <VStack
            align="base"
            px="6"
            py="5"
            spacing={5}
            divider={<StackDivider borderColor="#E4E4E4" />}
          >
            <ParamAxie color="yellow" color_code="#FFAF13" />
            <ParamAxie color="blue" color_code="#00AFC7" />
            <ParamAxie color="green" color_code="#80BD39" />
          </VStack>
          <Divider />
          <VStack fontSize="sm" spacing={4} align="base" px="6" py="5">
            <Flex justify="space-between">
              <Text>Date of joining academy</Text>
              <Text>02-04-2021</Text>
            </Flex>
            <Flex justify="space-between">
              <Text>Total SLP generated</Text>
              <Text>195500</Text>
            </Flex>
            <Flex justify="space-between">
              <Text>Total SLP Paid</Text>
              <Text>102542</Text>
            </Flex>
            <Flex justify="space-between">
              <Text>Best average </Text>
              <Text>270</Text>
            </Flex>
            <Flex justify="space-between">
              <Text>Best MMR</Text>
              <Text>2300</Text>
            </Flex>
            <Flex justify="space-between">
              <Text>Current guild rank</Text>
              <Text>01</Text>
            </Flex>
            <Flex justify="space-between">
              <Text>Last month guild rank average</Text>
              <Text>05</Text>
            </Flex>
          </VStack>
          <Divider />
          <VStack fontSize="sm" spacing={4} align="base" px="6" py="5">
            <Flex justify="space-between">
              <Text>Discord ID</Text>
              <Text>#304044</Text>
            </Flex>
            <Flex justify="space-between">
              <Text>Name IRL</Text>
              <Text>Jessie Pinkman</Text>
            </Flex>
            <Flex justify="space-between">
              <Text>Contact infos</Text>
              <Text>+186 7441 3256</Text>
            </Flex>
          </VStack>
          <VStack align="base" px="6" py="5">
            <HStack spacing="4">
              <Button
                borderRadius="xl"
                h="14"
                border="1px"
                borderColor="primaryDark"
                flex="1"
                bg="transparent"
              >
                Delete
              </Button>
              <Button
                borderRadius="xl"
                h="14"
                color="white"
                bg="primaryDark"
                flex="1"
                _hover={{ color: 'primaryDark', bg: 'gray.200' }}
              >
                Edit
              </Button>
            </HStack>
          </VStack>
        </Box>
      </Box>
    </Box>
  );
};

export default InfoScholar;
