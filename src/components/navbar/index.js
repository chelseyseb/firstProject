import { useState } from 'react'
import Link from "next/link"
import { Inter } from 'next/font/google'


export default function navbar() {
  return (
    <div >
      <nav style={{
                lineHeight: "23px",
                fontWeight: 300,
                backgroundImage: "url(bg.jpg)",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center center",
                backgroundSize: "cover",
            }}>
        <div className="justify-between h-8 px-4 mx-auto top-bar lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>  
            <div>
              <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
               <img className='w-8 h-8' src="govph.png"/> 
               <li className="block px-4 py-2 text-xs text-gray-500 hover:bg-red-900 hover:text-white">
                  <Link legacyBehavior href="/">
                    <a>Home</a>
                  </Link>
                </li>
                <li className="block px-4 py-2 text-xs text-gray-500 hover:bg-red-950 hover:text-white">
                  <Link legacyBehavior href="/blogs">
                    <a>Good Governance</a>
                  </Link>
                </li>
                <li className="block px-4 py-2 text-xs text-gray-500 hover:bg-red-950 hover:text-white">
                  <Link legacyBehavior href="/about">
                    <a>Transparency</a>
                  </Link>
                </li>
                <li className="block px-4 py-2 text-xs text-gray-300 hover:bg-red-950 hover:text-white">
                  <Link legacyBehavior href="/contact">
                    <a>International Affairs</a>
                  </Link>
                </li>
                <li className="block px-4 py-2 text-xs text-gray-300 hover:bg-red-950 hover:text-white">
                  <Link legacyBehavior href="/contact">
                    <a>Bid Notices and Invitation</a>
                  </Link>
                </li>
                <li className="block float-right px-4 py-2 text-xs text-gray-300 hover:bg-red-950 hover:text-white">
                  <Link legacyBehavior href="/contact">
                    <a>Contact Us</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className='flex flex-row w-full place-content-center'>
          <img className='float-left w-20 h-20 mt-2 ml-2 mr-2 display' src='puplogo.png'/>
          <div className=' display column'>
            <span>POLYTECHNIC UNIVERSITY OF THE PHILIPPINES</span>
            <div className='display column'>
              <span className='mt-0 text-sm text-gray-400'>THE COUNTRY'S 1ST POLYTECHNICU</span>
            </div>
          <div >
            
              <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
               <li className="block px-0 py-2 text-xs text-red-900">
                  <Link legacyBehavior href="/">
                    <a>ABOUT PUP</a>
                  </Link>
                </li>
                <li className="block px-4 py-2 text-xs text-red-900">
                  <Link legacyBehavior href="/blogs">
                    <a>ACADEMIC</a>
                  </Link>
                </li>
                <li className="block px-4 py-2 text-xs text-red-900">
                  <Link legacyBehavior href="/about">
                    <a>STUDENTS</a>
                  </Link>
                </li>
                <li className="block px-4 py-2 text-xs text-red-900 hover:bg-red-500">
                  <Link legacyBehavior href="/contact">
                    <a>RESEARCH</a>
                  </Link>
                </li>
              </ul>
              
            </div>
          </div>
           <div className='flex flex-row justify-items-end'>
            <span className='ml-10'>
              <input className='text-xs font-thin border rounded-none' name='search' type='text' id='txtSearch' placeholder='Type keyword here...'></input>
              <button id='btnSearch' className='text-xs font-thin bg-red-900 border rounded-none'>Sea</button>
            </span>
            </div>
        </div>
   </nav> </div>
  );
}