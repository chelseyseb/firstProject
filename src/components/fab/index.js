import { useState, useEffect } from 'react'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
import { images, buttons } from '@helpers/modal_data'
import Image from 'next/image'
import React from 'react'

const FloatingActionButtons = () => {
  const [visible, setVisible] = useState(false)
  const [ShowModal, setShowModal] = useState(true)

  const handleCloseModal = () => {
    setShowModal(false)
  }

  function handleButtonClick() {
    setShowModal(true)
  }

  function handleClickOutside(event) {
    if (event.target === event.currentTarget) {
      handleCloseModal();
    }
  }

  const toggleVisibility = () => {
    if (window.pageYOffset > 400) {
      setVisible(true)
    } else {
      setVisible(false)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  return (
    <>
      {ShowModal && (
        <div className="container" >
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
          ></link>
          <link href="https://fonts.googleapis.com/css2?family=Cinzel&display=swap" rel="stylesheet"></link>

          <div onClick={handleClickOutside} className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-x-hidden outline-none focus:outline-none">
            <div className="relative items-center justify-center modal-bg">
              <div className="relative mx-4 mb-4">
                <div className="flex flex-col ">
                  <div>
                    <h2 className="my-5 text-lg font-bold text-center text-red-950 cinzel">
                      <button
                        type="button"
                        className="float-right text-gray-400 hover:text-gray-500"
                        onClick={handleCloseModal}
                      >
                        <FontAwesomeIcon icon={faTimes} height={11} width={11} />
                      </button>
                      <small>Welcome to the</small>
                      <br />
                      Polytechnic University of the Philippines
                    </h2>
                    <p className="items-center justify-center mb-5 text-sm text-center text-gray-600">
                      Please click/tap the appropriate link to help you in your navigation of our services
                    </p>
                  </div>
                  <div className="flex flex-col items-center justify-center md:flex-row">
                    <div className="flex flex-col md:flex-row">
                      <div className="flex flex-col justify-center w-full">
                        <Image className="place-self-center" src={'/logo200.png'} width={200} height={200}></Image>
                        <div className="grid grid-flow-col m-4 place-self-center">
                          <Image src={'/ts100.png'} width={100} height={100}></Image>
                          <Image src={'/foi100.png'} width={100} height={100}></Image>
                          <Image src={'/iso100.png'} width={100} height={100}></Image>
                        </div>
                      </div>
                      <div className="w-full ">
                        {buttons.map((button, index) => (
                          <React.Fragment key={index}>
                            {button.link.startsWith('http') || button.link.startsWith('https') ? (
                              <a className="items-center justify-center text-sm" href={button.link} target="_blank">
                                <button className="w-full px-2 py-2 mt-1 text-left text-white bg-red-900 rounded-none ">
                                  <p className="antialiased text-white transition duration-150 ease-in-out transform modal-p hover:translate-x-2">
                                    <i className={`fa ${button.icon} px-2`}></i>&nbsp;{button.label}
                                  </p>
                                </button>
                              </a>
                            ) : (
                              <Link legacyBehavior href={button.link}>
                                <a className="items-center justify-center text-sm ">
                                  <button className="w-full px-2 py-2 mt-1 text-left bg-red-900 rounded-none hover:bg-red-950">
                                    <p className="antialiased text-white transition duration-150 ease-in-out transform modal-p hover:translate-x-2">
                                      <i className={`fa ${button.icon} px-2  `}></i>
                                      {button.label}
                                    </p>
                                  </button>
                                </a>
                              </Link>
                            )}
                          </React.Fragment>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="fixed inset-0 z-40 bg-black opacity-80"></div>
        </div>
      )}
      <div className='z-30'>
      <button
        class="fixed items-center group body-font bottom-48 right-4 services-widget w-10 h-10 opacity-50 transition-all duration-500 
        ease-in-out hover:w-44 hover:bg-gray-600 bg-gray-400 rounded-full"
        onClick={handleButtonClick}
      >
        <span className="group-hover:flex">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="white" width={40} class="mt-1 ml-1">
            <path
              fillRule="evenodd"
              d="M2 4.25A2.25 2.25 0 014.25 2h11.5A2.25 2.25 0 0118 4.25v8.5A2.25 2.25 0 0115.75 15h-3.105a3.501 3.501 0 001.1 1.677A.75.75 0 0113.26 18H6.74a.75.75 0 01-.484-1.323A3.501 3.501 0 007.355 15H4.25A2.25 2.25 0 012 12.75v-8.5zm1.5 0a.75.75 0 01.75-.75h11.5a.75.75 0 01.75.75v7.5a.75.75 0 01-.75.75H4.25a.75.75 0 01-.75-.75v-7.5z"
              clipRule="evenodd"
            />
          </svg>
          <p className="ml-1 mr-2 text-center text-white body-font">Show services menu</p>
        </span>
      </button>
      <button
        className={`fixed bottom-14 bg-yellow-300 rounded-full hover:opacity-100 hover:bg-yellow-500 w-10 h-10 right-4 z-10 ${
          visible ? "block" : "hidden"
        }`}
        onClick={scrollToTop}
      >
        <FontAwesomeIcon icon={faChevronUp} size="2x" className="text-white" />
      </button>
      <button class="fixed w-9 h-9 bg-red-900 services-widget bottom-32 right-5 rounded-full">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width={25} className="ml-2" fill="white">
          <path d="M256.55 8C116.52 8 8 110.34 8 248.57c0 72.3 29.71 134.78 78.07 177.94 8.35 7.51 6.63 11.86 8.05 58.23A19.92 19.92 0 0 0 122 502.31c52.91-23.3 53.59-25.14 62.56-22.7C337.85 521.8 504 423.7 504 248.57 504 110.34 396.59 8 256.55 8zm149.24 185.13l-73 115.57a37.37 37.37 0 0 1-53.91 9.93l-58.08-43.47a15 15 0 0 0-18 0l-78.37 59.44c-10.46 7.93-24.16-4.6-17.11-15.67l73-115.57a37.36 37.36 0 0 1 53.91-9.93l58.06 43.46a15 15 0 0 0 18 0l78.41-59.38c10.44-7.98 24.14 4.54 17.09 15.62z" />
        </svg>
      </button></div>
    </>
  )
}

export default FloatingActionButtons
