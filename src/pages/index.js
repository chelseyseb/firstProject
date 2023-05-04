import NavTop from '@components/navbar'
import Homepage from '@containers/home'
import Footer from '@components/footer'
import { Inter } from 'next/font/google'
import { Slider } from '@containers/slider'
import Modal from '@components/modal'
import { useState, useEffect } from 'react'


const HomepageContainer = () => {
  return (
    <>
      {/* <Modal /> */}
      <NavTop />
      <Slider />
      <Homepage />
      <Footer />
    </>
  )
}

export default HomepageContainer
