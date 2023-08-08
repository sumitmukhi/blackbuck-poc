import React from "react";
import "./Footer.css";

export const Footer = () => {
  return (
    <div className="frame bottom-nav" id="footer">
      <p className="footer-left">Copyright © Zinka Logistics Solutions Pvt. Ltd.</p>
      <p className="footer-right">All Rights Reserved | Terms and Conditions | Privacy Policy</p>
      <div className="group">
        <img className="facebook" alt="Facebook" src="/static/footer/facebook.svg" />
        <div className="social-media-icon">
          <img className="twitter" alt="Twitter" src="/static/footer/twitter.svg" />
        </div>
        <div className="div">
          <img className="instagram" alt="Instagram" src="/static/footer/instagram.svg" />
        </div>
        <div className="group-wrapper">
          <div className="group-2" />
        </div>
        <div className="div-wrapper">
          <div className="group-3" />
        </div>
      </div>
      <div className="footer-title">Home</div>
      <div className="text-wrapper">Company</div>
      <div className="footer-title-2">Products</div>
      <div className="footer-title-3">Teams</div>
      <div className="footer-title-4">Life@BlackBuck</div>
      <div className="footer-title-5">Blogs &amp; News</div>
      <div className="group-4">
        <div className="copyright">India’s largest trucking platform</div>
        <div className="group-5">
          <div className="group-6">
            <img className="fill" alt="Fill" src="/static/footer/fill-1-1.svg" />
            <img className="img" alt="Fill" src="/static/footer/fill-3.svg" />
            <div className="overlap-group">
              <img className="fill-2" alt="Fill" src="/static/footer/fill-5.svg" />
              <img className="group-7" alt="Group" src="/static/footer/group-9.png" />
            </div>
            <img className="fill-3" alt="Fill" src="/static/footer/fill-10.svg" />
            <img className="fill-4" alt="Fill" src="/static/footer/fill-12.svg" />
            <img className="group-8" alt="Group" src="/static/footer/group-16.png" />
            <img className="fill-5" alt="Fill" src="/static/footer/fill-17.svg" />
            <img className="fill-6" alt="Fill" src="/static/footer/fill-19.svg" />
          </div>
          <img className="fill-7" alt="Fill" src="/static/footer/fill-1.svg" />
        </div>
      </div>
    </div>
  );
};

export default Footer;