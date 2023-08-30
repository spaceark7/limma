/* eslint-disable react/no-unescaped-entities */
import { Box, Heading, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import BaseLayout from './BaseLayout'
import Image from 'next/image'
import contact from '@/assets/contact.png'
import { EmailIcon } from '@chakra-ui/icons'

const Contact = () => {
  return (
    <BaseLayout>
      <Stack
        spacing={{
          base: '24',
          md: '12',
          lg: '16',
        }}
        direction={{
          base: 'column',
          md: 'row',
        }}
        py={{
          lg: '16',
        }}
        pt={{
          base: '16',
          md: '12',
        }}
        px={{
          base: '4',
          md: '8',
          lg: '12',
        }}
        rounded={'xl'}
        color={'white'}
        bg={'teal.500'}
        className='relative'
      >
        <Box>
          <Text
            textAlign={{
              base: 'center',
              lg: 'start',
            }}
          >
            Do you have any questions?
          </Text>
          <Heading
            as='h2'
            textAlign={{
              base: 'center',
              lg: 'start',
            }}
            fontWeight={'bold'}
          >
            Let's Talk!
          </Heading>
          <Text
            mt={4}
            textAlign={{
              base: 'center',
              lg: 'start',
            }}
            maxW={'md'}
          >
            If you have any business inquiries and product questions, please do
            not hesitate to contact us.
          </Text>

          <Stack
            direction={{
              base: 'column',
              md: 'row',
            }}
            mx={{
              base: 'auto',
              lg: '0',
            }}
            spacing={{
              base: '4',
            }}
            mt={{
              base: '8',
              md: '12',
            }}
            justifyContent={{
              base: 'center',
              lg: 'start',
            }}
            alignItems={{
              base: 'center',
            }}
          >
            <Box
              display='flex'
              rounded={'full'}
              bg={'white'}
              w={12}
              h={12}
              alignItems={'center'}
              justifyContent={'center'}
            >
              <EmailIcon color={'teal.500'} w={6} h={6} />
            </Box>
            <Text>customer@limma.com</Text>
          </Stack>
        </Box>
        <Box
          display={{
            base: 'block',
            lg: 'none',
          }}
        >
          <Image
            className=' '
            src={contact}
            width={500}
            height={800}
            alt='woman'
          />
        </Box>
        <Box
          display={{
            base: 'none',
            lg: 'block',
          }}
        >
          <Image
            className='absolute right-10 bottom-0'
            src={contact}
            width={500}
            height={500}
            alt='woman'
          />
        </Box>
      </Stack>
    </BaseLayout>
  )
}

export default Contact
