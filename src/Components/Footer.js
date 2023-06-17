import React from 'react'
import logo from '../assets/images/logo.png'
import location from '../assets/images/location.png'
import phone from '../assets/images/phone.png'
import mail from '../assets/images/mail.png'
import { FaFacebook } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';

function Footer() {
  return (
    <div>
       <section className="info_section ">
      <div className="container">
      <div className="info_container">
        <div className="row">
          <div className="col-md-3">
            <div className="info_logo">
              <a href="#">
                <img src={logo} alt="" />
                <span style={{textAlign:'none'}}>
                  Lodge
                </span>
              </a>
            </div>
          </div>
          <div className="col-md-3">
            <div className="info_contact">
              <a href="#">
                <img src={location} alt="" />
                <span>
                  Address
                </span>
              </a>
            </div>
          </div>
          <div className="col-md-3">
            <div className="info_contact">
              <a href="#">
                <img src={phone} alt="" />
                <span>
                  +01 1234567890
                </span>
              </a>
            </div>
          </div>
          <div className="col-md-3">
            <div className="info_contact">
              <a href="#">
                <img src={mail} alt="" />
                <span>
                  demo@gmail.com
                </span>
              </a>
            </div>
          </div>
        </div>
        <div className="info_form">
          <div className="d-flex justify-content-center">
            <h5 className="info_heading">
              Newsletter
            </h5>
          </div>
          <form action="">
            <div className="email_box">
              <label for="email2">Enter Your Email</label>
              <input type="text" id="email2" style={{borderRadius:'150px'}} />
            </div>
            <div>
              <button>
                subscribe
              </button>
            </div>
          </form>
        </div>
        <div className="info_social">
          <div className="d-flex justify-content-center">
            <h5 className="info_heading">
              Follow Us
            </h5>
          </div>
          <div className="social_box">
            <a href="#">
              <FaFacebook style={{color:'grey',fontSize:'180%'}}/>
            </a>
            <a href="#">
              <FaTwitter style={{color:'grey',fontSize:'180%'}} />
            </a>
            <a href="#">
              <FaLinkedin style={{color:'grey',fontSize:'180%'}} />
            </a>
            <a href="#">
              <FaInstagram style={{color:'grey',fontSize:'180%'}}/>
            </a>
          </div>
        </div>
      </div>
    </div>
       </section>
    </div>
  )
}

export default Footer
