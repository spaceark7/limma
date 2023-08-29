'use client'

import {
  Box,
  Container,
  Stack,
  SimpleGrid,
  Text,
  VisuallyHidden,
  chakra,
  useColorModeValue,
} from '@chakra-ui/react'
import { FaTwitter, FaYoutube, FaInstagram, FaLinkedin } from 'react-icons/fa'

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  )
}

const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  )
}

export default function Footer() {
  const thisYear = new Date().getFullYear()
  return (
    <Box
      bg={useColorModeValue('blackAlpha.800', 'gray.900')}
      color={useColorModeValue('white', 'gray.200')}
    >
      <Container
        as={Stack}
        maxW={{
          base: '100%',
          sm: 'container.sm',
          md: 'container.md',
          lg: 'container.lg',
          '2xl': '1440px',
        }}
        px={{
          base: '4',
          sm: '6',
        }}
        py={10}
      >
        <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
          <Stack align={'flex-start'}>
            <ListHeader>Company</ListHeader>
            <Box as='a' href={'#'}>
              About Us
            </Box>
            <Box as='a' href={'#'}>
              Blog
            </Box>
            <Box as='a' href={'#'}>
              Careers
            </Box>
            <Box as='a' href={'#'}>
              Contact Us
            </Box>
          </Stack>

          <Stack align={'flex-start'}>
            <ListHeader>Support</ListHeader>
            <Box as='a' href={'#'}>
              Help Center
            </Box>
            <Box as='a' href={'#'}>
              Safety Center
            </Box>
            <Box as='a' href={'#'}>
              Community Guidelines
            </Box>
          </Stack>

          <Stack align={'flex-start'}>
            <ListHeader>Legal</ListHeader>
            <Box as='a' href={'#'}>
              Cookies Policy
            </Box>
            <Box as='a' href={'#'}>
              Privacy Policy
            </Box>
            <Box as='a' href={'#'}>
              Terms of Service
            </Box>
            <Box as='a' href={'#'}>
              Law Enforcement
            </Box>
          </Stack>
        </SimpleGrid>
      </Container>

      <Box
        borderTopWidth={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.700')}
      >
        <Container
          as={Stack}
          maxW={'6xl'}
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ md: 'space-between' }}
          align={{ md: 'center' }}
        >
          <Text>
            © {thisYear} Hasbi Assidiqi Web Dev Test. Open source with license
          </Text>
          <Stack direction={'row'} spacing={6}>
            <SocialButton label={'Twitter'} href={'#'}>
              <FaLinkedin />
            </SocialButton>

            <SocialButton label={'Instagram'} href={'#'}>
              <FaInstagram />
            </SocialButton>
          </Stack>
        </Container>
      </Box>
    </Box>
  )
}
