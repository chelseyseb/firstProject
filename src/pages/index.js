import Navbar from '@components/navbar'
import Homepage from '@containers/home'
import Footer from '@components/footer'
import { Inter } from 'next/font/google'
import { Slider } from '@containers/slider'
import Modal from '@components/modal'
import { useState, useEffect } from 'react'
import FloatingActionButtons from '@components/fab'


const HomepageContainer = () => {

  return (
    <>
      {/* <Modal /> */}
      <Navbar />
      <Slider />
      <Homepage />
      <Footer />
      <FloatingActionButtons/>
    </>
    
  )
}

export default HomepageContainer
