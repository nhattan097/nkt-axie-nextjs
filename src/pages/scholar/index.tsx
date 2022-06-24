import { HStack, VStack } from '@chakra-ui/react';

import Layout from '~/components/Layout';
import InfoScholar from '~/components/Scholar/InfoScholar';
import TabsScholar from '~/components/Scholar/TabsScholar';

const Scholar = () => {
  return (
    <Layout>
      <HStack spacing="6" align="unset">
        <VStack align="base" bg="white" borderRadius="3xl" w="62%">
          <TabsScholar />
        </VStack>
        <VStack align="base" bg="primaryDark" borderRadius="3xl" w="38%">
          <InfoScholar />
        </VStack>
      </HStack>
    </Layout>
  );
};

export default Scholar;
