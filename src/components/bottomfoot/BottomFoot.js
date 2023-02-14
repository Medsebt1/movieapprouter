import React from "react";

const BottomFoot = () => {
  return (
    <div className="Lou">
      <div>
        <h1>Support</h1>
        <h4> FAQs</h4>
        <h4> Privacy Policy</h4>
        <h4>Terms & Conditions </h4>
        <h4> Report Piracy</h4>
        <h4>Contact us</h4>
      </div>
      <div>
        <h1>FOLLOW US</h1>
        <h4> Facebook</h4>
        <h4> Twitter</h4>
        <h4>Instagram</h4>
        <h4> Youtube</h4>
      </div>
      <div>
        <h1>DOWNLOAD OUR APPS</h1>
        <div>
          <h4> App Store</h4>
          <img
            className="appst"
            src="https://me-static.beinstatic.com/images/apple-badge.cb24501.png"
            alt="img"
          />
        </div>
        <div>
          <h4> Play Store</h4>

          <img
            className="appst"
            src="https://me-static.beinstatic.com/images/google-badge.03e68d6.png"
            alt="img"
          />
        </div>
      </div>
    </div>
  );
};

export default BottomFoot;
