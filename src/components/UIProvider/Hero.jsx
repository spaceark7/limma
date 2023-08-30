import React from 'react'

import { getHeroSection } from '@/sanity/sanity-utils'
import HeroDetail from './HeroDetail'

export default async function Hero() {
  const content = await getHeroSection()

  return <HeroDetail content={content} />
}
