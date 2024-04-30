import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="container">
          <div className="row">
            <div className="footer-col">
              <h4>Useful Links</h4>
              <ul>
                <li>About</li>
                <li>Careers</li>
                <li>Blog</li>
                <li>Press</li>
                <li>Lead</li>
                <li>Value</li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Information</h4>
              <ul>
                <li>Privacy</li>
                <li>Terms</li>
                <li>FAQs</li>
                <li>Securiink</li>
                <li>Mobile</li>
                <li>Contact</li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Categories see all</h4>
              <ul>
                <li>Vegetables &amp; Fruits</li>
                <li>Cold Drinks &amp; Juices</li>
                <li>Bakery &amp; Biscuits</li>
                <li>Dry Fruits &amp; Masalas</li>
                <li>Organic &amp; Premium</li>
                <li>Pharma &amp; Welness</li>
                <li>Icecreams &amp; Frozen Desserts</li>
                <li>Beauty &amp; Cosmetics</li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>More Categories</h4>
              <ul>
                <li>Instant &amp; Frozen Food</li>
                <li>Dairy &amp; Breakfast</li>
                <li>Sweet Tooth</li>
                <li>Sauces &amp; Spreads</li>
                <li>Paan Corner</li>
                <li>Cleaning Essentials</li>
                <li>Personal Care</li>
                <li>Toys &amp; Games</li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Miscellaneous</h4>
              <ul>
                <li>Munchies</li>
                <li>Tea,Coffee &amp; Health Drinks</li>
                <li>Atta,Rice &amp; Dal</li>
                <li>Chicken,Meat &amp; Fish</li>
                <li>Baby Care</li>
                <li>Home &amp; Office</li>
                <li>Pet Care</li>
                <li>Print Store</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      <div className="footer">
        <div className="social-links">
          <i className="fab fa-facebook-f"></i>
          <i className="fab fa-twitter"></i>
          <i className="fab fa-instagram"></i>
          <i className="fab fa-linkedin"></i>
          <i className="fab fa-threads"></i>
        </div>
      </div>

      <div className="end">
        <p>"Blinkit” is owned & managed by "Blink Commerce Private Limited" (formerly known as Grofers India Private Limited) and is not related, linked or interconnected in whatsoever manner or nature, to “GROFFR.COM” which is a real estate services business operated by “Redstone Consultancy Services Private Limited”.</p>
        </div>

    </>
  );
};

export default Footer;
