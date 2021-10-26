import {
  Box,
  SimpleGrid,
  Text,
  HStack,
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
} from '@chakra-ui/react';
import { IoChevronDown, IoChevronUp } from 'react-icons/io5';

import CardCoin from '~/components/CardCoin';
import Layout from '~/components/Layout';
import { coins } from '~/data/sample';
import tabs from '~/data/tabs';
import { Coin } from '~/interfaces/coin';

const Dashboard = () => {
  return (
    <Layout>
      <Stack direction="column" spacing="10">
        <SimpleGrid spacing="6" columns={3}>
          {coins.map((coin: Coin) => (
            <CardCoin key={coin.id} {...coin} />
          ))}
        </SimpleGrid>
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
                      base: `'total scholar slp_average' 'total top_5 worst_5'`,
                    }}
                    gap={4}
                  >
                    <Box
                      borderRadius="2xl"
                      h="416px"
                      gridArea="total"
                      bg="primaryDark"
                    ></Box>
                    <Box borderRadius="2xl" gridArea="scholar" bg="white"></Box>
                    <Box
                      borderRadius="2xl"
                      gridArea="slp_average"
                      bg="white"
                    ></Box>
                    <Box borderRadius="2xl" gridArea="top_5" bg="white"></Box>
                    <Box borderRadius="2xl" gridArea="worst_5" bg="white"></Box>
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

export default Dashboard;
