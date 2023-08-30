'use client'
import {
  Box,
  Button,
  Divider,
  HStack,
  Heading,
  useMediaQuery,
} from '@chakra-ui/react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

import React from 'react'

const MarkerplaceStore = ({ marketplace }) => {
  const mobileScreen = useMediaQuery('(max-width: 640px)')
  const router = useRouter()

  return (
    <Box>
      <Heading as='h3' size={'md'} textAlign={'center'} fontWeight={'bold'}>
        You can buy our product at
      </Heading>
      <Divider orientation='horizontal' />
      <HStack spacing={4} mt={12} justifyContent={'center'} flexWrap={'wrap'}>
        {marketplace?.length &&
          marketplace.map((item, index) => (
            <Button
              key={index}
              variant='ghost'
              colorScheme='black'
              onClick={() => router.push(item.marketplace_url)}
              leftIcon={
                <Image
                  src={item.logo}
                  alt={item.title}
                  height={mobileScreen[0] ? 80 : 120}
                  width={mobileScreen[0] ? 80 : 120}
                />
              }
            ></Button>
          ))}
      </HStack>
    </Box>
  )
}

export default MarkerplaceStore
