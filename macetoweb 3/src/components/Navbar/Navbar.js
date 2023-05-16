import React, { useState, useEffect } from "react";
import styles from "./Navbar.module.css";

import { logo } from "../../images/images";
import { AiOutlineAlignLeft } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
// import { useLocation } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const [sidebar, setSidebar] = useState(false);

  // let location = useLocation();
  const navItems = [
    { navItem: "How to Play", to: "/#howtoplay" },
    { navItem: "Features", to: "/#features" },
    { navItem: "FAQs", to: "/#faq" },
    { navItem: "Contact us", to: "/#contactus" },
  ];
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 0.99) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <section
      className={[styles.wrapper, isScrolled && styles.activeNavbar].join(" ")}
    >
      <div className={styles.container}>
        <img src={logo} alt="#" className={styles.logo} />
        <AiOutlineAlignLeft
          className={styles.hamburger}
          onClick={() => setSidebar((prev) => !prev)}
        />
        <div className={[styles.navItems, sidebar && styles.sidebar].join(" ")}>
          {sidebar && (
            <IoMdClose
              className={styles.close}
              onClick={() => setSidebar((prev) => !prev)}
            />
          )}
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? [styles.navActive, styles.navItem].join(" ")
                : styles.navItem
            }
          >
            Home
          </NavLink>
          {navItems.map((el, i) => (
            <HashLink
              key={i}
              className={styles.navItem}
              // className={
              //   `${location.pathname}${location.hash}` === el.to
              //     ? [styles.navActive, styles.navItem].join(" ")
              //     : styles.navItem
              // }
              to={el.to}
              scroll={(el) => {
                const yCoordinate =
                  el.getBoundingClientRect().top + window.pageYOffset;
                const yOffset = -100;
                window.scrollTo({
                  top: yCoordinate + yOffset,
                  behavior: "smooth",
                });
              }}
              onClick={() => setSidebar((prev) => !prev)}
            >
              {el.navItem}
            </HashLink>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Navbar;
