import React, {useState} from 'react';
import { PencilSquareIcon } from "@heroicons/react/24/outline";
import { StarIcon } from "@heroicons/react/24/outline";
import { CubeIcon } from "@heroicons/react/24/outline";
import { BuildingLibraryIcon } from "@heroicons/react/24/outline";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { news, icons } from "@helpers/body_data";
import { icon } from '@fortawesome/fontawesome-svg-core';


const HomeContainer = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [currentSlide, setCurrentSlide] = useState(0);
    const totalSlides = 7; // or set dynamically based on number of carousel items
    
    function handleNext() {
      setCurrentSlide((currentSlide + 1) % totalSlides);
    }
    
    function handlePrev() {
      setCurrentSlide((currentSlide - 1 + totalSlides) % totalSlides);
    }

    function handleNextNews() {
      setCurrentImageIndex((currentSlide + 1) % totalSlides);
    }
    
    function handlePrevNews() {
      setCurrentImageIndex((currentSlide - 1 + totalSlides) % totalSlides);
    }
  return (
      <div className='mx-auto '>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>

            <div className="items-center justify-center carousel-top HomeContainer">
              
              <div className="left-0 right-0 top-auto flex justify-between mt-4 transform -translate-y-1/2">
                <img src="pup.jpg" className={`w-full carousel-item ${currentSlide === 0 ? 'active' : ''}`} />
                <img src="1st.jpg" className={`w-full  carousel-item ${currentSlide === 1 ? 'active' : ''}`} />
                <img src="2nd.jpg" className={`w-full carousel-item ${currentSlide === 2 ? 'active' : ''}`} />
                <img src="3rd.jpg" className={`w-full  carousel-item ${currentSlide === 3 ? 'active' : ''}`} />
                <img src="4th.jpg" className={`w-full  carousel-item ${currentSlide === 4 ? 'active' : ''}`} />
                <img src="5th.jpg" className={`w-full carousel-item ${currentSlide === 5 ? 'active' : ''}`} />
                <img src="6th.jpg" className={`w-full  carousel-item ${currentSlide === 6 ? 'active' : ''}`} />
                <img src="7th.jpg" className={`w-full  carousel-item ${currentSlide === 7 ? 'active' : ''}`} />
              </div>
              <div className="static flex justify-between transform -translate-y-1/2 mt-14 lg:mt-80 left-5 right-5 top-1/2">
                <button onClick={handlePrev} className="pl-4 arrow h-14 btn ">❮</button> 
                <button onClick={handleNext} className="pr-4 arrow h-14 btn ">❯</button>  
              </div>
               </div> 
           
            <div className='container mx-auto body'>
            <div className='grid pt-4 grid-col-1 lg:gap-36 gap-14 lg:pt-0 place-self-center lg:grid-cols-4 lg:grid-row'>
                  {icons.map((icons, index)=>(
                <a href={icons.link} key={index}>
                    <div className='flex flex-col items-center justify-center h-auto pt-8 lg:flex-wrap lg:flex '>
                        <div className="w-12 h-12 p-1 text-red-800 icon-effect-2 hover:bg-red-800 hover:text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                                <path clipRule="evenodd" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round" d={icons.d} />
                            </svg>
                            
                        </div>
                        <h4 className='w-40 text-xs font-normal place-self-center hover:underline'><strong>{icons.title}</strong></h4> 
                    </div>
                </a>
                ))}
            </div>
          </div>
          
        <div className="line">
          </div>
        
        <div className='container mx-auto body'>
          <div className='grid justify-center grid-cols-2 gap-4 item-center lg:grid-cols-5'>
            <div className='flex flex-col items-center col-span-2 lg:items-start '>
              <h4 >

                  <a className="font-semibold underline underline-offset-8" href='/announcements'>
                    Announcements and Advisories
                  </a>

              </h4>
              <div className=''>
                <ul className='overflow-y-auto text-sm leading-loose divide-y ul divide-solid'>
                  <li className='py-3.5'>
                    <a className='text-red-700 '>
                    Administrative Applicants for Selection/Promotion: List of All Applicants (First and Second Level) April 2023
                    </a>
                    <br></br>
                    <small>Posted: April 20,2023</small>
                  </li>
              
                  <li className='py-3.5'>
                    <a className='text-red-700'>
                    Advisory on the Submission of Online Application for Graduation and Other Scheduled Activities for Year-End Graduation (Second Semester) A.Y. 2022-2023
                    </a>
                    <br></br>
                    <small>Posted: April 10,2023</small>
                  </li>

                  <li className='py-3.5'>
                    <a className='text-red-700'>
                    List of Qualified Applicants for Promotion (First and Second Level Positions) Batches 1, 2, and 3
                    </a>
                    <br></br>
                    <small>Posted: March 02, 2023</small>
                  </li>

                  <li className='py-3.5'>
                    <a className='text-red-700'>
                    List of Eligible Applicants for Promotion (First and Second Level Positions)
                    </a>
                    <br></br>
                    <small>Posted: March 02, 2023</small>
                  </li>

                  <li className='py-3.5'>
                    <a className='text-red-700'>
                    PUP ICT Office is looking for Computer Programmers (J.O.)
                    </a>
                    <br></br>
                    <small>Posted: March 02, 2023</small>
                  </li>
                  <li className='py-3.5'>
                    <a className='text-red-700'>
                    List of Qualified Applicants for Promotion (First and Second Level Positions) Batches 1, 2, and 3
                    </a>
                    <br></br>
                    <small>Posted: March 02, 2023</small>
                  </li>
                  <li className='py-3.5'>
                    <a className='text-red-700'>
                    List of Eligible Applicants for Promotion (First and Second Level Positions)
                    </a>
                    <br></br>
                    <small>Posted: March 02, 2023</small>
                  </li>
                </ul>
              </div></div>
            
            <div className='flex flex-col col-span-2'>
              <div className='flex flex-row '>
                <h4 className='items-start justify-start'>
                      <a className="font-semibold underline underline-offset-8" href='/announcements'>
                      Latest News from the University
                      </a>
                  </h4>
                  <div className="flex flex-row items-center justify-center w-8 pl-24 mt-3 lg:pl-36">
                                <button onClick={handlePrevNews} className="flex flex-wrap items-center justify-center w-20 h-6 text-sm text-gray-400 border rounded">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={4} stroke="currentColor" className="w-3 h-3">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                                    </svg>
                                </button>
                                <button onClick={handleNextNews} className="flex flex-wrap items-center justify-center w-20 h-6 text-sm text-gray-400 border rounded">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={4} stroke="currentColor" className="w-3 h-3">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                    </svg>
                                </button>
                           </div> </div>
                           <div className='flex flex-col'>
                            <Carousel showThumbs={false} showStatus={false} infiniteLoop={true} selectedItem={currentImageIndex} onChange={(index) => setCurrentImageIndex(index)} showIndicators={false} showArrows={false}>
                                {news.map((news, index) => (
                                    <div key="" className="flex flex-col">
                                        <div key={index}>
                                            <img src={news.src} alt={`Image ${index}`} className="news-img"/>
                
                                        <div className="flex flex-col lg:pt-5 hover:underline">
                                            <a href={news.link} className="font-bold text-red-800 lg:text-left ">{news.title}</a>
                                            <p className="text-xs text-center text-gray-500 lg:text-left">{news.date}</p>
                                        </div>
                                    </div>
                                    </div>
                                ))}
                            </Carousel>
                            </div>
          </div>
          <div className='flex flex-col items-center justify-center col-span-2 lg:col-span-1 lg:items-start lg:justify-start'>
            <a className='' href="/goodgovernance/transparency/">
                <img className="rounded " alt="Philippine Transparency Seal" src="//i.imgur.com/vaNWHC9.jpg"/></a>
            <a className='' href="https://www.foi.gov.ph/requests?agency=PUP" target="_blank">
              <img className="rounded " alt="e-FOI Portal" src="//i.imgur.com/T2sYWP4.jpg"/></a>
            <a className='' href="https://drive.google.com/file/d/1l4EAMMYbtJXTT2SilRas9LT_N8E39d4j/view?usp=sharing" target="_blank">
              <img className="rounded " alt="PUP Data Privacy Manual" src="//i.imgur.com/jIaVBKM.jpg"/></a>
            <a className='' href="/gad/">
              <img className="rounded " alt="Gender And Development" src="//i.imgur.com/EryMqbT.jpg"/></a>
            <a className='' href="https://drive.google.com/open?id=14z_gxp97PYh7eLIAC6k4LqlGXNY_5xNa" target="_blank">
              <img className="rounded " alt="ISO-8001:2015" src="//i.imgur.com/aqFGgGg.jpg"/></a>
          </div>
            </div>
        </div>
        <div className='line'></div>
          <div className='container mx-auto body place-items-center'>
            <div className=' place-items-center'>
              <div className='grid grid-cols-1 lg:pb-2 lg:gap-8 lg:grid-cols-3'>
              <div className="grid col-span-1 lg:place-items-end place-items-center">
                      <a  class="twitter-timeline" data-width="350" data-height="885" data-theme="dark" href="https://twitter.com/ThePUPOfficial?ref_src=twsrc%5Etfw"></a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
                  </div>
                  <div className='col-span-2 place-items-start'>
                    <iframe className=''
                    width="100%"
                    height="520px"
                      id="ytplayer" src="https://www.youtube.com/embed/?listType=user_uploads&amp;list=PUPCreaTV" allowfullscreen=""></iframe>
                      
                      <div className='col-span-2 pt-2 place-items-start'>
                      <iframe 
                      src="https://open.spotify.com/embed/playlist/38hANLCOpal9sX3os9Te49?utm_source=generator" width="100%" height="352" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                      </div>
                    </div>
                </div>
              </div>
            </div>
            
</div>  
  );
};


export default HomeContainer;