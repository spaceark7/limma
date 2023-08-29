import { Container } from '@chakra-ui/react'
import React from 'react'

const BaseLayout = ({ children }) => {
  return (
    <Container
      maxW={{
        base: '100%',
        sm: 'container.sm',
        md: 'container.md',
        lg: 'container.lg',
        '2xl': '1440px',
      }}
      px={{
        base: '4',
        sm: '6',
      }}
      py={{
        base: '16',
        sm: '20',
      }}
    >
      {children}
    </Container>
  )
}

export default BaseLayout
