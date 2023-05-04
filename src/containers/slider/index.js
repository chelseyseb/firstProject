import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { useState } from 'react'

export const Slider = () => {
  const sliderImages = [
    { src: '/pup.jpg' },
    { src: '/1st.jpg' },
    { src: '/2nd.jpg' },
    { src: '/3rd.jpg' },
    { src: '/4th.jpg' },
    { src: '/5th.jpg' },
    { src: '/6th.jpg' },
    { src: '/7th.jpg' },
  ]

  const [isHovered, setIsHovered] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [arrowHovered, setArrowHovered] = useState(false)

  const arrow = {
    position: 'absolute',
    top: '47%',
    transform: 'translateY(-50%)',
    zIndex: 2,
    backgroundColor: arrowHovered ? '#111' : 'rgba(0,0,0,0.3)',
    opacity: isHovered ? 0.5 : 0,
    borderRadius: '5px',
    width: '120px',
    height: '120px',
    cursor: 'pointer',
    fontSize: '1em',
    transition: 'opacity 0.5s ease',
    color: arrowHovered ? '#888' : '#fff',
  }
  const handlePrev = () => {
    setCurrentImageIndex((currentImageIndex - 1 + sliderImages.length) % sliderImages.length)
  }

  const handleNext = () => {
    setCurrentImageIndex((currentImageIndex + 1) % sliderImages.length)
  }

  const customIndicator = (onClickHandler, isSelected, index, label) => {
    const indicatorStyle = {
      width: `15px`,
      height: `5px`,
      margin: '0 5px',
      cursor: 'pointer',
      borderRadius: '50%',
      backgroundColor: isSelected ? '#fff' : '#555',
      transition: 'opacity 0.5s ease',
      opacity: isHovered ? 0.7 : 0,
    }
    return (
      <li
        className={`${isSelected ? 'selected' : ''} inline-block pb-5`}
        style={indicatorStyle}
        onClick={onClickHandler}
        onKeyDown={onClickHandler}
        role="button"
        tabIndex="0"
      />
    )
  }

  return (
    <div className="slider" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <Carousel
        showThumbs={false}
        showStatus={false}
        infiniteLoop={true}
        selectedItem={currentImageIndex}
        onChange={(index) => setCurrentImageIndex(index)}
        showArrows={false}
        renderIndicator={customIndicator}
      >
        {sliderImages.map((image, index) => (
          <div className='z-0' key={index}>
            <img  src={image.src} alt={`Image ${index}`} />
          </div>
        ))}
      </Carousel>
      <button
        onClick={handlePrev}
        style={{ ...arrow, left: 0 }}
        onMouseEnter={() => setArrowHovered(true)}
        onMouseLeave={() => setArrowHovered(false)}
      >
        <svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path
            clip-rule="evenodd"
            fill-rule="evenodd"
            d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
          ></path>
        </svg>
      </button>
      <button
        onClick={handleNext}
        style={{ ...arrow, right: 0 }}
        onMouseEnter={() => setArrowHovered(true)}
        onMouseLeave={() => setArrowHovered(false)}
      >
        <svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path
            clip-rule="evenodd"
            fill-rule="evenodd"
            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
          ></path>
        </svg>
      </button>
    </div>
  )
}
