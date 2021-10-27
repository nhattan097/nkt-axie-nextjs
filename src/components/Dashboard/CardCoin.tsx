import { Text, HStack, Flex, Stack } from '@chakra-ui/react';

const CardCoin = ({ name, dont_know, earn, profit, icon: Icon }) => {
  return (
    <Stack
      direction={['column']}
      spacing="6"
      bg="white"
      borderRadius="2xl"
      p="30px"
      lineHeight="none"
      justify="space-between"
    >
      <Text fontSize="sm" color="#11142D99" fontWeight="bold">
        {name}
      </Text>
      <Flex align="center" justify="space-between">
        <Stack direction={['column']} spacing="3">
          <Text fontWeight="bold" fontSize="18px">
            {dont_know}
          </Text>
          <HStack spacing="2">
            <Text fontSize="xs" color="#808191">
              {earn}
            </Text>
            <Text fontSize="sm" color="#45B36B">
              {profit}
            </Text>
          </HStack>
        </Stack>
        <Icon />
      </Flex>
    </Stack>
  );
};

export default CardCoin;
