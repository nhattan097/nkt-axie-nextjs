import { Box, Text, Image, Badge } from '@chakra-ui/react';

const CardAxie = ({ id, name, color, color_code }) => {
  return (
    <Box
      px="4"
      py="6"
      bg="secondDark"
      borderRadius="md"
      border="1px"
      borderColor="#585B67"
      maxH="265px"
    >
      <Badge mb="16px" bg={color_code} color="white">
        {id}
      </Badge>
      <Text mb="8">
        {name} {id}
      </Text>
      <Image w="106px" m="auto" alt="" src={`/img/axie/axie-${color}.png`} />
      <Image m="auto" alt="" src="/img/axie/shadow-axie.png" />
    </Box>
  );
};

export default CardAxie;
