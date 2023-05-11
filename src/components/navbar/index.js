import { useState } from 'react'
import Link from 'next/link'
import { Inter } from 'next/font/google'
import { Formik, Form, Field } from 'formik'
import { links, academic, studentsLinks, researchLinks, menuItems, topNav } from '@helpers/navbar_data'

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)

  return (
    <div className="row nav ">
      <nav className="border-white border-b-1 nav-effects">
        <div className="flex items-center justify-center h-8 lg:justify-between nav-con">
          <div className="flex h-8 ">
            <ul className="flex flex-row space-y-0 place-self-center lg:space-x-4">
              <li className="hover:bg-red-800">
                <img className="flex w-6 h-8" src="govph.png" />
              </li>
              {topNav.map((menuItem, index) => (
                <li
                  key={index}
                  className={`flex flex-row text-xs text-gray-500 place-items-center ${
                    menuItem.hidden ? 'hidden lg:flex' : 'lg:flex'
                  }`}
                >
                  <Link legacyBehavior href={menuItem.href}>
                    <a className="hover:bg-red-800 hover:text-white hover:cursor-pointer px-2 py-2 text-[13px]">
                      {menuItem.label}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex items-center py-2 pl-0 text-xs text-slate-500">
            <Link
              className="hover:bg-red-800 hover:text-white hover:cursor-pointer px-2 py-2 text-[13px]"
              href="/contactus"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </nav>
      <nav>
        <div className="flex flex-row bg-maroon lg:bg-transparent nav-con">
          <div className="flex flex-wrap items-center justify-between h-20 ">
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
                            <li className="px-4 py-2 rounded hover:bg-white group-hover:block" key={label}>
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
                            <li key={index} className="px-4 py-2 rounded hover:bg-white group-hover:block">
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
                            <li key={index} className="px-4 py-2 rounded hover:bg-white group-hover:block">
                              <p className="font-thin text-gray-500 transition duration-200 ease-in-out transform hover:translate-x-2 hover:text-red-700">
                                {link.text}
                                <a
                                  href={link.url}
                                  className="font-thin text-gray-500 hover:text-red-700"
                                  target={link.target}
                                ></a>
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
                            <li className="px-4 py-2 rounded hover:bg-white group-hover:block" key={index}>
                              <p className="font-thin text-gray-500 transition duration-200 ease-in-out transform hover:translate-x-2 hover:text-red-700">
                                {link.title}
                                <a className="font-thin text-gray-500 hover:text-red-700" href={link.link}></a>
                              </p>
                            </li>
                          ))}
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="right-0 flex ml-auto">
            <span>
              <Formik>
                <Form>
                  <div className="flex h-6 my-4 text-sm">
                    <Field
                      placeholder="Type keyword here..."
                      className="flex hidden w-40 p-2 border rounded-sm flex-end lg:flex "
                    />
                    <button
                      disabled
                      className="flex flex-wrap content-center justify-center hidden w-6 h-6 text-white bg-red-900 rounded-r-sm lg:flex"
                    >
                      <svg
                        className="w-4 h-4 m-1.5"
                        fill="white"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                      >
                        <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
                      </svg>
                    </button>
                  </div>
                </Form>
              </Formik>
            </span>
          </div>

          <div class=" mt-6 justify-center items-center lg:hidden">
            <button
              className="flex items-center justify-center h-8 mr-6 bg-transparent border border-white w-9 top-16 right-8 "
              onClick={() => setShowMenu(!showMenu)}
            >
              <svg
                class="lg:hidden w-6 h-5 text-white  "
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
          className={`lg:hidden w-full flex flex-col ${showMenu ? 'block' : 'hidden'}`}
          x-show={showMenu ? 'false' : 'true'}
        >
          <div className="">
            <ul className="w-full bg-white divide-y divide-gray-300">
              {menuItems.map((menuItem, index) => (
                <li key={index} className="mt-2 active">
                  <a href={menuItem.href} className="flex items-center justify-between px-2 py-4">
                    <p className="items-center justify-center text-gray-600 body-font hover:text-red-800 hover:underline">
                      {menuItem.label}
                    </p>
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
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}
