import FooterItem from '@components/footer-item'
import Title from '@components/title'
import { useState } from 'react'
import NavTop from '@components/navbar'
import Homepage from '@containers/home'
import Footer from '@components/footer'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

const HomepageContainer = () => {
  return (
    <>
      <NavTop />
      <Homepage />
      <Footer />
    </>
  )
}

export default HomepageContainer
