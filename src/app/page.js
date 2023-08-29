import MainPages from '@/pages/MainPages'
import { getHeroSection, getTestSection } from '@/sanity/sanity-utils'

export default async function Home() {
  const hero_data = await getHeroSection()
  const test_data = await getTestSection()

  console.log(hero_data)
  console.log(test_data)
  return (
    <main className='min-h-screen'>
      <MainPages />
    </main>
  )
}
