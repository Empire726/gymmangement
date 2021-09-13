import React from 'react';
import {FiPhoneCall, FiMapPin} from 'react-icons/fi';
import {FaFacebook, FaInstagramSquare, FaYoutube,FaWhatsappSquare} from 'react-icons/fa';
import styles from '../../StyleSheet/Fotter/footer.module.css';
import Logo from '../../Component/image/gym.png';
// import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles['brand']}>
        <div className={styles['image-logo']}>
          <img src={Logo} alt="none" />
        </div>
        <span>GYM TRAINER</span>
        {/* <span>All Copyrights Reserved</span> */}
      </div>
      <div className={styles['footer-menu-wrapper']}>
        <div className={styles['footer-menu']}>
          <a exact href="/">Home</a>
          <a exact href="/trans">Trans</a>
          <a exact href="/Categrey">Product</a>
          <a exact href="/plan">Price</a>
          <a exact href="/contact">Contact Us </a>
        </div>
        
        <div className={styles['footer-menu']}>
          <a exact href="/">Exercise</a>
          <a exact href="/client">Client</a>
          <a exact href="/Categrey">Gym</a>
          <a exact href="/plan">Trainer</a>
          <a exact href="/contact">About Us </a>
        </div>
        <div className={styles['footer-menu']}>
          <a href="#"><FaFacebook /> Facebook</a>
          <a href="#"><FaInstagramSquare /> Instagram</a>
          <a href="+918708353430"><FiPhoneCall /> Phone</a>
          <a href="#"><FiMapPin /> Location</a>
          <a href="#"><FaYoutube /> Youtube</a>
        </div>
        <div className={styles['footer-menu']}>

          <a href="#">Privacy Policy</a>
          <a href="#">Terms {'&'} Conditions</a>
        </div>

      </div>
      {/* <div className={styles['what-icon']}>
        <a href="#">
          <FaWhatsappSquare className={styles["icon-set"]} />
        </a>  */}
       {/* </div> */}

    </div>
  );
};

export default Footer;

// -------------------------------------------------------------------------------------------------------
