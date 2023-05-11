import Navbar from '@components/navbar'
import Footer from '@components/footer'
import FloatingActionButtons from '@components/fab'
import { contents, items } from '@helpers/international_data'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Link from 'next/link'

const International = ({ articlesData }) => {
  console.log(articlesData)

  return (
    <>
      <Navbar />
      <div className="px-4 py-12 container-body">
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        ></link>
        <div className="flex flex-col lg:flex-row">
          <div className="overflow-x-auto lg:w-9/12">
            <h1 className="text-lg font-bold leading-7 text-left mt-0 text-[24px]">International Affairs</h1>
            <img className="place-self-center" src={'/international.jpg'} width={800} height={300}></img>
            <p className="leading-loose text-gray-500 body-font mb-7">
              The PUP Office of International Affairs is engaged in a wide variety of programs and activities aligned
              with the vision of President Manuel M. Muhi towards establishment of PUP as a National Polytechnic
              University.
            </p>
            <p className="leading-loose text-gray-500 body-font mb-7">
              Thus, the Office for International Affairs provides leadership and coordination for all University-wide
              international activities for coherence and integration of the institution's international linkages,
              cooperation, exchanges, programs and services:
            </p>
            <ul className="text-gray-500 list-disc list-inside body-font">
              {items.map((item) => (
                <li key={item.text} className="mb-2">
                  {item.text}
                </li>
              ))}
            </ul>
            <div className="flex flex-col">
              <div className="flex flex-row ">
                <h4 className="items-start justify-start w-full mt-6 mb-6 text-left border-b border-gray-300">
                  <a className="text-base font-semibold underline underline-offset-8" href="/announcements">
                    Articles
                  </a>
                </h4>
                <div className="flex mt-7 w-9">
                  <button
                    // onClick={handlePrevSlide}
                    className="flex flex-wrap items-center justify-center w-20 h-5 text-sm text-gray-400 border rounded hover:text-white hover:bg-maroon"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={4}
                      stroke="currentColor"
                      className="w-3 h-3"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                    </svg>
                  </button>
                  <button
                    // onClick={handleNextSlide}
                    className="flex flex-wrap items-center justify-center w-20 h-5 text-sm text-gray-400 border rounded hover:text-white hover:bg-maroon"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={4}
                      stroke="currentColor"
                      className="w-3 h-3"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="flex flex-col justify-between pb-6 md:flex-row">
                {articlesData &&
                  articlesData.map((value, key) => (
                  
                    <div className="image-container" key={key}>
                      
                      <img src={value.main_article_photo} className=" articles-img" />
                      
                        <div className="overlay">
                          <div className="overlay-content">
                            <div className="note-icon">
                              <Link legacyBehavior key={key} href={{ pathname: `/international/${value.id}` }}>
                              <i class="fa fa-file-text-o"></i></Link>
                            </div>
                          </div>
                        </div>
                      

                      <div className="flex flex-col lg:pt-5 hover:underline">
                        <Link legacyBehavior href={{ pathname: `/international/${value.id}` }}>
                        <p
                          
                          className="font-bold text-center text-red-800 body-font lg:text-left "
                        >
                          {value.title}
                        </p></Link>
                        <p className="text-xs text-center text-gray-500 lg:text-left">{value.created_at}</p>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
          <div className="lg:px-4 lg:w-3/12">
            <div className="overflow-hidden mb-50">
              <h4 className="mt-10 text-[14px] text-left lg:mt-0 font-thin">CONTENTS</h4>
              <div className="absolute block w-10 h-0.5 bg-gray-300"></div>
              <ul className="block w-full pt-2 text-gray-500 divide-y mt-">
                {contents.map((content, index) => (
                  <li className="py-1.5" key={index}>
                    <p className="text-left transition duration-300 ease-in-out transform hover:text-red-800 hover:translate-x-2">
                      <a className="body-font" href={content.link}>
                        {content.name}
                      </a>
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <FloatingActionButtons />
    </>
  )
}

export async function getStaticProps() {
  // static site generation (data)
  let data = []
  await axios.get('https://api.ahglab.com/api:W7k9W8HQ/articles').then(function (response) {
    data = response.data
  })

  return {
    props: {
      articlesData: data,
    },
    revalidate: 60,
  }
}

export default International
