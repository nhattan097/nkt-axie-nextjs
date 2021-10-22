import { Flex } from '@chakra-ui/react';

import RightPage from '~/components/LandingPage/RightPage';
import LeftPage from '~/components/LandingPage/LeftPage';

export default function Home() {
  return (
    <div>
      <main>
        <Flex w="full" minHeight="100vh">
          <LeftPage />
          <RightPage />
        </Flex>
      </main>
    </div>
  );
}
