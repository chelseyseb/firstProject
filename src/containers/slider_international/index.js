// import { useState } from 'react';

// const Carousel = ({ articles }) => {

//   const [currentSlide, setCurrentSlide] = useState(0);

//   const handleNextSlide = () => {
//     const maxSlide = articles.length - 3;
//     const newSlide = currentSlide === maxSlide ? 0 : currentSlide + 1;
//     setCurrentSlide(newSlide);
//   };

//   const handlePrevSlide = () => {
//     const maxSlide = articles.length - 3;
//     const newSlide = currentSlide === 0 ? maxSlide : currentSlide - 1;
//     setCurrentSlide(newSlide);
//   };

//   const visibleArticles = articles.slice(currentSlide, currentSlide + 3);

//   return (
//     <div className="flex items-center justify-between">
//       <button className="p-2 bg-gray-200 rounded-full" onClick={handlePrevSlide}>
//         &lt;
//       </button>
//       <div className="flex">
//         {visibleArticles.map((article, articleIndex) => (
//           <div className="image-container" key={articleIndex}>
//             <img src={article.src} alt={`Image ${articleIndex}`} className="articles-img" />

//             <div className="flex flex-col lg:pt-5 hover:underline">
//               <a href={article.link} className="font-bold text-red-800 body-font lg:text-left ">
//                 {article.title}
//               </a>
//               <p className="text-xs text-center text-gray-500 lg:text-left">{article.date}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//       <button className="p-2 bg-gray-200 rounded-full" onClick={handleNextSlide}>
//         &gt;
//       </button>
//     </div>
//   );
// };

// export default Carousel;

import { useState, useRef, useEffect } from 'react'
import { articles } from '@helpers/international_data'

const Carousel = () => {
  const maxScrollWidth = useRef(0)
  const [currentIndex, setCurrentIndex] = useState(0)
  const carousel = useRef(null)

  const movePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1)
    }
  }

  const moveNext = () => {
    if (carousel.current !== null && carousel.current.offsetWidth * currentIndex <= maxScrollWidth.current) {
      setCurrentIndex((prevState) => prevState + 1)
    }
  }

  const isDisabled = (direction) => {
    if (direction === 'prev') {
      return currentIndex <= 0
    }

    if (direction === 'next' && carousel.current !== null) {
      return carousel.current.offsetWidth * currentIndex >= maxScrollWidth.current
    }

    return false
  }

  useEffect(() => {
    if (carousel !== null && carousel.current !== null) {
      carousel.current.scrollLeft = carousel.current.offsetWidth * currentIndex
    }
  }, [currentIndex])

  useEffect(() => {
    maxScrollWidth.current = carousel.current ? carousel.current.scrollWidth - carousel.current.offsetWidth : 0
  }, [])

  return (
    <div className="px-4 py-12 container-body">
    <div className="flex flex-col carousel">
      <div className='flex flex-row justify-between"'>
        <h4 className="items-start justify-start">
          <a className="font-semibold underline underline-offset-8" href="/announcements">
            Latest News from the University
          </a>
        </h4>
      
      <div className="relative w-9/12 overflow-hidden">
        <div className="flex pt-5 w-9">
          <button
            onClick={movePrev}
            className="flex flex-wrap items-center justify-center w-20 h-5 text-sm text-gray-400 border rounded"
            disabled={isDisabled('prev')}
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
                  onClick={moveNext}
                  className="flex flex-wrap items-center justify-center w-20 h-5 text-sm text-gray-400 border rounded"
                  disabled={isDisabled('next')}
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
        </div></div>
        <div
          ref={carousel}
          className="relative z-0 flex gap-1 overflow-hidden carousel-container scroll-smooth snap-x snap-mandatory touch-pan-x"
        >
          {articles.map((article, index) => {
            return (
              <div
                key={index}
                className="relative w-64 h-64 text-center carousel-item snap-start"
              >
                <a
                  href={article.link}
                  className="z-0 block w-full h-full bg-left-top bg-no-repeat bg-cover aspect-square bg-origin-padding"
                  
                >
                  <img
                    src={article.src}
                    alt={article.title}
                    className="hidden w-full aspect-square"
                  />
                </a>
                <a
                  href={article.link}
                  className="absolute top-0 left-0 z-10 block w-full h-full transition-opacity duration-300 opacity-0 aspect-square hover:opacity-100 bg-blue-800/75"
                >
                  <h3 className="px-3 py-6 mx-auto text-xl text-white">
                    {article.title}
                  </h3>
                </a>
              </div>
            );
          })}
        </div>
      </div>
      
    </div>
    </div>
  )
}

export default Carousel
