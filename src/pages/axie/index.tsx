import {
  Box,
  SimpleGrid,
  Text,
  HStack,
  VStack,
  Flex,
  Stack,
  Image,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Icon,
  Grid,
  Checkbox,
} from '@chakra-ui/react';
import { IoChevronDown, IoChevronUp } from 'react-icons/io5';

import CardBgTotal from '~/components/Dashboard/CardBgTotal';
import Layout from '~/components/Layout';
import { eggs } from '~/data/sample';
import tabs from '~/data/tabs';
import { Coin } from '~/interfaces/coin';
import TitleCard from '~/components/Dashboard/TitleCard';
import NumberCard from '~/components/Dashboard/NumberCard';

const TotalCard = ({ name, num }: { name: string; num: string }) => (
  <Box gridArea="total" bg="white" position="relative" borderRadius="2xl">
    <Image
      position="absolute"
      alt=""
      src="/svg/axie-bg-card.svg"
      borderRadius="2xl"
      h="100%"
      w="100%"
    />
    <Box pt="10" px="8" pb="5" h="full">
      <TitleCard>{name}</TitleCard>
      <NumberCard>{num}</NumberCard>
    </Box>
  </Box>
);

const EggCard = ({
  name,
  num,
  increase,
  hex,
  gridArea,
}: {
  name: string;
  num: string;
  increase: number;
  hex: string[];
  gridArea: string;
}) => (
  <Box gridArea={gridArea} bg="white" position="relative" borderRadius="2xl">
    <Box pt="10" px="8" pb="5" h="full">
      <TitleCard>{name}</TitleCard>

      <Flex align="center" justify="space-between">
        <HStack spacing="2" align="end">
          <NumberCard>{num}</NumberCard>
          {increase > 0 ? (
            <Text fontSize="sm" color="#45B36B" pb="1.5">
              +{increase}
            </Text>
          ) : (
            <Text fontSize="sm" color="red" pb="1.5">
              {increase}
            </Text>
          )}
        </HStack>

        <Stack direction={['column']}>
          {hex.map((h) => (
            <Text fontWeight="sm" color={h} key={h}>
              {h}
            </Text>
          ))}
        </Stack>
      </Flex>
    </Box>
  </Box>
);

const CLASS_FILTER = [
  'Beast',
  'Plant',
  'Mech',
  'Dusk',
  'Aquatic',
  'Bird',
  'Reptile',
  'Dawn',
];

const Filter = () => (
  <Grid
    h="605px"
    templateColumns="repeat(4, 1fr)"
    gap={6}
    gridArea="filter"
    bg="white"
    position="relative"
    borderRadius="2xl"
  >
    <Box pt="10" px="8" pb="5" borderRight="1px" borderColor="#E4E4E4">
      <Flex align="center" justify="space-between" mb="10">
        <Text fontSize="20px" fontWeight="bold">
          Filter
        </Text>
        <Text color="#25273499">Clear Filter</Text>
      </Flex>

      <Text color="#25273499" mb="5">
        Class
      </Text>

      <Box mb="10">
        {CLASS_FILTER.map((f) => (
          <Checkbox defaultIsChecked key={f}>
            {f}
          </Checkbox>
        ))}
      </Box>

      <Text color="#25273499" mb="10">
        Stage
      </Text>

      <Text color="#25273499" mb="10">
        Breed Count
      </Text>
    </Box>
    <Box pt="10" px="8" pb="10" colSpan={3}>
      <TitleCard>SLP average</TitleCard>
      <NumberCard mb="3">150</NumberCard>
      <Text color="#7C7D85" fontSize="sm">
        ~1,123.00 USD
      </Text>
    </Box>
  </Grid>
);

const Axie = () => {
  return (
    <Layout>
      <Stack direction="column" spacing="10">
        <Box>
          <Box>
            <Tabs>
              <Flex mb="6" justify="space-between" align="center">
                <TabList border="none" color="#B7B9BD">
                  {tabs.map((tab) => (
                    <Tab
                      key={tab.id}
                      _selected={{
                        color: 'primaryDark',
                        borderBottom: '4px',
                        borderColor: 'primaryDark',
                        boxShadow: 'none',
                      }}
                      fontSize="xl"
                      fontWeight="bold"
                    >
                      {tab.label}
                    </Tab>
                  ))}
                </TabList>
                <Menu>
                  {({ isOpen }) => (
                    <>
                      <MenuButton
                        as={Button}
                        h="36px"
                        bg="transparent"
                        borderRadius="base"
                        border="1px"
                        borderColor="#E4E4E4"
                        fontWeight="normal"
                        _focus={{ boxShadow: 'none', bg: 'none' }}
                        rightIcon={
                          <Icon as={isOpen ? IoChevronUp : IoChevronDown} />
                        }
                        maxWidth="138px"
                      >
                        Yesterday
                      </MenuButton>
                      <MenuList p="2" minWidth="138px">
                        <MenuItem minHeight="40px" borderRadius="md">
                          Yesterday
                        </MenuItem>
                        <MenuItem minHeight="40px" borderRadius="md">
                          Week
                        </MenuItem>
                        <MenuItem minHeight="40px" borderRadius="md">
                          Month
                        </MenuItem>
                      </MenuList>
                    </>
                  )}
                </Menu>
              </Flex>

              <TabPanels>
                <TabPanel p="none">
                  <Grid
                    gridTemplateColumns={{
                      base: '1fr 1fr 1fr',
                    }}
                    gridTemplateAreas={{
                      base: "'total egg ready_to_hatch' 'filter filter filter'",
                    }}
                    gap={4}
                    lineHeight="none"
                  >
                    <TotalCard name="Total" num="110" />
                    <EggCard
                      gridArea="egg"
                      name="Egg"
                      num="10"
                      increase={2}
                      hex={['#FFAF13', '#009FB5']}
                    />

                    <EggCard
                      gridArea="ready_to_hatch"
                      name="Ready to hatch"
                      num="3"
                      increase={1}
                      hex={['#00AFC7']}
                    />

                    <Filter />
                  </Grid>
                </TabPanel>

                <TabPanel>
                  <p>Faction K</p>
                </TabPanel>
                <TabPanel>
                  <p>Faction G</p>
                </TabPanel>
                <TabPanel>
                  <p>Faction D</p>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Box>
        </Box>
      </Stack>
    </Layout>
  );
};

export default Axie;
