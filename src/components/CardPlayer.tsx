import {
  Box,
  Flex,
  Text,
  Image,
  HStack,
  Badge,
  VStack,
} from '@chakra-ui/react';
import { Pet } from '~/interfaces/pet';

const CardPlayer = ({ name, no, server_name, pets }) => {
  return (
    <Box
      px="8"
      py="5"
      bg="secondDark"
      borderRadius="md"
      border="1px"
      borderColor="#585B67"
    >
      <VStack align="start">
        <Text textAlign="left" fontWeight="700" fontSize="md">
          {name}
        </Text>
        <Flex>
          <Text mr="2">{no}</Text>
          <Text mr="8">{server_name}</Text>
          <HStack spacing="3">
            {pets.map((pet: Pet) => (
              <Badge
                py="1"
                px="2"
                key={pet.id}
                display="flex"
                alignItems="center"
                bg={pet.color_code}
                color="white"
              >
                <Image mr="1" alt="" src={`/img/${pet.type}.png`} /> {pet.id}
              </Badge>
            ))}
          </HStack>
        </Flex>
      </VStack>
    </Box>
  );
};

export default CardPlayer;
