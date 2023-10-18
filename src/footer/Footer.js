import React from 'react'
import "./Footer.css"
import { FaShoppingBag,FaStar,FaGift,FaQuestionCircle } from 'react-icons/fa';

export default function Footer() {
  return (
    <>

    <footer>

<div className="footer-row">
    <div className="footer-col-1">
        <div className="footer-heading">
             <p>ABOUT</p>
        </div>
        <div className="footer-list">
            <a href="#">Contact Us</a>
            <a href="#">About Us</a>
            <a href="#">Careers</a>
            <a href="#">Flipkart Stories</a>
            <a href="#">Press</a>
            <a href="#">Flipkart Wholesale</a>
        </div>
    </div>
    <div className="footer-col-2">
        <div className="footer-heading">
             <p>HELP</p>
        </div>
        <div className="footer-list">
            <a href="#">Payments</a>
            <a href="#">Shipping</a>
            <a href="#">Cancellation & Returns</a>
            <a href="#">FAQ</a>
            <a href="#">Report Infringement</a>
            
        </div>
    </div>
    <div className="footer-col-3">
        <div className="footer-heading">
             <p>POLICY</p>
        </div>
        <div className="footer-list">
            <a href="#">Return Policy</a>
            <a href="#">Terms Of Use</a>
            <a href="#">Security</a>
            <a href="#">Privacy</a>
            <a href="#">Sitemap</a>
            <a href="#">EPR Compliance</a>
        </div>
    </div>
    <div className="footer-col-4">
        <div className="footer-heading">
             <p>SOCIAL</p>
        </div>
        <div class="footer-list">
            <a href="https://www.facebook.com/flipkart">Facebook</a>
            <a href="https://twitter.com/flipkart">Twitter</a>
            <a href="https://www.youtube.com/flipkart">YouTube</a>
           
        </div>
    </div>

    <div className="footer-col-5">
        <div className="footer-heading">
             <p>Mail Us :</p>
        </div>
        <div className="footer-list">
             <p>Flipkart Internet Private Limited,<br/>
                Buildings Alyssa, Begonia &<br/>
                Clove Embassy Tech Village,<br/>
                Outer Ring Road, Devarabeesanahalli Village,<br/>
                Bengaluru, 560103,<br/>
                Karnataka, India</p>
           
        </div>
    </div>

    <div className="footer-col-6">
        <div className="footer-heading">
             <p>Registered Office Address</p>
        </div>
        <div className="footer-list-address">
         <p>Flipkart Internet Private Limited,</p>
         <p>Buildings Alyssa, Begonia &</p>
         <p>Clove Embassy Tech Village,</p>
         <p>Outer Ring Road, Devarabeesanahalli Village,</p>
         <p>Bengaluru, 560103,</p>
         <p>Karnataka, India</p>
         <p>CIN : U51109KA2012PTC066107</p>
         <p> Telephone:<span> 1800 202 9898</span></p>
           
        </div>
    </div>
</div>
<div className="footer-row2">
    <div className="footer-row2-col">
        {/* <p> <i class="fas fa-shopping-bag"></i>Sell On Flipkart</p> */}
        <a href="https://seller.flipkart.com/sell-online?utm_source=fkwebsite&utm_medium=websitedirect"><p><FaShoppingBag className='fa-shopping-bag'/>Become a Seller</p></a>
        
    </div>
    <div className="footer-row2-col">
    <a href="https://brands.flipkart.com/"><p><FaStar className="fa-star" />Advertise</p></a>
        
    </div>
    <div className="footer-row2-col">
    <a href="https://www.flipkart.com/the-gift-card-store?otracker=${otracker}_footer_navlinks"><p><FaGift className="fa-gift"/>Gift Cards</p></a>
        
    </div>
    <div className="footer-row2-col">
        <a href="https://www.flipkart.com/helpcentre?otracker=${otracker}_footer_navlinks"><p><FaQuestionCircle className="fas fa-question-circle" />Help Center</p></a>
        
    </div>
    <div className="footer-row2-col">
        <p>© 2007-2023 Flipkart.com</p>
    </div>
    <div className="footer-row2-col">
        <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/payment-method-c454fb.svg" alt="payments"/>
    </div>
</div>
</footer>
</>
  )
}