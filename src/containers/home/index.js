import React, {useState} from 'react';
import { PencilSquareIcon } from "@heroicons/react/24/outline";
import { StarIcon } from "@heroicons/react/24/outline";
import { CubeIcon } from "@heroicons/react/24/outline";
import { BuildingLibraryIcon } from "@heroicons/react/24/outline";
import Navbar from '@components/navbar';


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
      <div>
          <div >
            <div className=" HomeContainer">
              
              <div className="left-0 right-0 flex justify-between mt-4 transform -translate-y-1/2 top-1/2">
                <img src="pup.jpg" className={`w-full carousel-item ${currentSlide === 0 ? 'active' : ''}`} />
                <img src="1st.jpg" className={`w-full  carousel-item ${currentSlide === 1 ? 'active' : ''}`} />
                <img src="2nd.jpg" className={`w-full carousel-item ${currentSlide === 2 ? 'active' : ''}`} />
                <img src="3rd.jpg" className={`w-full  carousel-item ${currentSlide === 3 ? 'active' : ''}`} />
                <img src="4th.jpg" className={`w-full  carousel-item ${currentSlide === 4 ? 'active' : ''}`} />
                <img src="5th.jpg" className={`w-full carousel-item ${currentSlide === 5 ? 'active' : ''}`} />
                <img src="6th.jpg" className={`w-full  carousel-item ${currentSlide === 6 ? 'active' : ''}`} />
                <img src="7th.jpg" className={`w-full  carousel-item ${currentSlide === 7 ? 'active' : ''}`} />
              </div>
              <div className="static flex justify-between mt-64 transform -translate-y-1/2 left-5 right-5 top-1/2">
                <button onClick={handlePrev} className="pl-4 btn btn-circle">❮</button> 
                <button onClick={handleNext} className="pr-4 btn btn-circle">❯</button>  
              </div>
                
           
            <div className='w-full max-w-screen-xl mx-auto content'>
            <div className='flex flex-row gap-20 pt-11 pb-11 place-content-center'>
                <div>
                  <PencilSquareIcon className="w-20 h-20 p-4 text-red-500 icon-effect-2 hover:bg-red-900 hover:text-white" />
                  <h4 className='text-sm font-normal'>
                    <strong>Apply Now</strong>
                  </h4>
                </div>
              
                <div>
                  <StarIcon className="w-20 h-20 p-4 text-red-500 icon-effect-2 hover:bg-red-900 hover:text-white" />
                  <h4 className='text-sm font-normal'>
                  <strong>Attend an Event</strong>
                </h4>
                </div>

                <div>
                  <CubeIcon class="w-20 h-20 p-4 text-red-500 icon-effect-2 hover:bg-red-900 hover:text-white" />
                  <h4 className='text-sm font-normal'>
                  <strong>PUP</strong>
                </h4>
                </div>

                <div>
                  <BuildingLibraryIcon class="w-20 h-20 p-4 text-red-500 icon-effect-2 hover:bg-red-900 hover:text-white" />
                  <h4 className='text-sm font-normal'>
                  <strong>Campus Life</strong>
                </h4>
                </div>
            </div>
          </div>
          
            <div>
          <span class="h-0.5 w-full bg-gray-200 lg:w-full"></span>
        </div></div>
        <div className='flex flex-row space-x-3 leading-loose'>
        <div className='flex flex-col w-4/12 columns-3'>
          <h4 className=''>
            <span>
              <a className="ml-10" href='/announcements'>
                Announcements and Advisories
              </a>
            </span>
          </h4>
          <div className='flex flex-col '>
            <ul className='ml-10 overflow-y-auto text-sm divide-y h-80 divide-solid'>
              <li>
                <a className='text-red-700'>
                Administrative Applicants for Selection/Promotion: List of All Applicants (First and Second Level) April 2023
                </a>
                <br></br>
                <small>Posted: April 20,2023</small>
              </li>
          
              <li>
                <a className='text-red-700'>
                Advisory on the Submission of Online Application for Graduation and Other Scheduled Activities for Year-End Graduation (Second Semester) A.Y. 2022-2023
                </a>
                <br></br>
                <small>Posted: April 10,2023</small>
              </li>

              <li>
                <a className='text-red-700'>
                List of Qualified Applicants for Promotion (First and Second Level Positions) Batches 1, 2, and 3
                </a>
                <br></br>
                <small>Posted: March 02, 2023</small>
              </li>

              <li>
                <a className='text-red-700'>
                List of Eligible Applicants for Promotion (First and Second Level Positions)
                </a>
                <br></br>
                <small>Posted: March 02, 2023</small>
              </li>

              <li>
                <a className='text-red-700'>
                PUP ICT Office is looking for Computer Programmers (J.O.)
                </a>
                <br></br>
                <small>Posted: March 02, 2023</small>
              </li>
              <li>
                <a className='text-red-700'>
                List of Qualified Applicants for Promotion (First and Second Level Positions) Batches 1, 2, and 3
                </a>
                <br></br>
                <small>Posted: March 02, 2023</small>
              </li>
              <li>
                <a className='text-red-700'>
                List of Eligible Applicants for Promotion (First and Second Level Positions)
                </a>
                <br></br>
                <small>Posted: March 02, 2023</small>
              </li>
            </ul>
          </div>
        </div>
         <div className='flex flex-col w-5/12 pr-5 columns-3 '>
            <h4 className=''>
                <span>
                  <a href='/announcements'>
                  Latest News from the University
                  </a>
                </span>
              </h4>
              {/* <div className='HomeContainer'>
                <img src="news1.png" className={`w-36  h-56 carousel-item ${currentImageIndex === 0 ? 'active' : ''}`} />
                <img src="news2.png" className={`w-26  h-56 carousel-item ${currentImageIndex === 1 ? 'active' : ''}`} />
                <img src="news3.png" className={`w-36  h-56 carousel-item ${currentImageIndex === 2 ? 'active' : ''}`} />
                <div className="sticky flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <button onClick={handlePrevNews} className="btn btn-circle">❮</button> 
                  <button onClick={handleNextNews} className="btn btn-circle">❯</button>
                </div>
              </div> */}
                
      </div>
      <div className='flex flex-col w-2/12 columns-3 '>
        <a className='mb-1 ' href="/goodgovernance/transparency/">
            <img class="h-20 pl-10 rounded" alt="Philippine Transparency Seal" src="//i.imgur.com/vaNWHC9.jpg"/></a>
        <a className='mb-1 ' href="https://www.foi.gov.ph/requests?agency=PUP" target="_blank">
          <img class="h-20 pl-10 rounded" alt="e-FOI Portal" src="//i.imgur.com/T2sYWP4.jpg"/></a>
        <a className='mb-1 ' href="https://drive.google.com/file/d/1l4EAMMYbtJXTT2SilRas9LT_N8E39d4j/view?usp=sharing" target="_blank">
          <img class="h-20 pl-10 rounded" alt="PUP Data Privacy Manual" src="//i.imgur.com/jIaVBKM.jpg"/></a>
        <a className='mb-1 ' href="/gad/">
          <img class="h-20 pl-10 rounded" alt="Gender And Development" src="//i.imgur.com/EryMqbT.jpg"/></a>
        <a className='mb-1 ' href="https://drive.google.com/open?id=14z_gxp97PYh7eLIAC6k4LqlGXNY_5xNa" target="_blank">
          <img class="h-20 pl-10 rounded" alt="ISO 9001:2015" src="//i.imgur.com/aqFGgGg.jpg"/></a>
      </div>
        </div>
          <div className='w-auto mt-10 '>
            <div className='flex flex-row  mt-10 border-b-[1px] border-grey'>
              <div className="flex items-center justify-center w-1/3 h-auto ml-9">
                  <div className="mb-4">
                      <a class="twitter-timeline" data-width="350" data-height="885" data-theme="dark" href="https://twitter.com/ThePUPOfficial?ref_src=twsrc%5Etfw"></a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
                  </div>
                </div>
              <div className='flex flex-col items-center justify-center w-2/3 pr-11 display'>
                <iframe width="850px"
                height="550px"
                id="ytplayer" src="https://www.youtube.com/embed/?listType=user_uploads&amp;list=PUPCreaTV" allowfullscreen=""></iframe>
              <div className='mt-5'>
              <iframe
                  src="https://open.spotify.com/embed/playlist/37i9dQZF1DX6T5dWVv97mp?utm_source=generator&theme=0"
                  width="850px"
                  height="300px"
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                />
              </div>
            </div>
            </div>
            <div>
              <footer class="footer w-full">
                  <div class="mx-auto w-full max-w-screen-xl">
                    <div class="w-full grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-3">
                      <div className='ml-10'>
                          <h2 class="mb-6 text-sm font-semibold text-red-800 uppercase">ONLINE SERVICES</h2>
                          <ul class="text-gray-500 dark:text-gray-400 font-medium text-sm ">
                              <li class="mb-2">
                                  <a href="#" class="hover:underline">PUP Webmail</a>
                              </li>
                              <li class="mb-2">
                                  <a href="#" class="hover:underline">PUP iApply</a>
                              </li>
                              <li class="mb-2">
                                  <a href="#" class="hover:underline">SIS for Students</a>
                              </li>
                              <li class="mb-2">
                                  <a href="#" class="hover:underline">SIS for Faculty</a>
                              </li>
                          </ul>
                          <br></br>
                          <h2 class="mb-6 text-sm font-semibold uppercase ">DOWNLOADS</h2>
                          <ul class="text-gray-500 dark:text-gray-400 font-medium text-sm ">
                              <li class="mb-2">
                                  <a href="#" class=" hover:underline">For Students</a>
                              </li>
                              <li class="mb-2">
                                  <a href="#" class="hover:underline">For Faculty and Employees</a>
                              </li>
                          </ul>
                      </div>
                      <div>
                          <h2 class="mb-6 text-sm font-semibold text-red-800 uppercase ">QUICK LINKS</h2>
                          <ul class="text-gray-500 dark:text-gray-400 font-medium text-sm ">
                              <li class="mb-2">
                                  <a href="#" class="hover:underline">Aboout PUP</a>
                              </li>
                              <li class="mb-2">
                                  <a href="#" class="hover:underline">Admission Information</a>
                              </li>
                              <li class="mb-2">
                                  <a href="#" class="hover:underline">Branches and Campuses</a>
                              </li>
                              <li class="mb-2">
                                  <a href="#" class="hover:underline">Academic Programs</a>
                              </li>
                              <li class="mb-2">
                                  <a href="#" class="hover:underline">Transparency Seal</a>
                              </li>
                              <li class="mb-2">
                                  <a href="#" class="hover:underline">Bid Notices and Invitation</a>
                              </li>
                              <li class="mb-2">
                                  <a href="#" class="hover:underline">International Affairs</a>
                              </li>
                              <li class="mb-2">
                                  <a href="#" class="hover:underline">Jobs for PUPians</a>
                              </li>
                          </ul>
                      </div>
                      <div>
                          <h2 class="mb-6 text-sm font-semibold text-red-800 uppercase ">KEEP IN TOUCH</h2>
                          <div class="flex mt-4 space-x-6  md:mt-0">
                          <a href="#" class="text-red-900 hover:text-gray-900 dark:hover:text-red-900">
                              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd" /></svg>
                              <span class="sr-only">Facebook page</span>
                          </a>
                          <a href="#" class="text-red-900 hover:text-gray-900 dark:hover:text-red-900">
                              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clip-rule="evenodd" /></svg>
                              <span class="sr-only">Instagram page</span>
                          </a>
                          <a href="#" class="text-red-900 hover:text-gray-900 dark:hover:text-red-900">
                              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
                              <span class="sr-only">Twitter page</span>
                          </a>
                          <a href="#" class="text-red-900 hover:text-gray-900 dark:hover:text-red-900">
                              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" /></svg>
                              <span class="sr-only">GitHub account</span>
                          </a>
                          <a href="#" class="text-red-900 hover:text-gray-900 dark:hover:text-red-900">
                              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clip-rule="evenodd" /></svg>
                              <span class="sr-only">Dribbble account</span>
                          </a>
                      </div>
                          <br></br>
                          <h2 class="mb-6 text-sm font-semibold text-red-800 uppercase ">CONTACT US</h2>
                          <ul class="text-gray-500 dark:text-gray-400 font-medium text-sm ">
                              <li class="mb-0">
                                  <a href="#" class="hover:underline">Phone: (+63 2) 5335-1PUP (5335-1787) or 5335-1777</a>
                              </li>
                              <li class="mb-4">
                                  <a href="#" class="hover:underline">Email: inquire@pup.edu.ph</a>
                              </li>
                          </ul>
                      </div>
                  </div>
                  </div>
                  <span class="text-xs text-red-800 font-thin sm:text-center pb-4 flex flex-row items-center justify-center">© 2023 <a href="https://flowbite.com/">1998-2021 POLYTECHNIC UNIVERSITY OF THE PHILIPPINES</a>
                      </span>
                  <div class="px-4 py-6 bg-gray-900 dark:bg-gray-900 md:flex md:items-center md:justify-between">
                    <img className='w-20 h-20 ml-10' src='govph.png'/>
                    <div className="grid grid-cols-3 gap-8 px-4 py-6 lg:py-8 md:grid-cols-3">
                          <ul class="text-gray-500 dark:text-gray-400 font-medium text-sm ">
                              <li class="mb-0">
                                  <a href="#" class="text-xs hover:underline font-thin">Republic of the Philippines</a>
                              </li>
                              <li class="mb-1">
                                  <a href="#" className="text-xs font-thin hover:underline">All content is in the public domain unless otherwise stated.</a>
                              </li>
                          </ul>
                          
                      
                      <div>
                            <h2 class="mb-0 text-xs font-semibold text-gray-400 uppercase dark:text-gray-300">About GOVPH</h2>
                            <ul class="text-gray-500 dark:text-gray-400 font-medium text-sm ">
                                <li class="mb-0">
                                    <a href="#" class="text-xs font-thin hover:underline">Learn more about the Philippine government, its structure, how government works and the people behind it.</a>
                                </li>
                                <li class="mb-0">
                                    <a href="#" class="text-xs font-thin hover:underline">Official Gazette</a>
                                </li>
                                <li class="mb-0">
                                    <a href="#" class="text-xs font-thin hover:underline">Open Data Portal</a>
                                </li>
                            </ul>
                      </div>

                      <div>
                            <h2 class="mb-0 text-xs font-semibold text-gray-400 uppercase dark:text-gray-400">Government Links</h2>
                            <ul class="text-gray-500 dark:text-gray-400 font-medium text-sm ">
                                <li class="mb-0">
                                    <a href="#" class="text-xs font-thin hover:underline">Office of the President</a>
                                </li>
                                <li class="mb-0">
                                    <a href="#" class="text-xs font-thin hover:underline">Office of the Vice President</a>
                                </li>
                                <li class="mb-0">
                                    <a href="#" class="text-xs font-thin hover:underline">Senate of the Philippines</a>
                                </li>
                                <li class="mb-0">
                                    <a href="#" class="text-xs font-thin hover:underline">House of Representatives</a>
                                </li>
                                <li class="mb-0">
                                    <a href="#" class="text-xs font-thin hover:underline">Supreme Court</a>
                                </li>
                            </ul>
                      </div>
                    </div>
                  </div>
              </footer>
          </div>
        </div>
        
</div>  
</div>
  );
};


export default HomeContainer;