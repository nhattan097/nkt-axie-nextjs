import { Box, Flex, Image } from '@chakra-ui/react';

const Logo = () => {
  return (
    <Box display="grid" borderRight="1px" borderColor="#E4E4E4" gridArea="logo">
      <Flex align="center" justify="center">
        <Image w="100px" h="46px" alt="" src="/img/logo/axie-logo.png" />
      </Flex>
    </Box>
  );
};

export default Logo;
