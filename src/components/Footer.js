import "./FooterStyles.css";

import React from "react";

import {
  FaHome,
  FaPhone,
  FaMailBulk,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
    return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
             <div className="location">
              <FaHome size={20} style={{ color: "#fff", marginRight: "2rem"}}/>
              <div>
                <p> Königin Elisabethstraße 6.</p>
                <p>Berlin Germany</p>
              </div>
             </div>
             <div className="phone">
                <h4>
                    <faPhone 
                    size={20}
                    style={{ color: "#fff", marginRight: "rem"}}
                    />
                    +491719461807
                </h4>
             </div>
             <div className="email">
                <h4>
                    <FaMailBulk
                    size={20}
                    style={{ color: "#fff", marginRight: "2rem"}}
                    />
                    shantelmakwiranzou@gmail.com
                </h4>
             </div>
            </div>
        <div className="social">
        <FaFacebook
              size={30}
              style={{ color: "#fff", marginRight: "1rem" }}
            />
            <FaTwitter
              size={30}
              style={{ color: "#fff", marginRight: "1rem" }}
            />
            <FaLinkedin
              size={30}
              style={{ color: "#fff", marginRight: "1rem" }}
            />
        </div>
        </div>
    </div>
    );
};

export default Footer;