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

  return (
    <>
    {ShowModal && (
    <div className="container z-50">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      <link href="https://fonts.googleapis.com/css2?family=Cinzel&display=swap" rel="stylesheet"></link>

      <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
        <div className="relative items-center justify-center modal-bg">
          <div className="relative mx-4 mb-4">
            <div className="flex flex-col ">
              
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
              </p>
              <div className="">
                <div className="grid justify-between w-full grid-flow-col grid-rows-1 ">
                  <div className="grid justify-end grid-flow-row col-span-2">
                    <Image className="place-self-center" src={'/logo200.png'} width={200} height={200}></Image>
                    <div className="grid grid-flow-col">
                      <Image src={'/ts100.png'} width={100} height={100}></Image>
                      <Image src={'/foi100.png'} width={100} height={100}></Image>
                      <Image src={'/iso100.png'} width={100} height={100}></Image>
                    </div>
                  </div>
                  <div className="grid grid-flow-row col-span-3 grid-rows-1 gap-0">
                    {buttons.map((button, index) => (
                      <React.Fragment key={index}>
                        {button.link.startsWith('http') || button.link.startsWith('https') ? (
                          <a className="items-center justify-center text-sm" href={button.link} target="_blank">
                            <button className="w-full px-2 py-2 mt-1 text-left text-white bg-red-900 rounded-none">
                              <p className="text-white transition duration-150 ease-in-out transform hover:translate-x-2">
                                <i className={`fa ${button.icon} px-2`}></i>&nbsp;{button.label}
                              </p>
                            </button>
                          </a>
                        ) : (
                          <Link legacyBehavior href={button.link}>
                            <a className="items-center justify-center text-sm ">
                              <button className="w-full px-2 py-2 mt-1 text-left bg-red-900 rounded-none hover:bg-red-950">
                                <p className="text-white transition duration-150 ease-in-out transform hover:translate-x-2">
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
      </div><div className="fixed inset-0 z-40 bg-black opacity-80"></div>
    </div> 
    )}</>
  )
  }
