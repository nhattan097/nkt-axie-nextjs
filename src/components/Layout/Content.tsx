import { useRouter } from 'next/router';
import { Box } from '@chakra-ui/react';

const Content = ({ children }) => {
  const { pathname } = useRouter();
  return (
    <Box px="16" pb="10" gridArea="content">
      {children}
    </Box>
  );
};

export default Content;
