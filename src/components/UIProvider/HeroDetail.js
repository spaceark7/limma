import { Box, Button, Heading, Stack, Text } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'

import BaseLayout from '../BaseLayout'

export default function HeroDetail({ content = [] }) {
  return (
    <BaseLayout>
      <Stack
        direction={{
          base: 'column',
          lg: 'row',
        }}
        spacing={{
          base: '4',
          md: '8',
        }}
        justifyContent={{
          base: 'center',
          md: 'space-between',
        }}
        alignItems={{
          base: 'center',
        }}
        pt={{
          base: '16',
          md: '20',
          lg: '0',
        }}
      >
        <Box
          w={{
            base: 'full',
            lg: 'prose',
          }}
        >
          <Heading
            as='h1'
            size={{
              base: 'xl',
              md: '2xl',
              '2xl': '4xl',
            }}
            textAlign={{
              base: 'center',
              lg: 'start',
            }}
          >
            {content[0].title}{' '}
            <Box as='span' color='goldenrod'>
              {content[0].brandHighlight}
            </Box>
          </Heading>
          <Text
            mx={{
              base: 'auto',
              lg: '0',
            }}
            mt={{
              base: '3',
              md: '5',
            }}
            textAlign={{
              base: 'center',
              lg: 'start',
            }}
            maxW={{
              base: 'sm',
            }}
          >
            {content[0].subtitle}
          </Text>

          <Stack
            direction={{
              base: 'row',
            }}
            justifyContent={{
              base: 'center',
              lg: 'start',
            }}
            w={'full'}
          >
            <Button
              variant='solid'
              colorScheme='yellow'
              size={{
                base: 'md',
                md: 'lg',
              }}
              mt='5'
            >
              Explore the secret
            </Button>

            <Button
              variant='outline'
              colorScheme='yellow'
              size={{
                base: 'md',
                md: 'lg',
              }}
              mt='5'
              ml='5'
            >
              Buy Now
            </Button>
          </Stack>
        </Box>

        <Box className='relative'>
          <picture className='relative block aspect-[4/5] h-screen w-full md:aspect-square md:h-[80dvh] lg:max-w-xl md:max-h-none max-h-80'>
            <source media='(max-width: 520px)' srcSet={content[0].image} />
            <source media='(min-width: 521px)' srcSet={content[0].image} />
            <source media='(max-width: 1440px)' srcSet={content[0].image} />
            <source media='(min-width: 1920px)' srcSet={content[0].image} />
            <Image
              className='object-contain'
              src={content[0].image}
              fill
              sizes='100vw'
              alt={'hero'}
            />
          </picture>
        </Box>
      </Stack>
    </BaseLayout>
  )
}
