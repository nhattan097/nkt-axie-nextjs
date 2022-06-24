import { Text } from '@chakra-ui/react';

const NumberCard = ({ children, ...rest }) => {
  return (
    <Text fontSize="54px" fontWeight="bold" {...rest}>
      {children}
    </Text>
  );
};

export default NumberCard;
