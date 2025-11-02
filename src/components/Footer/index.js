import React from "react";
import { GrInstagram } from "react-icons/gr";
import { FaLinkedin } from "react-icons/fa";
import "./index.css";

const Footer = () => {
  return (
    <footer className="footer">
      {/* ---------------- TOP SECTION ---------------- */}
      <div className="footer-top">
        <div className="footer-subscribe">
          <h4>BE THE FIRST TO KNOW</h4>
          <p>Sign up for updates from mettā muse.</p>
          <div className="subscribe-box">
            <input type="email" placeholder="Enter your e-mail..." />
            <button>SUBSCRIBE</button>
          </div>
        </div>

        <div className="footer-contact">
          <h4>CONTACT US</h4>
          <p>+44 221 133 5360</p>
          <p>customercare@mettamuse.com</p>

          <h4>CURRENCY</h4>
          <div className="currency">
            <img
              src="https://flagcdn.com/w20/us.png"
              alt="USD"
              className="flag"
            />
            <span>USD</span>
          </div>
          <p className="currency-note">
            Transactions will be completed in Euros and a currency reference is
            available on hover.
          </p>
        </div>
      </div>

      <hr className="divider" />

      {/* ---------------- BOTTOM SECTION (Updated) ---------------- */}
      <div className="footer-bottom">
        <div className="footer-left">
          <div className="footer-column">
            <h4>mettā muse</h4>
            <ul>
              <li>About Us</li>
              <li>Stories</li>
              <li>Artisans</li>
              <li>Boutiques</li>
              <li>Contact Us</li>
              <li>EU Compliances Docs</li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>QUICK LINKS</h4>
            <ul>
              <li>Orders & Shipping</li>
              <li>Join/Login as a Seller</li>
              <li>Payment & Pricing</li>
              <li>Return & Refunds</li>
              <li>FAQs</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>
        </div>

        <div className="footer-right">
          <div className="follow-section">
            <h4>FOLLOW US</h4>
            <div className="social-icons">
              <a href="#"><GrInstagram /></a>
              <a href="#"><FaLinkedin /></a>
            </div>
          </div>

          <div className="payment-section">
            <h4>mettā muse ACCEPTS</h4>
            <div className="payment-icons">
              <img src="https://res.cloudinary.com/douyiqjdq/image/upload/v1761983961/Screenshot_2025-11-01_132554_apecpn.png" alt="GooglePay" />
              <img src="https://res.cloudinary.com/douyiqjdq/image/upload/v1761983961/Screenshot_2025-11-01_132633_m657c7.png" alt="MasterCard" />
              <img src="https://res.cloudinary.com/douyiqjdq/image/upload/v1761983961/Screenshot_2025-11-01_132641_zrt85o.png" alt="PayPal" />
              <img src="https://res.cloudinary.com/douyiqjdq/image/upload/v1761983961/Screenshot_2025-11-01_132651_xpgdm0.png" alt="Amex" />
              <img src="https://res.cloudinary.com/douyiqjdq/image/upload/v1761983972/Screenshot_2025-11-01_132658_smtudq.png" alt="ApplePay" />
              <img src="https://res.cloudinary.com/douyiqjdq/image/upload/v1761983961/Screenshot_2025-11-01_132706_hkrxcr.png" alt="Visa" />
            </div>
          </div>
        </div>
      </div>

      <div className="footer-copy">
        <p>Copyright © 2025 mettamuse. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
