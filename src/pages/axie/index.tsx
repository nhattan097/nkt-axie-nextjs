import {
  Box,
  SimpleGrid,
  Text,
  HStack,
  Flex,
  Stack,
  Image,
  Grid,
  Checkbox
} from '@chakra-ui/react';
import Layout from '~/components/Layout';
import Card from '~/components/Axie/Card';
import Filter from '~/components/Axie/Filter';
import { axies } from '~/data/sample';

const Axie = () => {
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
            <Stack justify="space-between" direction="row" align="flex-end">
              <Text fontSize="5xl" fontWeight="bold" lineHeight={1}>
                10
              </Text>
              <Text fontSize="sm" color="green">
                +1
              </Text>
            </Stack>
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
            <Stack justify="space-between" direction="row" align="flex-end">
              <Text fontSize="5xl" fontWeight="bold" lineHeight={1}>
                3
              </Text>
              <Text fontSize="sm" color="green">
                +2
              </Text>
            </Stack>
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
        <Filter />
        <SimpleGrid spacing="6" p="8" columns={2}>
          {
            axies.map(item => (
              <Card key={item.id} {...item} />
            ))
          }
        </SimpleGrid>
      </Flex>
    </Layout>
  );
};

export default Axie;
