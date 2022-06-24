import { useRouter } from 'next/router';
import Link from 'next/link';
import {
  Box,
  Flex,
  Text,
  Image,
  HStack,
  Icon,
  Divider,
} from '@chakra-ui/react';

import routes from '~/data/routes';
import React from 'react';

const Sidebar = () => {
  const { pathname } = useRouter();
  return (
    <Box px="5" borderRight="1px" borderColor="#E4E4E4" gridArea="sidebar">
      <Box maxW="256px">
        {routes.map((route) => {
          const active = pathname === route.url;
          return (
            <React.Fragment key={route.url}>
              {route.url === '/setting' && <Divider my="6" />}
              <Link href={route.url} passHref>
                <Box
                  cursor="pointer"
                  bg={active ? 'primaryDark' : 'transparent'}
                  color={active ? 'white' : '#808191'}
                  px="5"
                  py="4"
                  borderRadius="xl"
                >
                  <HStack spacing="4" align="center">
                    <Icon
                      alignSelf="center"
                      w="6"
                      h="6"
                      as={route.icon}
                      fill={route.url !== '/dashboard' && active && 'white'}
                      stroke={route.url === '/dashboard' && active && 'white'}
                    />
                    <Text fontWeight="medium">{route.label}</Text>
                  </HStack>
                </Box>
              </Link>
            </React.Fragment>
          );
        })}
      </Box>
    </Box>
  );
};

export default Sidebar;
