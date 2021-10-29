import {
  Box,
  SimpleGrid,
  Text,
  HStack,
  Flex,
  Stack,
  Image,
  Button,
  Icon,
  Grid,
  Checkbox
} from '@chakra-ui/react';
import Layout from '~/components/Layout';
import Card from '~/components/Axie/Card';

const Axie = () => {
  const items = [
    {
      id: '#210520',
      name: 'Rimp Beast',
      image: '/img/axie/axie-yellow.png',
      attributes: [40, 56, 60, 90],
      team: 'Jamac(K01)',
      breedCount: '4/7',
      text: 100,
      axieClass: 'beast',
      stage: 1
    },
    {
      id: '#210520',
      name: 'TC #544426',
      image: '/img/axie/axie-blue.png',
      attributes: [40, 56, 60, 90],
      team: 'Jamac(K01)',
      breedCount: '4/7',
      text: 100,
      axieClass: 'aquatic',
      stage: 1
    }
  ];
  const classes = [
    {
      name: 'Beast',
      value: 'beast',
      icon: '/img/fly.png'
    },
    {
      name: 'Aquatic',
      value: 'quatic',
      icon: '/img/fly.png'
    },
    {
      name: 'Plant',
      value: 'plant',
      icon: '/img/fly.png'
    },
    {
      name: 'Bird',
      value: 'bird',
      icon: '/img/fly.png'
    },
    {
      name: 'Reptile',
      value: 'reptile',
      icon: '/img/fly.png'
    },
    {
      name: 'Mech',
      value: 'mech',
      icon: '/img/fly.png'
    },
    {
      name: 'Dawn',
      value: 'dawn',
      icon: '/img/fly.png'
    },
    {
      name: 'Dusk',
      value: 'dusk',
      icon: '/img/fly.png'
    }
  ];
  const stages = [
    {
      name: 'Egg',
      value: 'egg'
    },
    {
      name: 'Adult',
      value: 'adult'
    },
    {
      name: 'Ready to hatch',
      value: 'hatch'
    }
  ];

  return (
    <Layout>
      <SimpleGrid spacing="6" columns={3} mb="24px">
        <Box bg="white" px={8} py={6} borderRadius="16px">
          <Text fontSize="xs" fontWeight="bold" color="secondaryText" mb="24px">
            Total
          </Text>
          <Stack justify="space-between" direction="row" align="flex-end">
            <Text fontSize="5xl" fontWeight="bold" lineHeight={1}>
              101
            </Text>
          </Stack>
        </Box>
        <Box bg="white" px={8} py={6} borderRadius="16px">
          <Text fontSize="xs" fontWeight="bold" color="secondaryText" mb="24px">
            Egg
          </Text>
          <Stack justify="space-between" direction="row" align="flex-end">
            <Text fontSize="5xl" fontWeight="bold" lineHeight={1}>
              10
            </Text>
            <Stack>
              <Text fontSize="xs" color="yellow">#210520</Text>
            </Stack>
          </Stack>
        </Box>
        <Box bg="white" px={8} py={6} borderRadius="16px">
          <Text fontSize="xs" fontWeight="bold" color="secondaryText" mb="24px">
            Ready to hatch
          </Text>
          <Stack justify="space-between" direction="row" align="flex-end">
            <Text fontSize="5xl" fontWeight="bold" lineHeight={1}>
              3
            </Text>
            <Stack>
              <Text fontSize="xs" color="yellow">#210520</Text>
            </Stack>
          </Stack>
        </Box>
      </SimpleGrid>
      <Flex
        bg="white"
        borderRadius="3xl"
      >
        <Box
          bg="white"
          maxWidth={282}
          p="8"
          borderRight="1px solid #E4E4E4"
        >
          <HStack justify="space-between" mb="24px">
            <Text
              color="primaryDark"
              fontWeight="bold"
              fontSize="xl"
            >
              Filter
            </Text>
            <Button
              bg="transparent"
              fontSize="xs"
              color="secondaryText"
            >
              Clean Filter
            </Button>
          </HStack>
          <Box mb="24px">
            <Text
              fontSize="xs"
              fontWeight="bold"
              color="secondaryText"
              mb="16px"
            >
              Class
            </Text>
            {
              classes.map(item => (
                <Checkbox
                  key={item.name}
                  colorScheme="blackAlpha"
                  size="lg"
                  w="50%"
                  mb="8px"
                >
                  <HStack>
                    <Image src={item.icon} />
                    <Text fontSize="sm">{item.name}</Text>
                  </HStack>
                </Checkbox>
              ))
            }
          </Box>
          <Box>
            <Text
              fontSize="xs"
              fontWeight="bold"
              color="secondaryText"
              mb="16px"
            >
              Stage
            </Text>
            {
              stages.map(item => (
                <Checkbox
                  key={item.name}
                  colorScheme="blackAlpha"
                  size="lg"
                  w="50%"
                  mb="8px"
                >
                  <Text fontSize="sm">{item.name}</Text>
                </Checkbox>
              ))
            }
          </Box>
        </Box>
        <SimpleGrid spacing="6" p="8" columns={2}>
          {
            items.map(item => (
              <Card key={item.id} {...item} />
            ))
          }
        </SimpleGrid>
      </Flex>
    </Layout>
  );
};

export default Axie;
