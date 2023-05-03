import NavTop from '@components/navbar'
import Homepage from '@containers/home'
import Footer from '@components/footer'
import { Inter } from 'next/font/google'
import { Slider } from '@containers/slider'

const inter = Inter({ subsets: ['latin'] })

const HomepageContainer = () => {
  return (
    <>
      <NavTop />
      <Slider />
      <Homepage />
      <Footer />
    </>
  )
}

export default HomepageContainer
