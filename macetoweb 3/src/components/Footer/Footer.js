import React from "react";
import styles from "./Footer.module.css";
import { logo } from "../../images/images";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Footer = () => {
  return (
    <>
      <section className={styles.wrapper}>
        <div className={styles.container}>
          <div className={[styles.box, styles.logoAndText]}>
            <img src={logo} alt="#" className={styles.logo} />
            <p className={styles.text}>
              The ChitChat Game is a fun conversation game that is played by
              just asking questions provided for you!
            </p>
          </div>
          <div className={[styles.box].join(" ")}>
            <p className={styles.heading}>Quick Lines</p>
            <HashLink
              to="#howtoplay"
              scroll={(el) => {
                const yCoordinate =
                  el.getBoundingClientRect().top + window.pageYOffset;
                const yOffset = -100;
                window.scrollTo({
                  top: yCoordinate + yOffset,
                  behavior: "smooth",
                });
              }}
              className={styles.link}
            >
              How to Play
            </HashLink>
          </div>
          <div className={[styles.box].join(" ")}>
            <p className={styles.heading}>Support</p>
            <Link to="/privacyPolicy" className={styles.link}>
              Privacy Policy
            </Link>{" "}
            <Link to="/termsAndCondition" className={styles.link}>
              Terms and Conditions
            </Link>
          </div>
          <div className={[styles.box, styles.contactUs].join(" ")}>
            <p className={styles.heading}>Contact Us </p>
            <a
              href="tel:(406) 555-0120"
              target="_blank"
              rel="noreferrer"
              className={styles.link}
            >
              (406) 555-0120
            </a>{" "}
            <a
              href="tel:(603) 555-0123"
              target="_blank"
              rel="noreferrer"
              className={styles.link}
            >
              (603) 555-0123
            </a>{" "}
            <a
              href="mailto: jessica.hanson@example.com"
              target="_blank"
              rel="noreferrer"
              className={styles.link}
            >
              jessica.hanson@example.com
            </a>
          </div>
        </div>
      </section>
      <p className={styles.copyrightText}>
        Copyright © 2023. chitchatgame.com - All Rights Reserved.
      </p>
    </>
  );
};

export default Footer;
