import React, { useState } from 'react';
import {
  Box,
  HStack,
  Text,
  Divider
} from '@chakra-ui/react';

const Breed = () => {
  const [value, setValue] = useState(1);
  
  return (
    <Box position="relative" overflow="hidden" h={20} pt="5px">
      <Divider borderColor="border" borderWidth={2} />
      <HStack
        justify="space-between"
        position="absolute"
        top="2px"
        w="100%"
      >
        {
          [1,2,3,4,5,6,7].map(item => (
            <Box>
              <Box
                w="10px"
                h="10px"
                borderRadius="10px"
                bg={value === item ? `primaryDark` : `border`}
                mb="9px"
                cursor="pointer"
                onClick={() => setValue(item)}
              />
              <Text fontSize="xs">
                {item}
              </Text>
              <input type="hidden" value="value" />
            </Box>
          ))
        }
      </HStack>
    </Box>
  )
};

export default Breed;
