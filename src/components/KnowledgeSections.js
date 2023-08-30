/* eslint-disable react/no-unescaped-entities */
import { Box, Heading, Stack, Text } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'

const KnowledgeSections = ({ data, leftImage }) => {
  return (
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
      {leftImage ? (
        <>
          <Box
            display={{
              base: 'none',
              lg: 'block',
            }}
          >
            <picture className='relative block rounded-lg aspect-[4/5] h-screen w-full md:aspect-square md:h-[80dvh] lg:max-w-xl md:max-h-none max-h-80'>
              <source media='(max-width: 520px)' srcSet={data.image} />
              <source media='(min-width: 521px)' srcSet={data.image} />
              <source media='(max-width: 1440px)' srcSet={data.image} />
              <source media='(min-width: 1920px)' srcSet={data.image} />
              <Image
                className='object-contain rounded-lg'
                src={data.image}
                fill
                sizes='100vw'
                alt={data.title}
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
              {data.title}
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
                <source media='(max-width: 520px)' srcSet={data.image} />
                <source media='(min-width: 521px)' srcSet={data.image} />
                <source media='(max-width: 1440px)' srcSet={data.image} />
                <source media='(min-width: 1920px)' srcSet={data.image} />
                <Image
                  className='object-contain'
                  src={data.image}
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
              {data.content}
            </Text>
          </Box>
        </>
      ) : (
        <>
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
              {data.title}
            </Heading>
            <Box
              display={{
                base: 'block',
                lg: 'none',
              }}
            >
              <picture className='relative block aspect-[4/5] h-screen w-full md:aspect-square xl:h-[60dvh] lg:max-w-xl xl:max-h-none max-h-80'>
                <source media='(max-width: 520px)' srcSet={data.image} />
                <source media='(min-width: 521px)' srcSet={data.image} />
                <source media='(max-width: 1440px)' srcSet={data.image} />
                <source media='(min-width: 1920px)' srcSet={data.image} />
                <Image
                  className='object-contain'
                  src={data.image}
                  fill
                  sizes='100vw'
                  alt={data.title}
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
              {data.content}
            </Text>
          </Box>
          <Box
            display={{
              base: 'none',
              lg: 'block',
            }}
          >
            <picture className='relative block aspect-[4/5] h-screen w-full md:aspect-square xl:h-[60dvh] lg:max-w-xl xl:max-h-none max-h-80'>
              <source media='(max-width: 520px)' srcSet={data.image} />
              <source media='(min-width: 521px)' srcSet={data.image} />
              <source media='(max-width: 1440px)' srcSet={data.image} />
              <source media='(min-width: 1920px)' srcSet={data.image} />
              <Image
                className='object-contain'
                src={data.image}
                fill
                sizes='100vw'
                alt={'hero'}
              />
            </picture>
          </Box>
        </>
      )}
    </Stack>
  )
}

export default KnowledgeSections
