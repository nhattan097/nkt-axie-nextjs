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
} from '@chakra-ui/react';
import { IoChevronDown, IoChevronUp } from 'react-icons/io5';

import CardCoin from '~/components/Dashboard/CardCoin';
import CardBgTotal from '~/components/Dashboard/CardBgTotal';
import Layout from '~/components/Layout';
import { coins } from '~/data/sample';
import tabs from '~/data/tabs';
import { Coin } from '~/interfaces/coin';
import TitleCard from '~/components/Dashboard/TitleCard';
import NumberCard from '~/components/Dashboard/NumberCard';

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
                    gridTemplateRows={{
                      base: '1fr 1fr',
                    }}
                    gridTemplateAreas={{
                      base: `'total scholar slp_average' 'total top_5 worst_5'`,
                    }}
                    gap={4}
                    lineHeight="none"
                  >
                    <CardBgTotal
                      borderRadius="2xl"
                      h="416px"
                      gridArea="total"
                      bg="primaryDark"
                      px="8"
                      pt="16"
                      pb="10"
                      position="relative"
                    >
                      <Flex h="full" direction="column" justify="space-between">
                        <Box>
                          <TitleCard>Total SLP</TitleCard>
                          <NumberCard mb="3" color="white">
                            1,234.00
                          </NumberCard>
                          <Text color="#D3D4D6" fontSize="sm">
                            ~1,123.00 USD
                          </Text>
                        </Box>
                        <Stack spacing="3">
                          <Text color="#2BB596" fontSize="sm">
                            + 234.00 USD
                          </Text>
                          <Text color="#2BB596" fontSize="sm">
                            ↑ 39.69%
                          </Text>
                        </Stack>
                      </Flex>
                    </CardBgTotal>
                    <Box
                      gridArea="scholar"
                      bg="white"
                      position="relative"
                      borderRadius="2xl"
                    >
                      <Image
                        position="absolute"
                        alt=""
                        src="/svg/mask-profile.svg"
                        borderRadius="2xl"
                        h="100%"
                      />
                      <Box pt="10" px="8" pb="5" h="full">
                        <TitleCard>Scholar</TitleCard>
                        <NumberCard>101</NumberCard>
                      </Box>
                    </Box>
                    <Box
                      gridArea="slp_average"
                      bg="white"
                      position="relative"
                      borderRadius="2xl"
                    >
                      <Image
                        position="absolute"
                        alt=""
                        src="/svg/mask-coin.svg"
                        borderRadius="2xl"
                        h="100%"
                      />
                      <Box pt="10" px="8" pb="5" h="full">
                        <TitleCard>SLP average</TitleCard>
                        <NumberCard mb="3">150</NumberCard>
                        <Text color="#7C7D85" fontSize="sm">
                          ~1,123.00 USD
                        </Text>
                      </Box>
                    </Box>
                    <Box borderRadius="2xl" gridArea="top_5" bg="white">
                      <Box pt="10" px="8" pb="5" h="full">
                        <TitleCard>Top 5 average</TitleCard>
                        <Flex justify="space-between">
                          <Box>
                            <NumberCard mb="3">210</NumberCard>
                            <Text color="#7C7D85" fontSize="sm">
                              ~1,123.00 USD
                            </Text>
                          </Box>
                          <Box>
                            <VStack align="flex-end" spacing="1">
                              <Text fontSize="xs" color="#7C7D85">
                                Adrian (G01)
                              </Text>
                              <Text fontSize="xs" color="#7C7D85">
                                Jaycee (G02)
                              </Text>
                              <Text fontSize="xs" color="#7C7D85">
                                Mich (G03)
                              </Text>
                              <Text fontSize="xs" color="#7C7D85">
                                Charlene (G04)
                              </Text>
                            </VStack>
                          </Box>
                        </Flex>
                      </Box>
                    </Box>
                    <Box borderRadius="2xl" gridArea="worst_5" bg="white">
                      <Box pt="10" px="8" pb="5" h="full">
                        <TitleCard>Worst 5 average</TitleCard>
                        <Flex justify="space-between">
                          <Box>
                            <NumberCard mb="3">75</NumberCard>
                            <Text color="#7C7D85" fontSize="sm">
                              ~1,123.00 USD
                            </Text>
                          </Box>
                          <Box>
                            <VStack align="flex-end" spacing="1">
                              <Text fontSize="xs" color="#7C7D85">
                                Noel (G37)
                              </Text>
                              <Text fontSize="xs" color="#7C7D85">
                                Enxzow (G38)
                              </Text>
                              <Text fontSize="xs" color="#7C7D85">
                                Meraki (G39)
                              </Text>
                              <Text fontSize="xs" color="#7C7D85">
                                Jiger (G40)
                              </Text>
                              <Text fontSize="xs" color="#7C7D85">
                                Nelie (G41)
                              </Text>
                            </VStack>
                          </Box>
                        </Flex>
                      </Box>
                    </Box>
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
