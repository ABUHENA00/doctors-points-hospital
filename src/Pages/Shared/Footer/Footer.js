import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faFacebookSquare,
    faInstagramSquare,
    faTwitterSquare,
    faYoutube,
  } from "@fortawesome/free-brands-svg-icons";

  import {
    
    faPhoneVolume,
    faMapMarkedAlt,
  } from "@fortawesome/free-solid-svg-icons";


const Footer = () => {
    return (
        <div className="mt-5 ">
            <div className="footer-container">
                <div className="container">
                    <div className="row">
                        <div className="col-md-5 footer-responsive ">
                            <div className="left-container text-start">
                                <h1>DOCTORS POINT'S HOSPITAL LTD.</h1>
                                   <div className="icons-container d-flex text-center">
                                       <div className="icon">
                                           <FontAwesomeIcon icon={faInstagramSquare} />
                                       </div>
                                       <div className="icon">
                                           <FontAwesomeIcon icon={faTwitterSquare} />
                                       </div>
                                       <div className="icon">
                                           <FontAwesomeIcon icon={faYoutube} />
                                       </div>
                                       <div className="icon">
                                           <FontAwesomeIcon icon={faFacebookSquare} />
                                       </div>
                                   </div>
                                   <p  className="mt-4">
                                        <small>
                                        We are provided in our best services<br/>Our has been lot of beds and Doctors.
                                        </small>
                                   </p>

                                   <p className="mt-5">
                              <small>www.doctorpoint.com ©  All rights reserved.</small>
                                 </p>
                            </div>
                        </div>
                        <div className="col-md-2 footer-responsive">
                            <div className="footer-menu-container">
                                <ul>
                                <li className="footer-menu">Home</li>
                                <li className="footer-menu">Services</li>
                               <li className="footer-menu">Patinents Reviews</li>
                               <li className="footer-menu">Doctors List</li>
                               <li className="footer-menu">All Departments</li>
                               <li className="footer-menu">Contact us</li>
                               <li className="footer-menu"> About us</li>
                                </ul>
                            </div>
                        </div>
                          <div className="col-md-5 footer-responsive">
                              <div className="right-footer-container">
                              <h3>Sign up for Doctor Appointments</h3>
                              <input
                           className="footer-input"
                            type="text"
                            placeholder="Enter Email"
                             />
                             <div className="phone d-flex align-items-center justify-content-center mt-4">
                                 <div className="foter-phone-icon">
                                     <FontAwesomeIcon icon={faPhoneVolume} />
                                 </div>
                                 <div>
                                         <h5>+8890348242432</h5>
                                  </div>
                             </div>
                             <div className="map  d-flex align-items-center justify-content-center">
                                 <div className="foter-phone-icon">
                                     <FontAwesomeIcon icon={faMapMarkedAlt} />
                                 </div>
                                 <div>
                                 <p>
                                     Rampur, Dhaka, PT 10038,
                                 <br /> Road 4,Bulid no:45, Dhaka
                                  </p>
                                </div>

                             </div>
                              </div>
                          </div>

                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Footer;