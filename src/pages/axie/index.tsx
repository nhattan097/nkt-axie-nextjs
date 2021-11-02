import {
  Box,
  SimpleGrid,
  Text,
  HStack,
  Flex,
  Stack,
  Image,
  Table,
  Thead,
  Tbody,
  Th,
  Td,
  Tr,
} from '@chakra-ui/react';
import Layout from '~/components/Layout';
import Filter from '~/components/Axie/Filter';
import { axie_list_table } from '~/data/sample';
import formatCurrency from '~/utils/formatCurrency';

const Axie = () => {
  return (
    <Layout>
      <SimpleGrid spacing="6" columns={3} mb="24px">
        <Box bg="white" px={8} py={6} borderRadius="2xl">
          <Text fontSize="xs" fontWeight="bold" color="secondaryText" mb="24px">
            Total
          </Text>
          <Stack justify="space-between" direction="row" align="flex-end">
            <Text fontSize="5xl" fontWeight="bold" lineHeight={1}>
              101
            </Text>
          </Stack>
        </Box>
        <Box bg="white" px={8} py={6} borderRadius="2xl">
          <Text fontSize="xs" fontWeight="bold" color="secondaryText" mb="24px">
            Egg
          </Text>
          <Stack justify="space-between" direction="row" align="flex-end">
            <Stack justify="space-between" direction="row" align="flex-end">
              <Text fontSize="5xl" fontWeight="bold" lineHeight={1}>
                10
              </Text>
              <Text fontSize="sm" color="green">
                +1
              </Text>
            </Stack>
            <Stack>
              <Text fontSize="xs" color="yellow">
                #210520
              </Text>
            </Stack>
          </Stack>
        </Box>
        <Box bg="white" px={8} py={6} borderRadius="2xl">
          <Text fontSize="xs" fontWeight="bold" color="secondaryText" mb="24px">
            Ready to hatch
          </Text>
          <Stack justify="space-between" direction="row" align="flex-end">
            <Stack justify="space-between" direction="row" align="flex-end">
              <Text fontSize="5xl" fontWeight="bold" lineHeight={1}>
                3
              </Text>
              <Text fontSize="sm" color="green">
                +2
              </Text>
            </Stack>
            <Stack>
              <Text fontSize="xs" color="yellow">
                #210520
              </Text>
            </Stack>
          </Stack>
        </Box>
      </SimpleGrid>
      <Flex bg="white" borderRadius="3xl" overflow="hidden">
        <Filter />
        <Box flex="1" py="8">
          <Table
            display="grid"
            overflowY="auto"
            maxH="520px"
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
                gridTemplateColumns="1.2fr 0.5fr 0.8fr 0.9fr 0.8fr 0.5fr 0.5fr"
                fontSize="xs"
              >
                <Th px="0" py="3" fontWeight="normal" color="#25273499">
                  <Text fontSize="xs" fontWeight="bold" color="#7C7D85">
                    140 Axies
                  </Text>
                </Th>
                <Th px="0" py="3" fontWeight="normal" color="#25273499">
                  Breed Count
                </Th>
                <Th px="0" py="3" fontWeight="normal" color="#25273499">
                  Team
                </Th>
                <Th px="0" py="3" fontWeight="normal" color="#25273499">
                  Purchase Price
                </Th>
                <Th px="0" py="3" fontWeight="normal" color="#25273499">
                  Market Price
                </Th>
                <Th px="0" py="3" fontWeight="normal" color="#25273499">
                  Manager
                </Th>
                <Th
                  px="0"
                  py="3"
                  fontWeight="normal"
                  color="#25273499"
                  isNumeric
                >
                  Owner
                </Th>
              </Tr>
            </Thead>
            <Tbody display="grid">
              {axie_list_table.map((data) => {
                const {
                  id,
                  name,
                  image_url,
                  breed_count,
                  team,
                  purchase_price,
                  purchase_cash,
                  market_price,
                  market_cash,
                  manager,
                  owner,
                } = data;

                let colorId;
                if (image_url.includes('yellow')) {
                  colorId = '#FFAF13';
                } else if (image_url.includes('blue')) {
                  colorId = '#00AFC7';
                } else if (image_url.includes('green')) {
                  colorId = '#80BD39';
                } else {
                  colorId = 'primaryDark';
                }

                return (
                  <Tr
                    display="grid"
                    gridTemplateColumns="1.2fr 0.5fr 0.8fr 0.9fr 0.8fr 0.5fr 0.5fr"
                    key={id}
                    fontSize="xs"
                    cursor="pointer"
                    _hover={{
                      bg: '#2527340D',
                    }}
                  >
                    <Td px="0" py="3">
                      <HStack spacing="4">
                        <Image
                          w="46px"
                          h="32px"
                          alt={image_url}
                          src={image_url}
                        />
                        <Box>
                          <Text color={colorId}>{id}</Text>
                          <Text>{name}</Text>
                        </Box>
                      </HStack>
                    </Td>
                    <Td px="0" py="3">
                      {breed_count}
                    </Td>
                    <Td px="0" py="3">
                      {team}
                    </Td>
                    <Td px="0" py="3">
                      <HStack spacing="1">
                        <Image alt="" src="/svg/congruent-icon.svg" />
                        <Text>{purchase_price}</Text>
                      </HStack>
                      <Text color="#7C7D85">
                        {formatCurrency(purchase_cash, 'USD')}
                      </Text>
                    </Td>
                    <Td px="0" py="3">
                      <HStack spacing="1">
                        <Image alt="" src="/svg/congruent-icon.svg" />
                        <Text>{market_price}</Text>
                      </HStack>
                      <Text color="#7C7D85">
                        {formatCurrency(market_cash, 'USD')}
                      </Text>
                    </Td>
                    <Td px="0" py="3">
                      {manager}
                    </Td>
                    <Td px="0" py="3" isNumeric>
                      {owner}
                    </Td>
                  </Tr>
                );
              })}
            </Tbody>
          </Table>
        </Box>
      </Flex>
    </Layout>
  );
};

export default Axie;
