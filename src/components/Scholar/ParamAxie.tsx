import {
  Box,
  Text,
  HStack,
  Flex,
  Image,
  Spacer,
  Badge,
  Center,
} from '@chakra-ui/react';

const ParamAxie = ({ color, color_code }) => {
  return (
    <Flex>
      <HStack spacing="4">
        <Image w="64px" alt="" src={`/img/axie/axie-${color}.png`} />
        <Box>
          <Badge
            borderRadius="base"
            mb="2"
            bg={color_code}
            color="white"
            px="3"
            py="1.5"
            lineHeight="none"
          >
            #672920
          </Badge>
          <Text fontSize="xs" color="#7C7D85">
            Breed count: 2
          </Text>
        </Box>
      </HStack>
      <Spacer />
      <HStack>
        <Center
          borderRadius="lg"
          border="1px"
          borderColor="#65BE7F"
          bg="#45B26B1A"
          color="#65BE7F"
          fontSize="xs"
          w="30px"
          h="30px"
        >
          40
        </Center>
        <Center
          borderRadius="lg"
          border="1px"
          borderColor="#EDAE3E"
          bg="#EDAE3E1A"
          color="#EDAE3E"
          fontSize="xs"
          w="30px"
          h="30px"
        >
          56
        </Center>
        <Center
          borderRadius="lg"
          border="1px"
          borderColor="#6241BB"
          bg="#6241BB1A"
          color="#6241BB"
          fontSize="xs"
          w="30px"
          h="30px"
        >
          60
        </Center>
        <Center
          borderRadius="lg"
          border="1px"
          borderColor="#B34540"
          bg="#B345401A"
          color="#B34540"
          fontSize="xs"
          w="30px"
          h="30px"
        >
          90
        </Center>
      </HStack>
    </Flex>
  );
};

export default ParamAxie;
