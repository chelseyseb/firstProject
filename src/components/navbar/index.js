import { useState } from 'react'
import Link from 'next/link'
import { Inter } from 'next/font/google'
import { Formik, Form, Field } from 'formik'
import { links, academic, studentsLinks, researchLinks } from '@helpers/navbar_data'

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)

  return (
    <div className="row nav ">
      <nav className="border-white border-b-1 nav-effects">
        <div className="flex items-center justify-center h-8 lg:justify-between nav-con">
          <div className="flex h-8 ">
            <ul className="flex flex-row space-y-0 place-self-center lg:space-x-4 ">
              <li className=" hover:bg-red-800">
                <img className="flex w-6 h-7 " src="govph.png" />
              </li>
              <li className="flex flex-row text-xs text-gray-500 place-items-center ">
                <Link legacyBehavior href="">
                  <a className="hover:bg-red-800 hover:text-white hover:cursor-pointer px-2 py-2 text-[13px]">Home</a>
                </Link>
              </li>
              <li className="flex flex-row hidden text-xs text-gray-500 place-items-center lg:flex">
                <Link legacyBehavior href="/blogs">
                  <a className="hover:bg-red-800 hover:text-white hover:cursor-pointer px-2 py-2 text-[13px]">
                    Good Governance
                  </a>
                </Link>
              </li>
              <li className="flex flex-row hidden text-xs text-gray-500 place-items-center lg:flex">
                <Link legacyBehavior href="/about">
                  <a className="hover:bg-red-800 hover:text-white hover:cursor-pointer px-2 py-2 text-[13px]">
                    Transparency
                  </a>
                </Link>
              </li>
              <li className="flex flex-row hidden text-xs text-gray-500 place-items-center lg:flex">
                <Link legacyBehavior href="/contact">
                  <a className="hover:bg-red-800 hover:text-white hover:cursor-pointer px-2 py-2 text-[13px]">
                    International Affairs
                  </a>
                </Link>
              </li>
              <li className="flex flex-row hidden text-xs text-gray-500 place-items-center lg:flex">
                <Link legacyBehavior href="/contact">
                  <a className="hover:bg-red-800 hover:text-white hover:cursor-pointer px-2 py-2 text-[13px]">
                    Bid Notices and Invitation
                  </a>
                </Link>
              </li>
            </ul>

            <div className="items-center px-4 py-2 pl-0 text-xs lg:pl-0 xl:pl-52 lg:ml-auto text-slate-500">
              <a className="hover:bg-red-800 hover:text-white hover:cursor-pointer px-2 py-2 text-[13px]" href="#">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </nav>
      <nav>
        <div className="bg-maroon lg:bg-transparent nav-con">
          <div className="flex flex-wrap items-center justify-between h-18 ">
            <div className="flex flex-wrap justify-between">
              <div>
                <img className="w-16 h-16 mt-2 ml-2 mr-2 " src="puplogo.png" />
              </div>
              <div className="flex flex-col lg:flex">
                <span className="hidden pt-4 text-sm antialiased font-black tracking-normal text-red-800 lg:flex hover:underline">
                  Polytechnic University of the Philippines
                </span>
                <div className="display column">
                  <span className="hidden mt-0 text-xs font-black text-gray-400 lg:flex text-slate-600">
                    The Country's 1st PolytechnicU
                  </span>

                  <div className="flex-wrap h-6 font-bold top-navbar2-links">
                    <ul className="hidden inline text-red-800 lg:flex">
                      <li className="relative block pt-2 pr-2 font-serif text-xs text-red-900 group">
                        <a href="" className="text-xs font-bold cinzel hover:text-red-700 group-hover:text-red-700">
                          About PUP
                        </a>
                        <ul className="hidden text-gray-800 divide-y divide-gray-300 dropdown group-hover:block">
                          {links.map(({ href, label, target }) => (
                            <li className="px-4 py-2 rounded-lg hover:bg-white group-hover:block" key={label}>
                              <Link legacyBehavior href={href}>
                                <p className="font-thin text-gray-500 transition duration-200 ease-in-out transform hover:translate-x-2 hover:text-red-700">
                                  {label}
                                  <a target={target} className=""></a>
                                </p>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </li>
                      <li className="relative block px-4 pt-2 font-serif text-xs text-red-900 group">
                        <a href="" className="text-xs font-bold cinzel hover:text-red-700 group-hover:text-red-700">
                          Academic
                        </a>
                        <ul className="hidden text-gray-800 divide-y divide-gray-300 dropdown group-hover:block">
                          {academic.map((item, index) => (
                            <li key={index} className="px-4 py-2 rounded-lg hover:bg-white group-hover:block">
                              <p className="font-thin text-gray-500 transition duration-200 ease-in-out transform hover:translate-x-2 hover:text-red-700">
                                {item.title}
                                <a
                                  href={item.href}
                                  className="font-thin text-gray-500 hover:text-red-700"
                                  target={item.target}
                                ></a>
                              </p>
                            </li>
                          ))}
                        </ul>
                      </li>
                      <li className="relative block px-4 pt-2 font-serif text-xs text-red-900 group">
                        <a
                          href=""
                          className="text-xs font-extrabold cinzel hover:text-red-700 group-hover:text-red-700"
                        >
                          Students
                        </a>
                        <ul className="hidden text-gray-800 divide-y divide-gray-300 dropdown group-hover:block">
                          {studentsLinks.map((link, index) => (
                            <li key={index} className="px-4 py-2 rounded-lg hover:bg-white group-hover:block">
                              <p className="font-thin text-gray-500 transition duration-200 ease-in-out transform hover:translate-x-2 hover:text-red-700">
                              {link.text}
                              <a
                                href={link.url}
                                className="font-thin text-gray-500 hover:text-red-700"
                                target={link.target}
                              >
                                
                              </a>
                              </p>
                            </li>
                          ))}
                        </ul>
                      </li>
                      <li className="relative block px-4 pt-2 font-serif text-xs text-red-900 group">
                        <a href="" className="text-xs font-bold cinzel hover:text-red-700 group-hover:text-red-700">
                          Research
                        </a>
                        <ul className="hidden text-gray-800 divide-y divide-gray-300 dropdown group-hover:block">
                          {researchLinks.map((link, index) => (
                            <li className="px-4 py-2 rounded-lg hover:bg-white group-hover:block" key={index}>
                              <p className="font-thin text-gray-500 transition duration-200 ease-in-out transform hover:translate-x-2 hover:text-red-700">
                              {link.title}
                              <a className="font-thin text-gray-500 hover:text-red-700" href={link.link}>
                              </a>
                              </p>
                            </li>
                          ))}
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="relative top-0 flex float-right">
                <span>
                  <Formik>
                    <Form>
                      <div className="flex h-5 m-2 lg:flex lg:pl-24 xl:pl-64 ">
                        <Field
                          placeholder="Type keyword here..."
                          className="flex hidden p-2 border rounded-sm flex-end lg:flex w-36 "
                        />
                        <button
                          disabled
                          className="flex flex-wrap content-center justify-center hidden w-5 h-5 text-white bg-red-800 rounded-sm lg:flex"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="w-w h-3"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                            />
                          </svg>
                        </button>
                      </div>
                    </Form>
                  </Formik>
                </span>
              </div>
              <div class=" flex justify-center items-center ">
                <button
                  className="absolute border outline-none top-16 right-8 mobile-menu-button"
                  onClick={() => setShowMenu(!showMenu)}
                >
                  <svg
                    class="lg:hidden w-6 h-6 text-gray-300 hover:text-gray-500 "
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
            <div
              className={`lg:hidden w-screen mobile-menu ${showMenu ? '' : 'hidden'}`}
              x-show={showMenu ? 'false' : 'true'}
            >
              <div className="">
                <ul className="w-full bg-white divide-y divide-gray-300 rounded">
                  <li className="mt-2 active">
                    <a
                      href="index.html"
                      className="flex items-center justify-between px-2 py-4 "
                    >
                      <p className='items-center justify-center text-gray-600 body-font hover:text-red-800 hover:underline'>About PUP</p>
                      <svg
                        className="w-4 h-4 text-gray-600"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    </a>
                  </li>
                  
                  <li>
                    <a
                      href="#services"
                      className="flex items-center justify-between px-2 py-4 text-sm "
                    >
                      <p className='items-center justify-center text-gray-600 body-font hover:text-red-800 hover:underline'>Academic</p>
                      <svg
                        className="w-4 h-4 text-gray-600"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    </a>
                  </li>

                  <li>
                    <a
                      href="#about"
                      className="flex items-center justify-between px-2 py-4 text-sm "
                    >
                      <p className='items-center justify-center text-gray-600 body-font hover:text-red-800 hover:underline'>Students</p>
                      <svg
                        className="w-4 h-4 text-gray-600"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    </a>
                  </li>

                  <li>
                    <a
                      href="#contact"
                      className="flex items-center justify-between px-2 py-4 "
                    >
                      <p className='items-center justify-center text-gray-600 body-font hover:text-red-800 hover:underline'>Research</p>
                      <svg
                        className="w-4 h-4 text-gray-600"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}
