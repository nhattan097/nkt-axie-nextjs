import { Text } from '@chakra-ui/react';

const TitleCard = ({ children, ...rest }) => {
  return (
    <Text fontSize="sm" fontWeight="bold" color="#A8A9AE" mb="6" {...rest}>
      {children}
    </Text>
  );
};

export default TitleCard;
