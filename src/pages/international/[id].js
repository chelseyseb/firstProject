import Navbar from '@components/navbar'
import Footer from '@components/footer'
import FloatingActionButtons from '@components/fab'
import { contents, items } from '@helpers/international_data'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'

const Articles = ({ article }) => {
  const router = useRouter()
  const { id } = router.query

  return (
    <>
      <Navbar />
      <div>
        <div className="border-b">
          <div className="flex place-items-start container-body">
            <h2 className="mt-6 mb-6 ml-2 text-lg">University News No.{router.asPath}</h2>
          </div>
        </div>
        <div className="px-2 py-12 container-body">
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
          ></link>
          <div className="flex flex-col lg:flex-row">
            <div className="overflow-x-auto lg:w-9/12">
              <div>
                <h1 className="text-lg font-bold leading-7 text-left mt-0 text-[24px]">{article.title}</h1>
                <hr className="h-px my-4 bg-gray-200 border-0 dark:bg-gray-200" />
                <p className="leading-loose text-gray-500 body-font mb-7">{article.content}</p>
                <div className="flex justify-center">
                  <img src={article.images} alt="Image 1" className="w-32 h-32 m-2" />
                  <img src="image2.jpg" alt="Image 2" className="w-32 h-32 m-2" />
                  <img src="image3.jpg" alt="Image 3" className="w-32 h-32 m-2" />
                </div>
                <img src={article.main_article_photo} alt="Main Content Image" className="w-full mt-8" />
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
          </div>{' '}
        </div>
      </div>
      <Footer />
      <FloatingActionButtons />
    </>
  )
}

export async function getStaticPaths() {
  // static generation of paths/links
  let data = []
  await axios.get('https://api.ahglab.com/api:W7k9W8HQ/articles').then(function (response) {
    data = response.data
  })

  const idPaths = data.map((value) => {
    return {
      params: {
        id: value.id.toString(),
      },
    }
  })

  return {
    paths: idPaths,
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  // static site generation (data)

  let article = []
  await axios.get(`https://api.ahglab.com/api:W7k9W8HQ/articles?id=${params.id}`).then(function (response) {
    article = response.data
  })

  return {
    props: {
      article: article,
    },
    revalidate: 60,
  }
}
export default Articles
