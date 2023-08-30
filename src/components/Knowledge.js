/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import BaseLayout from './BaseLayout'
import { Box, HStack, Heading, Stack, Text } from '@chakra-ui/react'

import Image from 'next/image'
import candlenut from '@/assets/candlenut_1.png'
import lab from '@/assets/labs.jpg'
const Knowledge = ({ ref }) => {
  return (
    <BaseLayout>
      <Stack
        ref={ref}
        spacing={{
          base: '24',
          md: '12',
          lg: '16',
        }}
        maxW={{
          '2xl': 'container.lg',
        }}
        mx={{
          '2xl': 'auto',
        }}
      >
        <Box>
          <Heading as='h2' textAlign={'center'} fontWeight={'bold'}>
            The Story
          </Heading>
          <Text
            lineHeight={'shorter'}
            textAlign={'center'}
            mx={'auto'}
            maxW={{
              base: 'full',
            }}
            mt={'4'}
          >
            For centuries candlenut oil has been believed to be a very effective
            hair growth ingredient. Healthy and shiny hair is an important thing
            in modern life. We present natural solutions for your beauty and
            health through our superior products, which are produced from
            selected candlenuts with a sophisticated extraction process. With
            our commitment to quality and innovation,{' '}
            <Box as='span' color='goldenrod'>
              Limma Hair Oil
            </Box>{' '}
            is ready to provide a satisfying experience and optimal benefits
            from the magic of candlenuts oil for you. Find your natural beauty
            with{' '}
            <Box as='span' color='goldenrod'>
              Limma Hair Oil
            </Box>{' '}
            .
          </Text>
        </Box>
        <Stack
          direction={{
            base: 'column',
            md: 'row',
          }}
          spacing={{
            base: '8',
          }}
          justifyContent={'center'}
          alignItems={'center'}
          mt={'8'}
        >
          <Box>
            <Heading
              as='h2'
              size={{
                base: 'md',
                md: 'lg',
              }}
              fontWeight={'bold'}
              textAlign={{
                base: 'center',
                lg: 'start',
              }}
              mb={{
                lg: '4',
              }}
            >
              What is the Candlenut Oil?
            </Heading>
            <Box
              display={{
                base: 'block',
                lg: 'none',
              }}
            >
              <picture className='relative block aspect-[4/5] h-screen w-full md:aspect-square xl:h-[60dvh] lg:max-w-xl xl:max-h-none max-h-80'>
                <source media='(max-width: 520px)' srcSet={candlenut} />
                <source media='(min-width: 521px)' srcSet={candlenut} />
                <source media='(max-width: 1440px)' srcSet={candlenut} />
                <source media='(min-width: 1920px)' srcSet={candlenut} />
                <Image
                  className='object-contain'
                  src={candlenut}
                  fill
                  sizes='100vw'
                  alt={'hero'}
                />
              </picture>
            </Box>
            <Text
              lineHeight={'shorter'}
              textAlign={{
                base: 'center',
                lg: 'start',
              }}
            >
              Candlenut oil, also known as Kemiri oil, is a versatile and
              nourishing natural oil derived from the seeds of the candlenut
              tree (Aleurites moluccanus). With a rich history in traditional
              beauty and wellness practices, this oil is renowned for its potent
              moisturizing and conditioning properties. Candlenut oil deeply
              hydrates the skin and hair, promoting a healthy and radiant
              appearance.
            </Text>
          </Box>
          <Box
            display={{
              base: 'none',
              lg: 'block',
            }}
          >
            <picture className='relative block aspect-[4/5] h-screen w-full md:aspect-square xl:h-[60dvh] lg:max-w-xl xl:max-h-none max-h-80'>
              <source media='(max-width: 520px)' srcSet={candlenut} />
              <source media='(min-width: 521px)' srcSet={candlenut} />
              <source media='(max-width: 1440px)' srcSet={candlenut} />
              <source media='(min-width: 1920px)' srcSet={candlenut} />
              <Image
                className='object-contain'
                src={candlenut}
                fill
                sizes='100vw'
                alt={'hero'}
              />
            </picture>
          </Box>
        </Stack>

        <Stack
          direction={{
            base: 'column',
            md: 'row',
          }}
          justifyContent={'center'}
          alignItems={'center'}
          mt={'8'}
        >
          <Box
            display={{
              base: 'none',
              lg: 'block',
            }}
          >
            <picture className='relative block rounded-lg aspect-[4/5] h-screen w-full md:aspect-square md:h-[80dvh] lg:max-w-xl md:max-h-none max-h-80'>
              <source media='(max-width: 520px)' srcSet={lab} />
              <source media='(min-width: 521px)' srcSet={lab} />
              <source media='(max-width: 1440px)' srcSet={lab} />
              <source media='(min-width: 1920px)' srcSet={lab} />
              <Image
                className='object-contain rounded-lg'
                src={lab}
                fill
                sizes='100vw'
                alt={'hero'}
              />
            </picture>
          </Box>
          <Box>
            <Heading
              as='h2'
              size={{
                base: 'md',
                md: 'lg',
              }}
              fontWeight={'bold'}
              textAlign={{
                base: 'center',
                lg: 'start',
              }}
              mb={{
                lg: '4',
              }}
            >
              Extraction Method
            </Heading>
            <Box
              display={{
                base: 'block',
                lg: 'none',
              }}
              mt={{
                base: '4',
              }}
            >
              <picture className='relative block aspect-[4/5] h-screen w-full md:aspect-square xl:h-[60dvh] lg:max-w-xl xl:max-h-none max-h-80'>
                <source media='(max-width: 520px)' srcSet={lab} />
                <source media='(min-width: 521px)' srcSet={lab} />
                <source media='(max-width: 1440px)' srcSet={lab} />
                <source media='(min-width: 1920px)' srcSet={lab} />
                <Image
                  className='object-contain'
                  src={lab}
                  fill
                  sizes='100vw'
                  alt={'hero'}
                />
              </picture>
            </Box>
            <Text
              lineHeight={'shorter'}
              textAlign={{
                base: 'center',
                lg: 'start',
              }}
              mt={{
                base: '4',
              }}
            >
              The extraction typically involves crushing or pressing the seeds
              to extract the precious oil within. This oil is then carefully
              filtered and refined to ensure its purity and quality. The result
              is a rich and nourishing oil that's loaded with essential fatty
              acids, vitamins, and antioxidants. Creating a natural elixir
              that's cherished for its ability to rejuvenate and enhance skin
              and hair health.
            </Text>
          </Box>
        </Stack>
      </Stack>
    </BaseLayout>
  )
}

export default Knowledge
