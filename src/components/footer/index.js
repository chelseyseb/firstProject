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
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      ></link>
      <footer className="">
        <div className="mx-auto ">
          <div class=" grid nav-con grid-cols-1 px-4 py-6 lg:py-8 lg:grid-cols-4 text-center lg:text-left">
            <div className="text-center lg:text-left">
              <h2 className="mb-3 text-xs font-semibold text-center text-red-800 uppercase lg:text-left">
                ONLINE SERVICES
              </h2>
              <ul className="text-gray-500 dark:text-gray-500 ">
                {services.map((service) => (
                  <li className="mb-1" key={service.id}>
                    <a href={service.link} className="body-font hover:underline">
                      {service.name}
                    </a>
                  </li>
                ))}
              </ul>
              <br></br>
              <h2 class="mb-3 text-xs font-semibold uppercase text-center lg:text-left">DOWNLOADS</h2>
              <ul className="text-gray-500 dark:text-gray-500">
                {userTypes.map((userType) => (
                  <li key={userType.text} className="mb-1">
                    <a href={userType.link} className="body-font hover:underline">
                      {userType.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="items-center ">
              <h2 class="mb-3 text-xs font-semibold text-red-800 pt-4 lg:pt-0 uppercase text-center lg:text-left ">
                QUICK LINKS
              </h2>
              <ul className="text-gray-500 dark:text-gray-500">
                {quickLinks.map((quickLinks) => (
                  <li key={quickLinks.text} className="mb-1">
                    <a href={quickLinks.link} className="body-font hover:underline">
                      {quickLinks.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-span-1 lg:col-span-2">
              <h2 class="mb-1 text-xs font-semibold text-red-800 pt-4 lg:pt-0  uppercase text-center lg:text-left ">
                KEEP IN TOUCH
              </h2>
              <div class="flex mt-2 space-x-6 items-end lg:justify-start justify-center lg:mt-2">
                <div class="flex flex-col gap-5 items-start justify-center pt-1 lg:items-center lg:flex-row">
                  {socialMediaLinks.map((socialMediaLink) => (
                    <a key={socialMediaLink.name} href={socialMediaLink.url}>
                      <span
                        className={`inline-flex items-center justify-center w-10 h-10 rounded-full text-white ${socialMediaLink.bgColor} ${socialMediaLink.hoverBgColor}`}
                      >
                        <i className={` ${socialMediaLink.icon}`} style={{ color: 'white', fontSize: '32px' }}></i>
                      </span>
                    </a>
                  ))}
                </div>
              </div>
              <br></br>
              <h2 class="mb-3 text-xs font-semibold text-red-800 uppercase text-center lg:text-left">CONTACT US</h2>
              <ul className="text-gray-500 dark:text-gray-500">
                {contactInfo.map((info, index) => (
                  <li className="mb-1" key={index}>
                    <a href={info.link} className="body-font hover:underline">
                      {info.title}: <strong>{info.description}</strong>
                    </a>
                  </li>
                ))}
              </ul>
              <h2 class="mb-3 text-xs font-semibold text-red-800 uppercase pt-4 lg:pt-0  text-center lg:text-left">
                PUPWEBSITE 10
              </h2>
              <p>
                <a className="body-font hover:underline" href="/terms/">
                  Terms of Use
                </a>{' '}
                |{' '}
                <a className="body-font hover:underline" href="/privacy/">
                  Privacy Statement
                </a>{' '}
                |{' '}
                <a className="body-font hover:underline" href="/website/">
                  About PUPWebSite
                </a>
              </p>
            </div>
          </div>
          <span class="footer-p text-gray-600 sm:text-center mb-6 pb-4 flex flex-row items-center justify-center">
            ©
            <a className="text-gray-600 footer-p" href="https://flowbite.com/">
              1998-2021 POLYTECHNIC UNIVERSITY OF THE PHILIPPINES
            </a>
          </span>
        </div>
        <div class="row bg-grayblack dark:bg-grayblack lg:flex lg:items-center lg:justify-between">
          <div className="grid grid-cols-1 gap-10 px-4 py-2 text-center nav-con lg:grid-cols-3 lg:text-left">
            <div className="flex flex-col col-span-1 gap-2 text-center lg:text-left lg:flex-row">
              <img className="w-36 h-36 place-self-center lg:place-self-start" src="govph.png" />
              <a href="#" class="text-neutral-600 pt-4 dark:text-neutral-600 footer-p">
                <strong>Republic of the Philippines</strong>
                <p className="pt-2 footer-p text-neutral-600 dark:text-neutral-600">
                  All content is in the public domain unless otherwise stated.
                </p>
              </a>
            </div>
            <div className="col-span-1 ">
              <h2 class="mb-0 mt-2 footer-p font-bold text-neutral-600  dark:text-neutral-600 text-center lg:text-left">
                About GOVPH
              </h2>
              <p class="pt-0 text-neutral-600 dark:text-neutral-600 footer-p ">
                Learn more about the Philippine government, its structure, how government works and the people behind
                it.
              </p>
              <ul class=" text-neutral-500 dark:text-neutral-500 ">
                {aboutLinks.map((link) => (
                  <li class="mb-0 mt-0" key={link.title}>
                    <a href={link.href} class="footer-p hover:underline">
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-span-1">
              <h2 class="mb-0 footer-p mt-2 font-bold text-neutral-600 dark:text-neutral-600 text-center lg:text-left">
                Government Links
              </h2>
              <ul class="flex flex-col pt-0 lg:text-left place-content-center  text-neutral-500 dark:text-neutral-500 font-medium text-sm ">
                {governmentLinks.map((link) => (
                  <li class="mb-0 " key={link.name}>
                    <a href={link.url} class=" footer-p hover:underline">
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
