'use client'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import Knowledge from '@/components/Knowledge'
import NavBar from '@/components/NavBar'
import Product from '@/components/Product'
import Hero from '@/components/UIProvider/Hero'
import React from 'react'

const MainPages = () => {
  const heroRef = React.useRef(null)
  const knowledgeRef = React.useRef(null)
  const productRef = React.useRef(null)
  const contactRef = React.useRef(null)

  return (
    <main className='relative '>
      <NavBar
        heroRef={heroRef}
        storyRef={knowledgeRef}
        productRef={productRef}
        contactRef={contactRef}
      />

      <section ref={heroRef} className='bg-[#fdf4e3]'>
        <Hero />
      </section>

      <section ref={knowledgeRef}>
        <Knowledge />
      </section>

      <section ref={productRef} className='bg-[#fdf4e3]'>
        <Product />
      </section>

      <section ref={contactRef}>
        <Contact />
      </section>

      <footer>
        <Footer />
      </footer>
    </main>
  )
}

export default MainPages
