import {
  Box,
  HStack,
  Text,
  Image,
  Button,
  Checkbox,
  Divider,
} from '@chakra-ui/react';
import Breed from '~/components/Axie/Breed';

const Filter = () => {
  const classes = [
    {
      name: 'Beast',
      value: 'beast',
      icon: '/img/fly.png',
    },
    {
      name: 'Aquatic',
      value: 'quatic',
      icon: '/img/fly.png',
    },
    {
      name: 'Plant',
      value: 'plant',
      icon: '/img/fly.png',
    },
    {
      name: 'Bird',
      value: 'bird',
      icon: '/img/fly.png',
    },
    {
      name: 'Reptile',
      value: 'reptile',
      icon: '/img/fly.png',
    },
    {
      name: 'Mech',
      value: 'mech',
      icon: '/img/fly.png',
    },
    {
      name: 'Dawn',
      value: 'dawn',
      icon: '/img/fly.png',
    },
    {
      name: 'Dusk',
      value: 'dusk',
      icon: '/img/fly.png',
    },
  ];
  const stages = [
    {
      name: 'Egg',
      value: 'egg',
    },
    {
      name: 'Adult',
      value: 'adult',
    },
    {
      name: 'Ready to hatch',
      value: 'hatch',
    },
  ];

  return (
    <Box bg="white" maxWidth={282} p="8" borderRight="1px solid #E4E4E4">
      <HStack justify="space-between" mb="24px">
        <Text color="primaryDark" fontWeight="bold" fontSize="xl">
          Filter
        </Text>
        <Button bg="transparent" fontSize="xs" color="secondaryText">
          Clean Filter
        </Button>
      </HStack>
      <Box mb="24px">
        <Text fontSize="xs" fontWeight="bold" color="secondaryText" mb="16px">
          Class
        </Text>
        {classes.map((item) => (
          <Checkbox key={item.name} size="lg" w="50%" mb="8px">
            <HStack>
              <Image src={item.icon} alt="" />
              <Text fontSize="sm">{item.name}</Text>
            </HStack>
          </Checkbox>
        ))}
      </Box>
      <Box mb="24px">
        <Text fontSize="xs" fontWeight="bold" color="secondaryText" mb="16px">
          Stage
        </Text>
        {stages.map((item) => (
          <Checkbox key={item.name} size="lg" w="50%" mb="8px">
            <Text fontSize="sm">{item.name}</Text>
          </Checkbox>
        ))}
      </Box>
      <Box>
        <Text fontSize="xs" fontWeight="bold" color="secondaryText" mb="16px">
          Breed
        </Text>
        <Breed />
      </Box>
    </Box>
  );
};

export default Filter;
