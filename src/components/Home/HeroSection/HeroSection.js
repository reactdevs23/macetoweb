import React from "react";
import styles from "./HeroSection.module.css";
import { appStore, googlePlay, heroBg, heroImg } from "../../../images/images";

const HeroSection = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.container}>
        <div className={styles.textWrapper}>
          <h1 className={styles.title}>The ChitChat Game</h1>
          <div className={styles.textContainer}>
            <p className={styles.text}>
              {" "}
              The ChitChat Game is a fun conversation game that is played by
              just asking questions provided for you!{" "}
            </p>
            <p className={styles.text}>
              {" "}
              This game can be played with friends, family and in any situation
              where you would love to "break the ice" and get into a real chat.{" "}
            </p>
            <p className={styles.text}>
              {" "}
              The questions range from super light to getting deep.
            </p>
            <p className={styles.text}>
              {" "}
              The ultimate goal is to have an enjoyable time and connect with
              those you love or are stuck with at the moment...Hello Company
              Retreat! Technically, there are no winners and losers; however,
              those who choose not to play are losers...Yeah, I'm talking about
              you Cousin Gary!
            </p>
          </div>
          <div className={styles.store}>
            <a href="#/" target="_blank" rel="noreferrer">
              <img src={appStore} alt="#" className={styles.icon} />
            </a>
            <a href="#/" target="_blank" rel="noreferrer">
              <img src={googlePlay} alt="#" className={styles.icon} />
            </a>
          </div>
        </div>
        <img src={heroImg} alt="#" className={styles.image} />
      </div>
    </section>
  );
};

export default HeroSection;
