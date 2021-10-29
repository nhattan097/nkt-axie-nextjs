import {
  Flex,
  Text,
  VStack,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  HStack,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  FormControl,
  FormLabel,
  Input,
  Icon,
} from '@chakra-ui/react';
import { IoChevronDown, IoChevronUp } from 'react-icons/io5';

const ModalScholar = ({ isOpen, onClose }) => {
  return (
    <Modal
      isCentered
      returnFocusOnClose={false}
      isOpen={isOpen}
      onClose={onClose}
      size="md"
    >
      <ModalOverlay />
      <ModalContent borderRadius="3xl">
        <ModalHeader px="8" py="6" pb="0">
          Add New Scholar
        </ModalHeader>
        <ModalCloseButton
          borderRadius="full"
          boxShadow="md"
          size="lg"
          fontSize="xs"
        />
        <ModalBody px="8" py="6">
          <VStack spacing="6">
            <HStack spacing="6">
              <FormControl id="email">
                <FormLabel fontSize="sm" fontWeight="normal">
                  Faction
                </FormLabel>
                <Menu>
                  {({ isOpen }) => (
                    <>
                      <MenuButton
                        as={Button}
                        w="180px"
                        h="48px"
                        borderRadius="lg"
                        fontWeight="normal"
                        fontSize="sm"
                        _focus={{ boxShadow: 'none' }}
                        bg="primaryLight"
                        rightIcon={
                          <Icon as={isOpen ? IoChevronUp : IoChevronDown} />
                        }
                      >
                        Select a Faction
                      </MenuButton>
                      <MenuList fontSize="sm" p="2" minWidth="180px">
                        <MenuItem minHeight="40px" borderRadius="md">
                          Faction K
                        </MenuItem>
                        <MenuItem minHeight="40px" borderRadius="md">
                          Faction G
                        </MenuItem>
                        <MenuItem minHeight="40px" borderRadius="md">
                          Faction H
                        </MenuItem>
                      </MenuList>
                    </>
                  )}
                </Menu>
              </FormControl>
              <FormControl id="email">
                <FormLabel fontSize="sm" fontWeight="normal">
                  Investor
                </FormLabel>
                <Menu>
                  {({ isOpen }) => (
                    <>
                      <MenuButton
                        as={Button}
                        w="180px"
                        h="48px"
                        borderRadius="lg"
                        fontWeight="normal"
                        fontSize="sm"
                        _focus={{ boxShadow: 'none' }}
                        bg="primaryLight"
                        rightIcon={
                          <Icon as={isOpen ? IoChevronUp : IoChevronDown} />
                        }
                      >
                        Select a Investor
                      </MenuButton>
                      <MenuList fontSize="sm" p="2" minWidth="180px">
                        <MenuItem minHeight="40px" borderRadius="md">
                          Investor A
                        </MenuItem>
                        <MenuItem minHeight="40px" borderRadius="md">
                          Investor B
                        </MenuItem>
                        <MenuItem minHeight="40px" borderRadius="md">
                          None
                        </MenuItem>
                      </MenuList>
                    </>
                  )}
                </Menu>
              </FormControl>
            </HStack>
            <FormControl id="ronin-address">
              <FormLabel fontSize="sm" fontWeight="normal">
                Ronin Address
              </FormLabel>
              <Input
                _focus={{
                  boxShadow: 'none',
                  border: '2px',
                  borderColor: 'primaryDark',
                }}
                h="48px"
                borderRadius="lg"
                variant="filled"
                bg="primaryLight"
                placeholder="Textarea placeholder"
              />
            </FormControl>
            <FormControl id="scholar-name">
              <FormLabel fontSize="sm" fontWeight="normal">
                Scholar Name
              </FormLabel>
              <Input
                _focus={{
                  boxShadow: 'none',
                  border: '2px',
                  borderColor: 'primaryDark',
                }}
                h="48px"
                borderRadius="lg"
                variant="filled"
                bg="primaryLight"
                placeholder="Textarea placeholder"
              />
            </FormControl>
            <FormControl>
              <FormLabel fontSize="sm" fontWeight="normal">
                Income
              </FormLabel>
              <VStack
                fontSize="sm"
                align="base"
                spacing="3"
                px="6"
                py="4"
                bg="primaryLight"
                borderRadius="lg"
              >
                <Flex justify="space-between">
                  <Text>Scholar</Text>
                  <HStack spacing="2">
                    <Text color="#B7B9BD">0.0</Text>
                    <Text>%</Text>
                  </HStack>
                </Flex>
                <Flex justify="space-between">
                  <Text>Manager</Text>
                  <HStack spacing="2">
                    <Text color="#B7B9BD">0.0</Text>
                    <Text>%</Text>
                  </HStack>
                </Flex>
                <Flex justify="space-between">
                  <Text>Investor</Text>
                  <HStack spacing="2">
                    <Text color="#B7B9BD">0.0</Text>
                    <Text>%</Text>
                  </HStack>
                </Flex>
              </VStack>
            </FormControl>
          </VStack>
        </ModalBody>
        <ModalFooter px="8" py="6">
          <Button
            borderRadius="xl"
            h="14"
            color="white"
            bg="primaryDark"
            flex="1"
            _hover={{ color: 'primaryDark', bg: 'gray.200' }}
          >
            Add
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ModalScholar;
