import React from 'react'
import logo from '/logo.png'
import { FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa';


const Footer = () => {
  return (
    <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content p-10 max-xl:flex 
    max-xl:flex-col max-xl:items-center max-xl:text-center max-xl:space-y-1">
  <aside className='font-medium'>
    <img src={logo} alt="" className='w-15 rounded-full -ml-2 max-xl:m-auto'/>
    <p>
      Develop by Edgar Orosa
      <br />
      © 2025 - All right reserved
    </p>
  </aside>
  <nav>
    <h6 className="footer-title max-xl:m-auto">Social</h6>
    <div className="grid grid-flow-col gap-4">
          <a href="https://github.com/Xeyn19" target="_blank" rel="noopener noreferrer">
            <FaGithub className="w-10 h-10 hover:text-primary-color transition duration-200" />
          </a>
          <a href="https://www.linkedin.com/in/edgar-orosa-a43a15333/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="w-10 h-10 hover:text-primary-color transition duration-200" />
          </a>
          <a href="https://www.facebook.com/edgar.orosa.9" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="w-10 h-10 hover:text-primary-color transition duration-200" />
          </a>
    </div>
  </nav>
</footer>
  )
}

export default Footer