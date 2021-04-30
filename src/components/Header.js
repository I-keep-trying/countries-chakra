import React, { useState, useEffect } from 'react'
import {
  IconButton,
  Icon,
  Divider,
  useColorMode,
  Box,
  Flex,
  Spacer,
  VStack,
  HStack,
  useDisclosure,
  Button,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useColorModeValue,
  Skeleton,
  SimpleGrid,
  Container,
} from '@chakra-ui/react'
import { HamburgerIcon, SunIcon, MoonIcon } from '@chakra-ui/icons'
import { FcGlobe } from 'react-icons/fc'
import { AiFillApple } from 'react-icons/ai'
import Logo from '../Logo'
// AiFillApple
export const ThemeToggle = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <>
      {colorMode === 'light' ? (
        <IconButton
          aria-label="dark mode"
          icon={<MoonIcon />}
          onClick={toggleColorMode}
          variant="link"
        />
      ) : (
        <IconButton
          aria-label="light mode"
          icon={<SunIcon />}
          onClick={toggleColorMode}
          variant="link"
        />
      )}
    </>
  )
}

export const Navbar = () => {


  return (
    <>
      <VStack>
        <Flex
          id="header-wrap"
          style={{ borderWidth: '2px', borderColor: 'blue', marginBottom: 0 }}
          bg={useColorModeValue('white', 'gray.800')}
          align="center"
          justify="flex-end"
          w="100%"
          h="10%"
        >
          <Box
            w="15%"
            ml="2"
            mt="2"
            // style={{ borderWidth: '2px', borderColor: 'green'}}
          >
            <IconButton
              aria-label="logo"
              variant="link"
              fontSize="3rem"
              icon={
                <Icon
                  as={FcGlobe}
                  // size="lg"
                />
              }
            />
          </Box>
          <Spacer />
          {/* mobile  */}
          <>
            {/*  <Button
            ref={btnRef}
            onClick={onOpen}
            display={{ base: 'block', md: 'none' }}
            as={IconButton}
            aria-label="open or close mobile menu"
            variant="unstyled"
            icon={<HamburgerIcon />}
          />
          <Drawer
            isOpen={isOpen}
            placement="right"
            onClose={onClose}
            finalFocusRef={btnRef}
            size="xs"
          >
            <DrawerOverlay>
              <DrawerContent>
                <DrawerCloseButton />
                <DrawerBody>
                  <VStack align="center">
                    {' '}
                    <Box height="4vh">menu</Box>
                    <Box height="4vh">menu</Box>
                    <Box height="4vh">menu</Box>
                    <Box height="4vh">menu</Box>
                    <Box height="4vh">menu</Box>
                    <Box height="4vh">menu</Box>
                  </VStack>
                </DrawerBody>
              </DrawerContent>
            </DrawerOverlay>
          </Drawer> */}
          </>

        
          <Box ml={0} mr={5} w="5%">
            <ThemeToggle />
          </Box>
        </Flex>

        <Flex
          id="header-wrap2"
          style={{
            borderWidth: '2px',
            borderColor: 'green',
            marginBottom: 0,
            marginTop: 52,
          }}
          bg={useColorModeValue('white', 'gray.800')}
          align="center"
          justify="flex-end"
          w="100%"
          h="8%"
        >
          <Container centerContent>
            <HStack>
              <Box height="4vh">menu</Box>
              <Divider orientation="vertical" />
              <Box height="4vh">menu</Box>
              <Divider orientation="vertical" />
              <Box height="4vh">menu</Box>
              <Divider orientation="vertical" />
              <Box height="4vh">menu</Box>
              <Divider orientation="vertical" />
              <Box height="4vh">menu</Box>
            </HStack>
          </Container>
        </Flex>

         <Flex
          id="header-wrap3"
          style={{
            borderWidth: '2px',
            borderColor: 'green',
            marginBottom: 0,
            marginTop: 90,
          }}
          bg={useColorModeValue('white', 'gray.800')}
          align="center"
          justify="flex-end"
          w="100%"
          h="8%"
        >
          <Container centerContent>
            <HStack>
              <Box height="4vh">menu</Box>
              <Divider orientation="vertical" />
              <Box height="4vh">menu</Box>
              <Divider orientation="vertical" />
              <Box height="4vh">menu</Box>
              <Divider orientation="vertical" />
              <Box height="4vh">menu</Box>
              <Divider orientation="vertical" />
              <Box height="4vh">menu</Box>
            </HStack>
          </Container>
        </Flex>
      </VStack>
    </>
  )
}
export default Navbar
