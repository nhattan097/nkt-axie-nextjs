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
  HStack,
  useDisclosure,
} from '@chakra-ui/react';
import { IoCaretDown, IoExit, IoPersonSharp } from 'react-icons/io5';
import { HiDownload, HiPlus } from 'react-icons/hi';
import Link from 'next/link';

import routes from '~/data/routes';
import ModalScholar from '../Scholar/ModalScholar';

const Header = () => {
  const { pathname } = useRouter();
  const { isOpen, onClose, onOpen } = useDisclosure();
  const title = routes.find((route) => route.url === pathname).title;
  const isScholarPage = pathname === '/scholar';

  return (
    <Box m="auto 0" px="16" gridArea="header">
      {isScholarPage && <ModalScholar isOpen={isOpen} onClose={onClose} />}
      <Flex justify="space-between">
        <HStack spacing="10">
          <Text fontWeight="bold" fontSize="3xl">
            {title}
          </Text>
          {isScholarPage && (
            <HStack spacing="4">
              <IconButton
                aria-label="Add scholar"
                bg="white"
                borderRadius="full"
                w="12"
                h="12"
                size="lg"
                icon={<HiPlus />}
                onClick={onOpen}
              />
              <IconButton
                aria-label="Download scholar"
                bg="white"
                borderRadius="full"
                w="12"
                h="12"
                size="lg"
                icon={<HiDownload />}
              />
            </HStack>
          )}
        </HStack>
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

              <Link href="/" passHref>
                <MenuItem icon={<IoExit />} command="⌘E">
                  Exit
                </MenuItem>
              </Link>
            </MenuList>
          </Menu>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Header;
