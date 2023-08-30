'use client'
import { Box, useMediaQuery } from '@chakra-ui/react'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import React from 'react'
import ProductCard from './ProductCard'
import '@splidejs/react-splide/css'

const ProductCarousel = ({ products }) => {
  const mobileScreen = useMediaQuery('(max-width: 640px)')
  return (
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
        {products?.length &&
          products.map((item, index) => (
            <SplideSlide key={index}>
              <ProductCard item={item} />
            </SplideSlide>
          ))}
      </Splide>
    </Box>
  )
}

export default ProductCarousel
