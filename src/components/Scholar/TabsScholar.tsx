import {
  Box,
  Text,
  HStack,
  Flex,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Table,
  Thead,
  Tbody,
  Th,
  Td,
  Tr,
} from '@chakra-ui/react';
import { IoChevronBack, IoChevronForward } from 'react-icons/io5';
import { data_table } from '~/data/sample';

import tabs from '~/data/tabs';

const TabsScholar = () => {
  return (
    <Tabs>
      <Flex pt="8" px="8" mb="6" justify="space-between" align="center">
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
        <TabPanel p="0">
          <Table
            display="grid"
            overflowY="auto"
            maxH="792px"
            px="8"
            py="0"
            variant="simple"
            css={{
              '&::-webkit-scrollbar': {
                width: '4px',
              },
              '&::-webkit-scrollbar-track': {
                width: '6px',
              },
              '&::-webkit-scrollbar-thumb': {
                background: '#E4E4E4',
                borderRadius: '4px',
              },
            }}
          >
            <Thead display="grid" position="sticky" top="0" bg="white">
              <Tr
                display="grid"
                gridTemplateColumns="60px 1.2fr 110px 80px 60px 1fr"
                fontSize="xs"
              >
                <Th px="0" py="3" fontWeight="normal" color="#25273499">
                  Rank
                </Th>
                <Th px="0" py="3" fontWeight="normal" color="#25273499">
                  Name
                </Th>
                <Th px="0" py="3" fontWeight="normal" color="#25273499">
                  Daily Result
                </Th>
                <Th px="0" py="3" fontWeight="normal" color="#25273499">
                  SLP AVG
                </Th>
                <Th px="0" py="3" fontWeight="normal" color="#25273499">
                  Rank
                </Th>
                <Th
                  px="0"
                  py="3"
                  isNumeric
                  fontWeight="normal"
                  color="#25273499"
                >
                  Clam
                </Th>
              </Tr>
            </Thead>
            <Tbody display="grid">
              {data_table.map((data) => {
                const { id, rank, name, daily_result, slp_avg, point, clam } =
                  data;
                return (
                  <Tr
                    display="grid"
                    gridTemplateColumns="60px 1.2fr 110px 80px 60px 1fr"
                    key={id}
                    fontSize="sm"
                    cursor="pointer"
                    _hover={{
                      bg: '#2527340D',
                    }}
                  >
                    <Td px="0" py="3">
                      {rank}
                    </Td>
                    <Td px="0" py="3">
                      {name}
                    </Td>
                    <Td px="0" py="3">
                      {daily_result}
                    </Td>
                    <Td px="0" py="3">
                      {slp_avg}
                    </Td>
                    <Td px="0" py="3">
                      {point}
                    </Td>
                    <Td px="0" py="3" isNumeric>
                      {clam}
                    </Td>
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
  );
};

export default TabsScholar;
