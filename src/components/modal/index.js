import { useState, useEffect } from 'react'
import Link from 'next/link'
import { images, buttons } from '@helpers/modal_data'
import Image from 'next/image'
import React from 'react'

export default function modal() {
  return (
    <div className="container">
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      ></link>

        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
          <div className="relative items-center justify-center block modal-bg">
            <div className="relative ">
              <div className="flex flex-col ">
                <h2 className="">
                  <button type="button" className="float-right pr-4 text-sm ">
                    <span aria-hidden="true">x</span>
                  </button>
                  <span>Welcome to the</span>
                  <br />
                  Polytechnic University of the Philippines
                </h2>
                <p className="items-center justify-center text-sm text-center text-gray-600">
                  Please click/tap the appropriate link to help you in your navigation of our services
                </p>
                <div className="">
                  <div className="grid justify-center w-full grid-flow-col grid-rows-1 gap-2">
                    <div className="grid grid-flow-row">
                      <Image className="place-self-center" src={'/logo200.png'} width={200} height={200}></Image>
                      <div className="grid grid-flow-col">
                        <Image src={'/ts100.png'} width={100} height={100}></Image>
                        <Image src={'/foi100.png'} width={100} height={100}></Image>
                        <Image src={'/iso100.png'} width={100} height={100}></Image>
                      </div>
                    </div>
                    <div className="grid grid-flow-row grid-rows-1 gap-0">
                      {buttons.map((button, index) => (
                        <React.Fragment key={index}>
                          {button.link.startsWith('http') || button.link.startsWith('https') ? (
                            <a className="items-center justify-center" href={button.link} target="_blank">
                              <button className="px-2 w-full mt-2 text-left py-1.5 text-white bg-red-900 rounded-none">
                                <i className={`fa ${button.icon} px-2`}></i>&nbsp;{button.label}
                              </button>
                            </a>
                          ) : (
                            <Link legacyBehavior href={button.link}>
                              <a className="items-center justify-center">
                                <button className="w-full py-1.5 px-2 mt-2 text-left text-white bg-red-900 rounded-none">
                                  <i className={`fa ${button.icon} px-2`}></i>&nbsp;{button.label}
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
          {/* <div className="fixed inset-0 z-50 bg-black opacity-25"></div> */}
        </div>

      {/* </div> */}

      {/* <span onclick="javascript:$('#ModalServiceCentric').modal();" class="services-widget">
        <i class="fa fa-desktop"></i>&nbsp;Show services menu
      </span>{' '}
      <a href="#" class="back-to-top">
        <i class="fa fa-angle-up"></i>
      </a> */}
    </div>
  )
}
