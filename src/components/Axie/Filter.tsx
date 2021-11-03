import {
  Box,
  HStack,
  Text,
  Image,
  Button,
  Checkbox,
  VStack,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  FormControl,
  FormLabel,
  Icon,
  Stack,
} from '@chakra-ui/react';
import { IoChevronDown, IoChevronUp } from 'react-icons/io5';

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
    <Stack
      spacing="6"
      bg="white"
      maxWidth={282}
      p="8"
      borderRight="1px solid #E4E4E4"
      direction="column"
    >
      <HStack justify="space-between">
        <Text color="primaryDark" fontWeight="bold" fontSize="xl">
          Filter
        </Text>
        <Button bg="transparent" fontSize="xs" color="secondaryText">
          Clean Filter
        </Button>
      </HStack>
      <VStack spacing="6">
        <FormControl id="email">
          <FormLabel fontSize="xs" fontWeight="bold" color="secondaryText">
            Manager
          </FormLabel>
          <Menu>
            {({ isOpen }) => (
              <>
                <MenuButton
                  as={Button}
                  w="full"
                  h="48px"
                  borderRadius="lg"
                  fontWeight="normal"
                  fontSize="sm"
                  _focus={{ boxShadow: 'none' }}
                  bg="primaryLight"
                  textAlign="left"
                  rightIcon={<Icon as={isOpen ? IoChevronUp : IoChevronDown} />}
                >
                  Select a Manager
                </MenuButton>
                <MenuList fontSize="sm" p="2" w="full">
                  <MenuItem minHeight="40px" borderRadius="md">
                    Faction K
                  </MenuItem>
                  <MenuItem minHeight="40px" borderRadius="md">
                    Faction G
                  </MenuItem>
                  <MenuItem minHeight="40px" borderRadius="md">
                    Faction H
                  </MenuItem>
                </MenuList>
              </>
            )}
          </Menu>
        </FormControl>
        <FormControl id="email">
          <FormLabel fontSize="xs" fontWeight="bold" color="secondaryText">
            Owner
          </FormLabel>
          <Menu>
            {({ isOpen }) => (
              <>
                <MenuButton
                  as={Button}
                  w="full"
                  h="48px"
                  borderRadius="lg"
                  fontWeight="normal"
                  fontSize="sm"
                  _focus={{ boxShadow: 'none' }}
                  bg="primaryLight"
                  textAlign="left"
                  rightIcon={<Icon as={isOpen ? IoChevronUp : IoChevronDown} />}
                >
                  Select a Owner
                </MenuButton>
                <MenuList fontSize="sm" p="2" w="full">
                  <MenuItem minHeight="40px" borderRadius="md">
                    Investor A
                  </MenuItem>
                  <MenuItem minHeight="40px" borderRadius="md">
                    Investor B
                  </MenuItem>
                  <MenuItem minHeight="40px" borderRadius="md">
                    None
                  </MenuItem>
                </MenuList>
              </>
            )}
          </Menu>
        </FormControl>
      </VStack>
      <Box>
        <Text fontSize="xs" fontWeight="bold" color="secondaryText" mb="2">
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
      <Box>
        <Text fontSize="xs" fontWeight="bold" color="secondaryText" mb="2">
          Stage
        </Text>
        {stages.map((item) => (
          <Checkbox key={item.name} size="lg" w="50%" mb="8px">
            <Text fontSize="sm">{item.name}</Text>
          </Checkbox>
        ))}
      </Box>
      <Box>
        <Text fontSize="xs" fontWeight="bold" color="secondaryText" mb="2">
          Breed
        </Text>
        <Breed />
      </Box>
    </Stack>
  );
};

export default Filter;
