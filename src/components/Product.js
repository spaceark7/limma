import React from 'react'
import BaseLayout from './BaseLayout'
import {
  Box,
  Button,
  Divider,
  HStack,
  Heading,
  Stack,
  Text,
  useMediaQuery,
} from '@chakra-ui/react'
import '@splidejs/react-splide/css'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import Image from 'next/image'
import lab from '@/assets/product-1.webp'
import indomaret from '@/assets/indomaret.png'
import alfamart from '@/assets/alfamart.png'
import shopee from '@/assets/shoppee.png'
import tokped from '@/assets/tokped.png'

import ProductCard from './ProductCard'

const mock = [
  {
    id: 1,
    title: 'Limma Hair Oil',
    size: '50ml',
    image: lab,
  },
  {
    id: 2,
    title: 'Limma Hair Oil',
    size: '100ml',
    image: lab,
  },
  {
    id: 3,
    title: 'Limma Hair Oil',
    size: '150ml',
    image: lab,
  },
  {
    id: 4,
    title: 'Limma Hair Oil',
    size: '150ml',
    image: lab,
  },
  {
    id: 5,
    title: 'Limma Hair Oil',
    size: '150ml',
    image: lab,
  },
]

const mockstore = [
  {
    id: 1,
    title: 'Shopee',
    image: shopee,
  },
  {
    id: 2,
    title: 'Tokopedia',
    image: tokped,
  },
  {
    id: 3,
    title: 'Indomaret',
    image: indomaret,
  },
  {
    id: 4,
    title: 'Alfamart',
    image: alfamart,
  },
]

const Product = ({ ref }) => {
  const mobileScreen = useMediaQuery('(max-width: 640px)')

  return (
    <>
      <BaseLayout>
        <Stack
          ref={ref}
          spacing={{
            base: '12',
            md: '16',
          }}
        >
          <Box>
            <Heading as='h2' textAlign={'center'} fontWeight={'bold'}>
              Our Product
            </Heading>

            <Divider orientation='horizontal' />
          </Box>
          <Box>
            <Splide
              options={{
                lazyLoad: 'nearby',
                perMove: 1,
                perPage: mobileScreen[0] ? 1 : 3,
                gap: '2.7rem',
                pagination: false,
                mediaQuery: 'min',
                autoplay: true,
                arrows: true,
              }}
              className='relative scroll-px-4 rounded-md'
            >
              {mock.map((item, index) => (
                <SplideSlide key={index}>
                  <ProductCard item={item} />
                </SplideSlide>
              ))}
            </Splide>
          </Box>

          <Box>
            <Heading
              as='h3'
              size={'md'}
              textAlign={'center'}
              fontWeight={'bold'}
            >
              You can buy our product at
            </Heading>
            <Divider orientation='horizontal' />
            <HStack
              spacing={4}
              mt={12}
              justifyContent={'center'}
              flexWrap={'wrap'}
            >
              {mockstore.map((item, index) => (
                <Button
                  key={index}
                  variant='ghost'
                  colorScheme='black'
                  leftIcon={
                    <Image
                      src={item.image}
                      alt={item.title}
                      height={mobileScreen[0] ? 80 : 120}
                      width={mobileScreen[0] ? 80 : 120}
                    />
                  }
                ></Button>
              ))}
            </HStack>
          </Box>
        </Stack>
      </BaseLayout>
    </>
  )
}

export default Product
