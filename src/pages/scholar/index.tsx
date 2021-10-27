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
  Table,
  TableCaption,
  Thead,
  Tbody,
  Th,
  Td,
  Tr,
  Tfoot,
} from '@chakra-ui/react';
import { IoChevronBack, IoChevronForward } from 'react-icons/io5';

import Layout from '~/components/Layout';
import { data_table } from '~/data/sample';
import tabs from '~/data/tabs';

const Scholar = () => {
  return (
    <Layout>
      <Grid
        gridTemplateColumns={{
          base: '62% 38%',
        }}
        columnGap="6"
        h="100vh"
        spacing="6"
      >
        <Box p="8" bg="white" borderRadius="3xl">
          <Tabs>
            <Flex mb="6" justify="space-between" align="center">
              <TabList border="none" color="#B7B9BD">
                <HStack spacing="6">
                  {tabs.map((tab) => (
                    <Tab
                      key={tab.id}
                      _selected={{
                        color: 'primaryDark',
                        borderBottom: '2px',
                        borderColor: 'primaryDark',
                        boxShadow: 'none',
                      }}
                      fontSize="xs"
                      fontWeight="bold"
                      p="0"
                    >
                      {tab.label}
                    </Tab>
                  ))}
                </HStack>
              </TabList>
              <Box
                px="4"
                py="1.5"
                border="1px"
                borderColor="#E4E4E4"
                borderRadius="base"
              >
                <HStack spacing="4">
                  <IoChevronBack />
                  <Text fontSize="sm">Thu, 20 AUG</Text>
                  <IoChevronForward />
                </HStack>
              </Box>
            </Flex>
            <TabPanels>
              <TabPanel p="none">
                <Table variant="simple" overflowY="auto">
                  <Thead>
                    <Tr fontSize="xs">
                      <Th fontWeight="normal" color="#25273499">
                        Rank
                      </Th>
                      <Th fontWeight="normal" color="#25273499">
                        Name
                      </Th>
                      <Th fontWeight="normal" color="#25273499">
                        Daily Result
                      </Th>
                      <Th fontWeight="normal" color="#25273499">
                        SLP AVG
                      </Th>
                      <Th fontWeight="normal" color="#25273499">
                        Rank
                      </Th>
                      <Th isNumeric fontWeight="normal" color="#25273499">
                        Clam
                      </Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {data_table.map((data) => {
                      const {
                        id,
                        rank,
                        name,
                        daily_result,
                        slp_avg,
                        point,
                        clam,
                      } = data;
                      return (
                        <Tr key={id} fontSize="sm">
                          <Td>{rank}</Td>
                          <Td>{name}</Td>
                          <Td>{daily_result}</Td>
                          <Td>{slp_avg}</Td>
                          <Td>{point}</Td>
                          <Td isNumeric>{clam}</Td>
                        </Tr>
                      );
                    })}
                  </Tbody>
                </Table>
              </TabPanel>
              <TabPanel p="none">
                <p>Faction K</p>
              </TabPanel>
              <TabPanel p="none">
                <p>Faction G</p>
              </TabPanel>
              <TabPanel p="none">
                <p>Faction D</p>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
        <Box bg="primaryDark" borderRadius="3xl"></Box>
      </Grid>
    </Layout>
  );
};

export default Scholar;
