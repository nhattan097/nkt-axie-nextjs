import { useRouter } from 'next/router';
import {
  Box,
  Flex,
  Text,
  Avatar,
  VStack,
  Menu,
  MenuButton,
  IconButton,
  MenuList,
  MenuItem,
} from '@chakra-ui/react';
import { IoCaretDown, IoExit, IoPersonSharp } from 'react-icons/io5';

const Header = () => {
  const { pathname } = useRouter();
  return (
    <Box m="auto 0" px="16" gridArea="header">
      <Flex justify="space-between">
        <Text fontWeight="bold" fontSize="3xl">
          Manager Data
        </Text>
        <Flex align="center">
          <Avatar w="42px" h="42px" mr="4" />
          <Box mr="2">
            <VStack align="flex-start">
              <Text lineHeight="none" fontSize="sm" fontWeight="bold">
                Metamask
              </Text>
              <Text lineHeight="none" fontSize="sm" color="#42474DCC">
                0xe0B3...6ae5
              </Text>
            </VStack>
          </Box>
          <Menu>
            <MenuButton
              as={IconButton}
              aria-label="Options"
              icon={<IoCaretDown />}
              variant="ghost"
              _focus={{ boxShadow: 'none' }}
            />
            <MenuList>
              <MenuItem icon={<IoPersonSharp />} command="⌘P">
                Profile
              </MenuItem>
              <MenuItem icon={<IoExit />} command="⌘E">
                Exit
              </MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Header;