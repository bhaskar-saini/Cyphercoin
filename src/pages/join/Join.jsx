import React from 'react'
import './Join.css'
import { faFacebook,faInstagram,faTwitter,faYoutube } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Join = () => {
  return (
    <div>
      <div className="menu" id='Footer'>
        <div className="menu-item">
          <span className='title'>About</span>
          <div className="sub-menu">
            <ul>
              <li>Blog</li>
              <li>Carrer</li>
              <li>Anouncement</li>
              <li>Term of Use</li>
              <li>Privacy Policy</li>
              <li>KYC Policy</li>
            </ul>
          </div>
        </div>
        <div className="menu-item">
          <span className='title'>Support</span>
          <div className="sub-menu">
            <ul>
              <li>Help Center</li>
              <li>Contact Us</li>
              <li>Security</li>
              <li>Fees</li>
            </ul>
          </div>
        </div>
        <div className="menu-item">
          <span className='title'>Socials</span>
          <div className="sub-menu">
            <ul>
              <li className='icon'>
                <div className="circle"><FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon></div>
              </li>
              <li className='icon'>
                <div className="circle"><FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon></div>
              </li>
              <li className='icon'>
                <div className="circle"><FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon></div>
              </li>
              <li className='icon'>
                <div className="circle"><FontAwesomeIcon icon={faYoutube}></FontAwesomeIcon></div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="copyright">
        <p>@{new Date().getFullYear()} Cyphercoin. All right reserved.</p>
      </div>
    </div>
  )
}

export default Join