import React from "react";
import { FaArrowAltCircleRight } from "react-icons/fa";
import styles from "./SuggetionForPlaying.module.css";
import { playing } from "../../../images/images";

const SuggetionForPlaying = () => {
  const textArray = [
    "Each player takes turns asking the questions and the Reader is the last to respond",
    "Clothes you feel relaxed in",
    "A fire going...either in a fireplace, fire pit or streamed on your TV",
    "Decide if the answers will be Silly, Serious or Both",
    '"Jeopardy Style" - Instead of reading the question, Give Your Answer and players guess what the question is.',
    "Be kind, listen and have empathy...unless you are playing with Cousin Gary",
  ];
  return (
    <section className={styles.wrapper} id="howtoplay">
      <div className={styles.container}>
        <img src={playing} alt="#" className={styles.image} />
        <div className={styles.textWrapper}>
          <h2 className={styles.title}>Suggestions For Playing</h2>
          <div className={styles.textContainer}>
            {textArray.map((el, i) => (
              <div className={styles.textBox} key={i}>
                <FaArrowAltCircleRight className={styles.arrow} />
                <p className={styles.text}>{el}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuggetionForPlaying;
