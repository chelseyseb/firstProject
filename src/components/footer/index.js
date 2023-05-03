import {
  socialMediaLinks,
  contactInfo,
  services,
  quickLinks,
  userTypes,
  governmentLinks,
  aboutLinks,
} from '@helpers/footer_data'

export default function footer() {
  return (
    <div className="">
      <footer className="">
        <div className="mx-auto ">
          <div class=" grid nav-con grid-cols-1 px-4 py-6 lg:py-8 lg:grid-cols-3 text-center lg:text-left">
            <div className="text-center lg:text-left">
              <h2 className="mb-3 text-xs font-semibold text-center text-red-800 uppercase lg:text-left">
                ONLINE SERVICES
              </h2>
              <ul className="text-xs font-normal text-gray-500 dark:text-gray-500 ">
                {services.map((service) => (
                  <li className="mb-2" key={service.id}>
                    <a href={service.link} className="hover:underline">
                      {service.name}
                    </a>
                  </li>
                ))}
              </ul>
              <br></br>
              <h2 class="mb-3 text-xs font-semibold uppercase text-center lg:text-left">DOWNLOADS</h2>
              <ul className="text-xs font-normal text-gray-500 dark:text-gray-500">
                {userTypes.map((userType) => (
                  <li key={userType.text} className="mb-2">
                    <a href={userType.link} className="hover:underline">
                      {userType.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="items-center">
              <h2 class="mb-3 text-xs font-semibold text-red-800 uppercase text-center lg:text-left ">QUICK LINKS</h2>
              <ul className="text-xs font-normal text-gray-500 dark:text-gray-500">
                {quickLinks.map((quickLinks) => (
                  <li key={quickLinks.text} className="mb-2">
                    <a href={quickLinks.link} className="hover:underline">
                      {quickLinks.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="">
              <h2 class="mb-1 text-xs font-semibold text-red-800 uppercase text-center lg:text-left ">KEEP IN TOUCH</h2>
              <div class="flex mt-2 space-x-6 items-end lg:justify-start justify-center lg:mt-0">
                <div class="flex flex-col gap-2 items-start justify-center lg:items-center lg:flex-row">
                  {socialMediaLinks.map((socialMediaLink) => (
                    <a key={socialMediaLink.name} href={socialMediaLink.url}>
                      <span
                        className={'inline-flex items-center justify-center w-10 h-10 rounded-full text-white ${socialMediaLink.bgColor} ${socialMediaLink.hoverBgColor}'}
                      >
                        <i className={socialMediaLink.icon} style={{ fontSize: '32px' }}></i>
                      </span>
                    </a>
                  ))}
                </div>
              </div>
              <br></br>
              <h2 class="mb-3 text-xs font-semibold text-red-800 uppercase text-center lg:text-left">CONTACT US</h2>
              <ul className="text-xs font-normal text-gray-500 dark:text-gray-500">
                {contactInfo.map((info, index) => (
                  <li className="mb-4" key={index}>
                    <a href={info.link} className="hover:underline">
                      {info.title}: {info.description}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <span class="text-xs text-red-800 font-thin sm:text-center pb-4 flex flex-row items-center justify-center">
            ©<a href="https://flowbite.com/">1998-2021 POLYTECHNIC UNIVERSITY OF THE PHILIPPINES</a>
          </span>
        </div>
        <div class="row bg-neutral-900 dark:bg-neutral-900 lg:flex lg:items-center lg:justify-between">
          <div className="grid grid-cols-1 gap-8 px-4 py-6 text-center nav-con lg:grid-cols-3 lg:text-left">
            <div className="flex flex-col gap-2 text-center lg:text-left lg:flex-row">
              <img className="w-36 h-36 place-self-center lg:place-self-start" src="govph.png" />
              <a href="#" class="text-neutral-700 pt-4 dark:text-neutral-700 text-xs font-semibold">
                Republic of the Philippines
                <p className="pt-2 text-xs font-thin text-neutral-700 dark:text-neutral-700">
                  All content is in the public domain unless otherwise stated.
                </p>
              </a>
            </div>
            <div className="">
              <h2 class="mb-0 text-xs font-semibold text-neutral-700 uppercase dark:text-neutral-700 text-center lg:text-left">
                About GOVPH
              </h2>
              <p class="pt-2 text-neutral-700 dark:text-neutral-700 text-xs font-semibold ">
                Learn more about the Philippine government, its structure, how government works and the people behind
                it.
              </p>
              <ul class="pt-1 text-neutral-500 dark:text-neutral-500 font-medium text-sm ">
                {aboutLinks.map((link) => (
                  <li class="mb-0" key={link.title}>
                    <a href={link.href} class="text-xs font-thin hover:underline">
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="">
              <h2 class="mb-0 text-xs font-semibold text-neutral-700 uppercase dark:text-neutral-700 text-center lg:text-left">
                Government Links
              </h2>
              <ul class="flex flex-col pt-2 lg:text-left place-content-center  text-neutral-500 dark:text-neutral-500 font-medium text-sm ">
                {governmentLinks.map((link) => (
                  <li class="mb-0 py-0.5" key={link.name}>
                    <a href={link.url} class=" text-xs font-thin hover:underline">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
