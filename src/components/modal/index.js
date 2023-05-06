import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
import { images, buttons } from '@helpers/modal_data'
import Image from 'next/image'
import React from 'react'
import { useState } from 'react';

export default function Modal() {
  const [ShowModal, setShowModal] = useState(true);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  function handleButtonClick() {
    setShowModal(true);
  }

  return (
    <>
    {ShowModal && (
    <div className="container ">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      <link href="https://fonts.googleapis.com/css2?family=Cinzel&display=swap" rel="stylesheet"></link>

      <div className="fixed z-50 flex items-center justify-center p-4 overflow-x-hidden overflow-y-auto outline-none lg:inset-0 focus:outline-none">
        <div className="relative items-center justify-center modal-bg">
          <div className="relative mx-4 mb-4">
            <div className="flex flex-col ">
              <div>
              <h2 className="my-5 text-lg font-bold text-center text-red-950 cinzel">
                <button type="button" className="float-right text-gray-400 hover:text-gray-500" onClick={handleCloseModal}>
                  <FontAwesomeIcon icon={faTimes} height={11} width={11} />
                </button>
                <small>Welcome to the</small>
                <br />
                Polytechnic University of the Philippines
              </h2>
              <p className="items-center justify-center mb-5 text-sm text-center text-gray-600">
                Please click/tap the appropriate link to help you in your navigation of our services
              </p></div>
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
      </div><div className="fixed inset-0 z-40 bg-black opacity-80">
      <button
        class="fixed items-center group body-font bottom-48 right-4 services-widget w-10 h-10 opacity-50 transition-all duration-500 
        ease-in-out hover:w-44 hover:bg-gray-600 bg-gray-400 rounded-full" onClick={handleButtonClick}
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
      </div>
    </div> 
    )}</>
  )
  }
