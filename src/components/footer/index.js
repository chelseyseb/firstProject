export default function footer() {
  return (
    <div className="">
      <footer className="">
        <div className="mx-auto ">
          <div class=" grid nav-con grid-cols-1 px-4 py-6 lg:py-8 lg:grid-cols-3 text-center lg:text-left">
            <div className="text-center lg:text-left">
              <h2 class="mb-3 text-xs text-center lg:text-left font-semibold text-red-800 uppercase">
                ONLINE SERVICES
              </h2>
              <ul class="text-gray-500 dark:text-gray-500 font-normal text-xs ">
                <li class="mb-2">
                  <a href="#" class="hover:underline">
                    PUP Webmail
                  </a>
                </li>
                <li class="mb-2">
                  <a href="#" class="hover:underline">
                    PUP iApply
                  </a>
                </li>
                <li class="mb-2">
                  <a href="#" class="hover:underline">
                    SIS for Students
                  </a>
                </li>
                <li class="mb-2">
                  <a href="#" class="hover:underline">
                    SIS for Faculty
                  </a>
                </li>
              </ul>
              <br></br>
              <h2 class="mb-3 text-xs font-semibold uppercase text-center lg:text-left">DOWNLOADS</h2>
              <ul class="text-gray-500 dark:text-gray-500 font-normal text-xs ">
                <li class="mb-2">
                  <a href="#" class=" hover:underline">
                    For Students
                  </a>
                </li>
                <li class="mb-2">
                  <a href="#" class="hover:underline">
                    For Faculty and Employees
                  </a>
                </li>
              </ul>
            </div>
            <div className="items-center">
              <h2 class="mb-3 text-xs font-semibold text-red-800 uppercase text-center lg:text-left ">QUICK LINKS</h2>
              <ul class="text-gray-500 dark:text-gray-500 font-normal text-xs ">
                <li class="mb-2">
                  <a href="#" class="hover:underline">
                    About PUP
                  </a>
                </li>
                <li class="mb-2">
                  <a href="#" class="hover:underline">
                    Admission Information
                  </a>
                </li>
                <li class="mb-2">
                  <a href="#" class="hover:underline">
                    Branches and Campuses
                  </a>
                </li>
                <li class="mb-2">
                  <a href="#" class="hover:underline">
                    Academic Programs
                  </a>
                </li>
                <li class="mb-2">
                  <a href="#" class="hover:underline">
                    Transparency Seal
                  </a>
                </li>
                <li class="mb-2">
                  <a href="#" class="hover:underline">
                    Bid Notices and Invitation
                  </a>
                </li>
                <li class="mb-2">
                  <a href="#" class="hover:underline">
                    International Affairs
                  </a>
                </li>
                <li class="mb-2">
                  <a href="#" class="hover:underline">
                    Jobs for PUPians
                  </a>
                </li>
              </ul>
            </div>
            <div className="">
              <h2 class="mb-1 text-xs font-semibold text-red-800 uppercase text-center lg:text-left ">KEEP IN TOUCH</h2>
              <div class="flex mt-2 space-x-6 items-end lg:justify-start justify-center lg:mt-0">
                <div class="flex flex-col gap-2 items-start justify-center lg:items-center lg:flex-row">
                  <span class="inline-flex items-center hover:cursor-pointer justify-center h-10 w-10  rounded-full bg-red-800 hover:bg-blue-800">
                    <i class="fa fa-brands fa-facebook text-white" style={{ fontSize: '32px' }}></i>
                  </span>
                  <span class="inline-flex items-center hover:cursor-pointer justify-center h-10 w-10 rounded-full bg-red-800 hover:bg-blue-300">
                    <i class="fa fa-brands fa-twitter text-white" style={{ fontSize: '32px' }}></i>
                  </span>
                  <span class="inline-flex items-center hover:cursor-pointer justify-center h-10 w-10 rounded-full bg-red-800 hover:bg-yt">
                    <i class="fa fa-youtube-play text-white" style={{ fontSize: '32px' }}></i>
                  </span>
                  <span class="inline-flex items-center hover:cursor-pointer justify-center h-10 w-10 rounded-full bg-red-800 hover:bg-li">
                    <i class="fa fa-brands fa-linkedin text-white" style={{ fontSize: '32px' }}></i>
                  </span>
                  <span class="inline-flex items-center hover:cursor-pointer justify-center h-10 w-10 rounded-full bg-red-800 hover:bg-wf">
                    <i class="fa fa-solid fa-rss text-white" style={{ fontSize: '32px' }}></i>
                  </span>
                  <span class="inline-flex items-center hover:cursor-pointer justify-center h-10 w-10 rounded-full bg-red-800 hover:bg-green-500">
                    <i class="fa fa-brands fa-spotify text-white" style={{ fontSize: '32px' }}></i>
                  </span>
                </div>
              </div>
              <br></br>
              <h2 class="mb-3 text-xs font-semibold text-red-800 uppercase text-center lg:text-left">CONTACT US</h2>
              <ul class="text-gray-500 dark:text-gray-500 font-normal text-xs ">
                <li class="mb-0">
                  <a href="#" class="hover:underline">
                    Phone: (+63 2) 5335-1PUP (5335-1787) or 5335-1777
                  </a>
                </li>
                <li class="mb-4">
                  <a href="#" class="hover:underline">
                    Email: inquire@pup.edu.ph
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <span class="text-xs text-red-800 font-thin sm:text-center pb-4 flex flex-row items-center justify-center">
            ©<a href="https://flowbite.com/">1998-2021 POLYTECHNIC UNIVERSITY OF THE PHILIPPINES</a>
          </span>
        </div>

        <div class=" bg-neutral-950 dark:bg-neutral-950 lg:flex lg:items-center lg:justify-between">
          <div className="grid grid-cols-1 gap-8 px-4 py-6 text-center nav-con lg:grid-cols-3 lg:text-left">
            <div className="flex flex-col gap-2 text-center lg:text-left lg:flex-row">
              <img className="w-24 h-24 place-self-center" src="govph.png" />
              <a href="#" class="text-neutral-700 pt-5 dark:text-neutral-700 text-xs font-thin hover:underline">
                Republic of the Philippines <br></br> All content is in the public domain unless otherwise stated.
              </a>
              <br></br>
            </div>

            <div>
              <h2 class="mb-0 text-xs font-semibold text-neutral-700 uppercase dark:text-neutral-700 text-center lg:text-left">
                About GOVPH
              </h2>
              <ul class="text-neutral-700 dark:text-neutral-700 font-medium text-sm ">
                <li class="mb-0">
                  <a href="#" class="text-xs font-thin hover:underline">
                    Learn more about the Philippine government, its structure, how government works and the people
                    behind it.
                  </a>
                </li>
                <li class="mb-0">
                  <a href="#" class="text-xs font-thin hover:underline">
                    Official Gazette
                  </a>
                </li>
                <li class="mb-0">
                  <a href="#" class="text-xs font-thin hover:underline">
                    Open Data Portal
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h2 class="mb-0 text-xs font-semibold text-neutral-700 uppercase dark:text-neutral-700 text-center lg:text-left">
                Government Links
              </h2>
              <ul class="text-neutral-700 dark:text-neutral-700 font-medium text-sm ">
                <li class="mb-0">
                  <a href="#" class="text-xs font-thin hover:underline">
                    Office of the President
                  </a>
                </li>
                <li class="mb-0">
                  <a href="#" class="text-xs font-thin hover:underline">
                    Office of the Vice President
                  </a>
                </li>
                <li class="mb-0">
                  <a href="#" class="text-xs font-thin hover:underline">
                    Senate of the Philippines
                  </a>
                </li>
                <li class="mb-0">
                  <a href="#" class="text-xs font-thin hover:underline">
                    House of Representatives
                  </a>
                </li>
                <li class="mb-0">
                  <a href="#" class="text-xs font-thin hover:underline">
                    Supreme Court
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
