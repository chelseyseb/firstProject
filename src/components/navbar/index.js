import { useState } from 'react'
import Link from "next/link"
import { Inter } from 'next/font/google'
import { Formik, Form, Field } from "formik";


export default function navbar() {
  return (
    <div className=''>
      <nav style={{
                lineHeight: "20px",
                fontSize: "10pt",
                backgroundImage: "url(bg.jpg)",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center center",
                backgroundSize: "cover",
            }}>
        <div className="flex flex-wrap content-center justify-center border-white nav-bg h-9"> 
            <div className='flex flex-wrap items-center justify-center w-3/4 md:justify-between h-9 nav'>
              <ul className="flex flex-row space-y-0 md:space-x-2 md:space-y-0 ">
                <li>
                  <img className='flex w-8 h-8 hover:bg-red-800' src="govph.png"/>
                </li>
               <li className="flex flex-row content-center px-4 py-2 text-xs text-gray-500 hover:bg-red-800 hover:text-white">
                  <Link legacyBehavior href="/">
                    <a className='text-[12px]'>Home</a>
                  </Link>
                </li>
                <li className="flex hidden px-4 py-2 text-xs text-gray-500 md:flex hover:bg-red-800 hover:text-white">
                  <Link legacyBehavior href="/blogs">
                    <a className='text-[12px]'>Good Governance</a>
                  </Link>
                </li>
                <li className="flex hidden px-4 py-2 text-xs text-gray-500 md:flex hover:bg-red-800 hover:text-white">
                  <Link legacyBehavior href="/about">
                    <a className='text-[12px]'>Transparency</a>
                  </Link>
                </li>
                <li className="flex hidden px-4 py-2 text-xs text-gray-300 lg:flex hover:bg-red-800 hover:text-white">
                  <Link legacyBehavior href="/contact">
                    <a className='text-[12px]'>International Affairs</a>
                  </Link>
                </li>
                <li className="flex hidden px-4 py-2 text-xs text-gray-300 md:flex hover:bg-red-800 hover:text-white">
                  <Link legacyBehavior href="/contact">
                    <a className='text-[12px]'>Bid Notices and Invitation</a>
                  </Link>
                </li>
              </ul>
          </div>
          <div className="flex flex-wrap content-center text-xs h-9 text-slate-500 hover:bg-red-800 hover:text-white hover:cursor-pointer">
              <a className='text-[12px]' href="#">Contact Us</a>
            </div>
        </div>
        <div>
          
          <div className='flex flex-row content-center justify-center w-3/4 h-16'>
            <div className="flex flex-wrap justify-between ">

              
            <div>
              <img className='w-16 h-16 mt-2 ml-2 mr-2 display' src='puplogo.png'/>
            </div>
              <div className='flex-col flex-wrap content-center hidden pl-2 md:flex'>
                <span className='font-serif text-sm font-bold text-red-800 text-medium hover:underline'>POLYTECHNIC UNIVERSITY OF THE PHILIPPINES</span>
              <div className='display column'>
                <span className='mt-0 font-serif text-sm font-bold text-gray-400 text-slate-600'>THE COUNTRY'S 1ST POLYTECHNICU</span>
              </div>
                <div className='flex-wrap content-center h-6 font-bold top-navbar2-links'>
                    <ul className="flex inline text-red-800">
                    <li className="block px-4 pt-2 font-serif text-xs text-red-900">
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
              
            </div>
            <div className='ml-auto pr-36 '>
                <Formik>
                  <Form >
                    <div className='flex items-center justify-end'>
                        <Field placeholder="Type keyword here..." className="flex hidden h-4 p-0 text-xs rounded-sm flex-end md:flex w-36 search"/>
                          <button disabled className='flex flex-wrap content-center justify-center hidden w-6 h-4 text-white bg-red-800 rounded-r-sm md:flex'>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-3 h-3">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                          </svg>
                           </button>
                    </div>
                  </Form>
                </Formik>
              </div>
        </div>
      </nav> 
   </div>
  );
}