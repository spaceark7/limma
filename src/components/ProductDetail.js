import React from 'react'

import { Box, Divider, Heading, Stack } from '@chakra-ui/react'

import ProductCarousel from './ProductCarousel'

import MarkerplaceStore from './MarkerplaceStore'

export default function ProductDetail({ products = [], marketplace = [] }) {
  return (
    <Stack
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
      <ProductCarousel products={products} />
      <MarkerplaceStore marketplace={marketplace} />
    </Stack>
  )
}
