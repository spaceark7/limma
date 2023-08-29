import { Box, Button, Heading, Stack, Text } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'

import hero from '@/assets/product-hero.webp'
import BaseLayout from '../BaseLayout'

const Hero = ({ ref, storyRef }) => {
  return (
    <BaseLayout>
      <Stack
        ref={ref}
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
            Introducing{' '}
            <Box as='span' color='goldenrod'>
              Limma Hair Oil
            </Box>{' '}
            100% Candle Nut Oil
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
            The secret of beauty unveiled with genuine candle nut oil from the
            nature.
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
              onClick={() =>
                storyRef.current.scrollIntoView({ behavior: 'smooth' })
              }
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
            <source media='(max-width: 520px)' srcSet={hero} />
            <source media='(min-width: 521px)' srcSet={hero} />
            <source media='(max-width: 1440px)' srcSet={hero} />
            <source media='(min-width: 1920px)' srcSet={hero} />
            <Image
              className='object-contain'
              src={hero}
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

export default Hero
