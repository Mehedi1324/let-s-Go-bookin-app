import React from 'react';
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="w-full px-3 pt-6 bg-gray-800 text-white/50">
      {' '}
      <div className="">
        <div className="footer__container">
          <div>
            <div className="grid w-full grid-cols-3 gap-5 justify-items-center ">
              <div className="category" lg={3} md={6} sm={6} xs={12}>
                <h4 className="mb-2 text-xl font-bold text-white">Company</h4>
                <Link className="hover:text-blue-500" to="#">
                  About Us
                </Link>
                <br />
                <Link className="hover:text-blue-500" to="#">
                  Testimonials{' '}
                </Link>
                <br />
                <Link className="hover:text-blue-500" to="#">
                  Rewards
                </Link>
                <br />
                <Link className="hover:text-blue-500" to="#">
                  Work with Us
                </Link>
                <br />
              </div>
              <div className="category" lg={3} md={6} sm={6} xs={12}>
                <h4 className="mb-2 text-xl font-bold text-white">Support</h4>
                <Link className="hover:text-blue-500" to="#">
                  Account
                </Link>
                <br />
                <Link className="hover:text-blue-500" to="#">
                  Contact Us
                </Link>
                <br />
                <Link className="hover:text-blue-500" to="#">
                  Faq
                </Link>
                <br />
                <Link className="hover:text-blue-500" to="#">
                  Contact
                </Link>
                <br />
                <Link className="hover:text-blue-500" to="#">
                  Privacy Policy
                </Link>
                <br />
              </div>
              <div className="category " lg={3} md={6} sm={6} xs={12}>
                <h4 className="mb-2 text-xl font-bold text-white">
                  Other Services
                </h4>
                <Link className="hover:text-blue-500" to="#">
                  Community program
                </Link>
                <br />
                <Link className="hover:text-blue-500" to="#">
                  Rewards Program
                </Link>
                <br />
                <Link className="hover:text-blue-500" to="#">
                  Investor Relations
                </Link>
                <br />
                <Link className="hover:text-blue-500" to="#">
                  Partners
                </Link>
                <br />
                <Link className="hover:text-blue-500" to="#">
                  List My Hotel
                </Link>
                <br />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-white/20">
          <p>Copyright © 2022 Let's Go . Developer Hasan</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
