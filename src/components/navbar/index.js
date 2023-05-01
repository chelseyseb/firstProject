import { useState } from 'react'
import Link from "next/link"
import { Inter } from 'next/font/google'
import { Formik, Form, Field } from "formik";


export default function Navbar() {

  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className='nav-bg'>
      <nav style={{
                lineHeight: "20px",
                fontSize: "10pt",
                backgroundImage: "url(bg.jpg)",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center center",
                backgroundSize: "cover",
            }}>
        <div className="flex items-center justify-center border-white lg:justify-between nav-con h-9"> 
            <div className='flex h-9 nav'>
              <ul className="flex flex-row space-y-0 lg:space-x-2 lg:space-y-0 ">
                <li>
                  <img className='flex w-8 h-8 hover:bg-red-800' src="govph.png"/>
                </li>
               <li className="flex flex-row content-center px-4 py-2 text-xs text-gray-500 hover:bg-red-800 hover:text-white">
                  <Link legacyBehavior href="/">
                    <a className='text-[16px]'>Home</a>
                  </Link>
                </li>
                <li className="flex hidden px-4 py-2 text-xs text-gray-500 lg:flex hover:bg-red-800 hover:text-white">
                  <Link legacyBehavior href="/blogs">
                    <a className='text-[16px]'>Good Governance</a>
                  </Link>
                </li>
                <li className="flex hidden px-4 py-2 text-xs text-gray-500 lg:flex hover:bg-red-800 hover:text-white">
                  <Link legacyBehavior href="/about">
                    <a className='text-[16px]'>Transparency</a>
                  </Link>
                </li>
                <li className="flex hidden px-4 py-2 text-xs text-gray-500 lg:flex hover:bg-red-800 hover:text-white">
                  <Link legacyBehavior href="/contact">
                    <a className='text-[16px]'>International Affairs</a>
                  </Link>
                </li>
                <li className="flex hidden px-4 py-2 text-xs text-gray-500 lg:flex hover:bg-red-800 hover:text-white">
                  <Link legacyBehavior href="/contact">
                    <a className='text-[16px]'>Bid Notices and Invitation</a>
                  </Link>
                </li>
              </ul>
              
              <div className="flex px-4 py-2 pl-0 text-xs lg:pl-0 xl:pl-32 lg:ml-auto h-9 text-slate-500 hover:bg-red-800 hover:text-white hover:cursor-pointer">
              <a className='text-[16px]' href="#">Contact Us</a>
            </div>
            </div>
        </div>
        
        <div className='bg-red-800 lg:bg-transparent nav-con'>
          <div className='flex flex-wrap items-center justify-between h-20 '>
            
            <div className="flex flex-wrap justify-between">
            <div>
              <img className='w-16 h-16 mt-3 ml-2 mr-2 display' src='puplogo.png'/>
            </div>
              <div className='flex flex-col pl-2 lg:flex'>
                <span className='hidden font-serif text-sm font-bold text-red-800 lg:flex text-medium hover:underline'>POLYTECHNIC UNIVERSITY OF THE PHILIPPINES</span>
              <div className='display column'>
                <span className='hidden mt-0 font-serif text-sm font-bold text-gray-400 lg:flex text-slate-600'>THE COUNTRY'S 1ST POLYTECHNICU</span>
                
                <div className='flex-wrap h-6 font-bold top-navbar2-links'>

              
			
                    <ul className="hidden inline text-red-800 lg:flex">
                    <li className="block px-0 pt-2 font-serif text-xs text-red-900">
                        <Link legacyBehavior href="/">
                          <a className='font-serif text-xs font-bold'>ABOUT PUP</a>
                        </Link>
                      </li>
                      <li className="block px-4 pt-2 text-xs text-red-900">
                        <Link legacyBehavior href="/blogs">
                          <a className='font-serif text-xs font-bold'>ACADEMIC</a>
                        </Link>
                      </li>
                      <li className="block px-4 pt-2 text-xs text-red-900">
                        <Link legacyBehavior href="/about">
                          <a className='font-serif text-xs font-bold'>STUDENTS</a>
                        </Link>
                      </li>
                      <li className="block px-4 pt-2 text-xs text-red-900">
                        <Link legacyBehavior href="/contact">
                          <a className='font-serif text-xs font-bold'>RESEARCH</a>
                        </Link>
                      </li>
                    </ul> 
                    </div>
                    </div>
                    </div>   
                    <div className='relative top-0 flex float-right'>
                      <span>
                      <Formik>
                        <Form >
                          <div className='flex lg:flex lg:pl-24 xl:pl-64 '>
                              <Field placeholder="Type keyword here..." className="flex hidden h-6 p-0 text-xs font-thin border rounded-sm flex-end lg:flex w-36 search"/>
                                <button disabled className='flex flex-wrap content-center justify-center hidden w-6 h-6 text-white bg-red-800 rounded-r-sm lg:flex'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-3 h-3">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                                </svg>
                                </button>
                          </div>
                        </Form>
                      </Formik>
                      </span>
                    </div>
                    <div class=" flex justify-center items-center ">
                      <button className="absolute z-10 border outline-none top-16 right-8 mobile-menu-button" onClick={() => setShowMenu(!showMenu)}>
                
                      <svg class="lg:hidden w-6 h-6 text-gray-300 hover:text-gray-500 "
                        x-show="!showMenu"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        >
                        <path d="M4 6h16M4 12h16M4 18h16"></path>
                      </svg>
                    </button>
                    </div>
                    </div>
                      <div className={`lg:hidden w-screen mobile-menu ${showMenu ? '' : 'hidden'}`} x-show={showMenu ? "false" : "true"}>
                        <div className="bg-white">
                          <ul className="mt-2">
                            <li className="active"><a href="index.html" className="flex items-center justify-between px-2 py-4 text-sm font-semibold text-gray-800"><span>ABOUT PUP</span><svg className="w-4 h-4 text-gray-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg></a></li>
                            <hr className="mx-2 my-2 border-gray-300" />
                            <li><a href="#services" className="flex items-center justify-between px-2 py-4 text-sm transition duration-300 hover:bg-green-500 hover:text-white"><span>ACADEMIC</span><svg className="w-4 h-4 text-gray-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg></a></li>
                            <hr className="mx-2 my-2 border-gray-300" />
                            <li><a href="#about" className="flex items-center justify-between px-2 py-4 text-sm transition duration-300 hover:bg-green-500 hover:text-white"><span>STUDENTS</span><svg className="w-4 h-4 text-gray-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg></a></li>
                            <hr className="mx-2 my-2 border-gray-300" />
                            <li><a href="#contact" className="flex items-center justify-between px-2 py-4 text-sm transition duration-300 hover:bg-green-500 hover:text-white"><span>RESEARCH</span><svg className="w-4 h-4 text-gray-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg></a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
        </div>
      </nav> 
   </div>
  );
}