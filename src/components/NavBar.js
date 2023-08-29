'use client'

import {
  Box,
  Flex,
  Avatar,
  HStack,
  Text,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Icon,
} from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon, AddIcon } from '@chakra-ui/icons'
import { useScrollHooks, classNames } from '@/hooks/useScrollHooks'

import Logo from '@/assets/logo.webp'
import Image from 'next/image'
import { PiShoppingCartBold } from 'react-icons/pi'
const Links = ['Story', 'Product', 'Contact']

const NavLink = (props) => {
  const { children, storyRef, productRef, contactRef, heroRef } = props

  const handleScrollTo = () => {
    switch (children) {
      case 'Story':
        storyRef.current.scrollIntoView({ behavior: 'smooth' })
        break
      case 'Product':
        productRef.current.scrollIntoView({ behavior: 'smooth' })
        break
      case 'Contact':
        contactRef.current.scrollIntoView({ behavior: 'smooth' })
        break
      default:
        heroRef.current.scrollIntoView({ behavior: 'smooth' })
        break
    }
  }

  return (
    <Box
      as='a'
      px={2}
      py={1}
      rounded={'md'}
      _hover={{
        textDecoration: 'none',
        bg: useColorModeValue('gray.200', 'gray.700'),
      }}
      onClick={handleScrollTo}
      className='cursor-pointer'
    >
      {children}
    </Box>
  )
}

export default function NavBar({ storyRef, productRef, contactRef, heroRef }) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const scrollPos = useScrollHooks()
  return (
    <Box>
      <Box
        className={classNames(
          scrollPos > 20
            ? 'bg-white bg-opacity-60 text-gray-700 shadow-lg backdrop-blur-md'
            : isOpen
            ? 'bg-white bg-opacity-60 text-gray-700 shadow-lg backdrop-blur-md'
            : 'bg-none',
          'fixed top-0 z-40 w-full  transition-all duration-300 ease-out'
        )}
        px={4}
      >
        <Flex
          maxW={{
            base: '100%',
            sm: 'container.sm',
            md: 'container.md',
            lg: 'container.lg',
            '2xl': '1440px',
          }}
          px={{
            sm: '6',
          }}
          h={16}
          alignItems={'center'}
          justifyContent={'space-between'}
          mx={'auto'}
        >
          <IconButton
            size={'md'}
            variant={'ghost'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />

          <HStack spacing={8} alignItems={'center'}>
            <Box
              onClick={() => {
                heroRef.current.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              <Image src={Logo} alt='logo' width={50} height={50} />
            </Box>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}
            >
              {Links.map((link) => (
                <NavLink
                  heroRef={heroRef}
                  storyRef={storyRef}
                  productRef={productRef}
                  contactRef={contactRef}
                  key={link}
                >
                  {link}
                </NavLink>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={'center'}>
            <Button
              variant={'solid'}
              colorScheme={'teal'}
              size={'sm'}
              mr={4}
              leftIcon={<Icon as={PiShoppingCartBold} />}
            >
              Buy Now
            </Button>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <NavLink
                  heroRef={heroRef}
                  storyRef={storyRef}
                  productRef={productRef}
                  contactRef={contactRef}
                  key={link}
                >
                  {link}
                </NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </Box>
  )
}
