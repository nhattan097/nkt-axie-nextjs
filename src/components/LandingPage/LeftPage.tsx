import {
  Flex,
  Box,
  Icon,
  Heading,
  Text,
  Image,
  Button,
  HStack,
  Center,
  SimpleGrid,
} from '@chakra-ui/react';
import {
  IoLogoDiscord,
  IoLogoYoutube,
  IoLogoTwitter,
  IoPerson,
  IoStatsChart,
} from 'react-icons/io5';

import Link from 'next/link';

const LeftPage = () => {
  return (
    <Flex
      py="50px"
      px="80px"
      w="half"
      justify="space-between"
      direction="column"
    >
      <Flex alignItems="center" justifyContent="space-between" mb="130px">
        <Image alt="" src="/img/logo/nkt-logo.png" w="150px" h="40px" />
        <HStack spacing="6">
          <Icon w="7" h="7" as={IoLogoDiscord} />
          <Icon w="7" h="7" as={IoLogoTwitter} />
          <Icon w="7" h="7" as={IoLogoYoutube} />
        </HStack>
      </Flex>
      <Center flexDirection="column">
        <Heading
          textAlign="center"
          fontSize="4xl"
          mb="60px"
          fontWeight="semibold"
        >
          An NFT is a unit of data stored on a digital ledger
        </Heading>
        <Flex borderRadius="24px" bg="white" minW="505px" mb="64px">
          <Box px="20px" py="30px" flex="1">
            <Flex align="center" justify="start" mb="4">
              <Box
                w="16px"
                height="16px"
                display="flex"
                alignItems="center"
                justifyContent="center"
                bg="#286EF3"
                borderRadius="6px"
                mr="2"
              >
                <Icon as={IoPerson} fill="white" w="8px" h="8px" />
              </Box>
              <Text color="#808191" fontSize="xs">
                Scholar
              </Text>
            </Flex>
            <Text
              color="number"
              fontSize="4xl"
              fontWeight="semibold"
              lineHeight="none"
            >
              101
            </Text>
          </Box>
          <Box px="20px" py="30px" flex="1" borderX="1px solid #E4E4E4">
            <Flex align="center" justify="start" mb="4">
              <Image
                alt=""
                src="/svg/message-unread.svg"
                w="16px"
                height="16px"
                mr="2"
              />
              <Text color="#808191" fontSize="xs">
                SLP Average
              </Text>
            </Flex>
            <Text
              color="number"
              fontSize="4xl"
              fontWeight="semibold"
              lineHeight="none"
            >
              150
            </Text>
          </Box>
          <Box px="20px" py="30px" flex="1">
            <Flex align="center" justify="start" mb="4">
              <Box
                w="16px"
                height="16px"
                display="flex"
                alignItems="center"
                justifyContent="center"
                bg="purple"
                borderRadius="6px"
                mr="2"
              >
                <Icon as={IoStatsChart} fill="white" w="8px" h="8px" />
              </Box>
              <Text color="#808191" fontSize="xs">
                Top Player Rank
              </Text>
            </Flex>
            <Text
              color="number"
              fontSize="4xl"
              fontWeight="semibold"
              lineHeight="none"
            >
              1200
            </Text>
          </Box>
        </Flex>
        <SimpleGrid minChildWidth="240px" maxW="505px" gap="4" mb="155px">
          <Button
            borderRadius="2xl"
            h="16"
            color="white"
            bg="primaryDark"
            flex="1"
            _hover={{ color: 'primaryDark', bg: 'gray.200' }}
          >
            Apply Now
          </Button>
          <Link href="/dashboard" passHref>
            <Button
              borderRadius="2xl"
              h="16"
              border="1px"
              borderColor="primaryDark"
              flex="1"
              bg="transparent"
            >
              Login
            </Button>
          </Link>
        </SimpleGrid>
      </Center>
      <HStack spacing="40px">
        <Image w="76px" alt="" src="/img/logo/axie-logo.png" />
        <Image w="61px" alt="" src="/img/logo/gala-logo.png" />
        <Image w="120px" alt="" src="/img/logo/treeverse-logo.png" />
      </HStack>
    </Flex>
  );
};

export default LeftPage;
