import { textContent, contactData, studentRecords, contacts, branches, openUniv, contents } from '@helpers/contactus_data'

const ContactUs = () => {
  return (
    <div className="px-4 py-12 container-body">
      <div className="flex flex-col lg:flex-row">
        <div className="overflow-x-auto lg:w-9/12">
          <h1 className="text-lg font-bold leading-7 text-left mt-0 text-[24px]">Contact us</h1>
          {textContent.map((content, index) => (
            <p key={index} className={content.classes}>
              {content.text}
            </p>
          ))}
          <h2 className="text-base font-bold leading-7 text-left">E-mail</h2>
          <h3 className="mt-1 text-sm text-left">For general concerns</h3>
          <p className="mb-7">
            <span className="text-2xl text-gray-500 contact-span lg:">inquire@pup.edu.ph</span>
          </p>

          <table className="relative mb-4 border border-collapse table-fixed">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-1 text-sm font-thin text-red-800 border ">Specific Concerns</th>
                <th className="p-1 text-sm font-thin text-red-800 border ">E-mail</th>
              </tr>
            </thead>
            <tbody>
              {contactData.map((data, index) => (
                <tr key={index}>
                  <td className={`border hover:text-red-800 text-gray-500 ${data.classes}`}>{data.title}</td>
                  <td className={`w-44 hover:text-red-800 border p-1 text-right text-gray-500`}>{data.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <h2 className="text-base font-bold leading-7 text-left">Postal Mail and Telephone</h2>
          <h3 className="mt-1 text-sm text-left">
            For inquiries regarding student records (transcript, diploma, certification):
          </h3>
          <blockquote>
            {studentRecords.map((contact, index) => (
              <div key={index}>
                <p className="text-gray-500 blockquote"></p>
                {contact.details.map((detail, index) =>
                  detail === 'Office of the University Registrar' ? (
                    <strong className="text-gray-500 blockquote-p" key={detail}>
                      {detail}
                    </strong>
                  ) : (
                    <p key={index} className="text-gray-500 blockquote-p">
                      {detail}
                      <br />
                    </p>
                  )
                )}
              </div>
            ))}
          </blockquote>
          <h3 className="mt-0 text-sm text-left">For admission inquiries:</h3>
          <blockquote>
            {contacts.map((records, index) => (
              <div key={index}>
                {records.address.map((line, index) =>
                  line === 'Admission Services' ? (
                    <strong className="text-gray-500 blockquote-p" key={line}>
                      {line}
                    </strong>
                  ) : (
                    <p key={index} className="text-gray-500 blockquote-p">
                      {line}
                    </p>
                  )
                )}
                <div>
                  {records.phone.map((number, index) => (
                    <p key={index} className="text-gray-500 blockquote-p">
                      {number}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </blockquote>
          <h3 className="mt-0 text-sm text-left">For inquiries regarding the PUP Branches and Campuses:</h3>
          <blockquote>
            {branches.map((branch, index) => (
              <div key={index}>
                {branch.name.map((title, index) =>
                  title === 'Office of the Vice President for Branches and Campuses' ? (
                    <strong className="text-gray-500 blockquote-p" key={title}>
                      {title}
                    </strong>
                  ) : (
                    <p key={index} className="text-gray-500 blockquote-p">
                      {title}
                    </p>
                  )
                )}
                {branch.address.map((line, index) => (
                  <p key={index} className="text-gray-500 blockquote-p">
                    {line}
                  </p>
                ))}
                {branch.phone.map((number, index) => (
                  <p key={index} className="text-gray-500 blockquote-p">
                    {number}
                  </p>
                ))}
              </div>
            ))}
          </blockquote>
          <h3 className="mt-0 text-sm text-left">For PUP Open University inquiries:</h3>
          <blockquote>
            {openUniv.map((contact, index) => (
              <p key={index} className="text-gray-500 blockquote-p">
                {contact.name}
                <br />
                <strong className="text-gray-500 blockquote-p">{contact.department}</strong>
                <br />
                {contact.address.map((line) => (
                  <>
                    {line}
                    <br />
                  </>
                ))}
                {contact.phone.map((number) => (
                  <>
                    {number}
                    <br />
                  </>
                ))}
              </p>
            ))}
          </blockquote>
          <p className="text-gray-600 body-font">
            <strong>Telephone</strong>
          </p>
          <a className="mt-1 text-red-800 hover:underline body-font" href="contactinformation.aspx">
           <p className='mb-10'>View contact information of specific offices and departments</p> 
          </a>
        </div>
        <div className='lg:px-4 lg:w-3/12'>
          <div className="overflow-hidden mb-50">
            <h4 className="mt-10 text-[14px] text-left lg:mt-0 font-thin">CONTENTS</h4>
            <div className="absolute block w-10 h-0.5 bg-gray-300"></div>
            <ul className='block w-full pt-2 mt-1 text-gray-500 divide-y'>
              {contents.map((content, index) => (
                <li className='py-1.5 ' key={index}>
                  <p className='text-left transition duration-300 ease-in-out transform hover:text-red-800 hover:translate-x-2'>
                  <a className='body-font' href={content.href}>{content.title}</a>
                </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
export default ContactUs
