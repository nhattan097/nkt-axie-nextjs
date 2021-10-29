import {
  Text,
  Flex,
  HStack,
  Box,
  Badge,
  Image,
  Stack,
  Divider,
  Button,
  Center,
} from '@chakra-ui/react';

const Card = (props) => {
  const { id, name, image, attributes, axieClass, team, breedCount, text } =
    props;
  const attributeList = (score) => {
    let bg, color;

    if (score >= 70) {
      bg = 'rgba(179, 69, 64, 0.1)';
      color = '#B34540';
    } else if (score >= 60) {
      bg = 'rgba(98, 65, 187, 0.1)';
      color = '#6241BB';
    } else if (score >= 50) {
      bg = 'rgba(237, 174, 62, 0.1)';
      color = '#EDAE3E';
    } else {
      bg = 'rgba(69, 179, 107, 0.1)';
      color = '#65BE7F';
    }

    return (
      <Center
        borderRadius="lg"
        border="1px"
        borderColor={color}
        bg={bg}
        color={color}
        fontSize="xs"
        w="30px"
        h="30px"
      >
        {score}
      </Center>
    );
  };
  const getClass = (data) => {
    let color;

    switch (data) {
      case 'beast':
        color = 'yellow';
        break;

      case 'aquatic':
        color = 'teal';
        break;

      case 'plant':
        color = 'green';
        break;

      case 'bird':
        color = 'pink';
        break;

      case 'reptile':
        color = 'purple';
        break;

      case 'mech':
        color = 'gray';
        break;

      case 'dawn':
        color = 'green';
        break;

      case 'dusk':
        color = 'gray';
        break;

      default:
        color = 'yellow';
        break;
    }

    return color;
  };

  return (
    <Box p="6" bg="light" borderRadius="md">
      <Flex mb="24px">
        <Image w="120px" m="auto" alt={name} src={image} />
        <Box ml="5">
          <Badge
            mb="12px"
            fontSize="xs"
            lineHeight={1.7}
            fontWeight="light"
            borderRadius={4}
            w={70}
            bg={getClass(axieClass)}
            color="white"
            align="center"
          >
            {id}
          </Badge>
          <Text fontWeight="bold" fontSize="sm" mb="16px">
            {name}
          </Text>
          <HStack spacing="10px">
            {attributes.map((attr) => attributeList(attr))}
          </HStack>
        </Box>
      </Flex>
      <Divider mb="16px" />
      <Stack spacing="12px" mb="16px">
        <HStack justify="space-between">
          <Text fontSize="xs">Team</Text>
          <Text fontSize="xs">{team}</Text>
        </HStack>
        <HStack justify="space-between">
          <Text fontSize="xs">Breed Count</Text>
          <Text fontSize="xs">{breedCount}</Text>
        </HStack>
        <HStack justify="space-between">
          <Text fontSize="xs">Text</Text>
          <Text fontSize="xs">{text}</Text>
        </HStack>
      </Stack>
      <Divider mb="16px" />
      <Stack spacing="8px">
        <HStack justify="space-between">
          <Text fontSize="xs" color="secondaryText" w="33%">
            D
          </Text>
          <Text fontSize="xs" color="secondaryText" w="33%">
            R1
          </Text>
          <Text fontSize="xs" color="secondaryText" w="33%">
            R2
          </Text>
        </HStack>
        <HStack justify="space-between">
          <Text fontSize="xs" color="yellow" w="33%">
            Chubby
          </Text>
          <Text fontSize="xs" color="yellow" w="33%">
            Chubby
          </Text>
          <Text fontSize="xs" color="yellow" w="33%">
            Chubby
          </Text>
        </HStack>
        <Divider />
        <HStack justify="space-between">
          <Text fontSize="xs" color="yellow" w="33%">
            Nyan
          </Text>
          <Text fontSize="xs" color="yellow" w="33%">
            Nyan
          </Text>
          <Text fontSize="xs" color="yellow" w="33%">
            Nyan
          </Text>
        </HStack>
        <Divider />
        <HStack justify="space-between">
          <Text fontSize="xs" color="yellow" w="33%">
            Nut Cracker
          </Text>
          <Text fontSize="xs" color="yellow" w="33%">
            Goda
          </Text>
          <Text fontSize="xs" color="yellow" w="33%">
            Goda
          </Text>
        </HStack>
        <Divider />
        <HStack justify="space-between">
          <Text fontSize="xs" color="yellow" w="33%">
            Imp
          </Text>
          <Text fontSize="xs" color="yellow" w="33%">
            Imp
          </Text>
          <Text fontSize="xs" color="yellow" w="33%">
            Imp
          </Text>
        </HStack>
        <Divider />
        <HStack justify="space-between">
          <Text fontSize="xs" color="yellow" w="33%">
            Ronin
          </Text>
          <Text fontSize="xs" color="yellow" w="33%">
            Ronin
          </Text>
          <Text fontSize="xs" color="yellow" w="33%">
            Ronin
          </Text>
        </HStack>
        <Divider />
        <HStack justify="space-between">
          <Text fontSize="xs" color="yellow" w="33%">
            Cottontail
          </Text>
          <Text fontSize="xs" color="yellow" w="33%">
            Cottontail
          </Text>
          <Text fontSize="xs" color="yellow" w="33%">
            Cottontail
          </Text>
        </HStack>
      </Stack>
    </Box>
  );
};

export default Card;
