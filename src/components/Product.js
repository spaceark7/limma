import React, { Suspense } from 'react'
import BaseLayout from './BaseLayout'
import {
  Box,
  Button,
  Divider,
  HStack,
  Heading,
  Stack,
  useMediaQuery,
} from '@chakra-ui/react'

import { getMarketplaceSection, getProductSection } from '@/sanity/sanity-utils'
import ProductCarousel from './ProductCarousel'
import Image from 'next/image'
import MarkerplaceStore from './MarkerplaceStore'
import ProductDetail from './ProductDetail'

export default async function Product() {
  const products = await getProductSection()
  const marketplace = await getMarketplaceSection()
  return (
    <>
      <BaseLayout>
        <ProductDetail products={products} marketplace={marketplace} />
      </BaseLayout>
    </>
  )
}
