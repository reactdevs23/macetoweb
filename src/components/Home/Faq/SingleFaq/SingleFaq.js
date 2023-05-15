import React, { useState } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import styles from "./SingleFaq.module.css";

const SingleFaq = ({ question, answer }) => {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <div
      className={[styles.singleFaq, showAnswer && styles.activeSingleFaq].join(
        " "
      )}
    >
      <div className={styles.questionAndAnswer}>
        <p className={styles.question}>{question}</p>
        {showAnswer && <p className={styles.answer}>{answer}</p>}
      </div>
      <div className={styles.arrowBox}>
        {" "}
        <MdKeyboardArrowRight
          className={styles.arrow}
          onClick={() => setShowAnswer((prev) => !prev)}
        />
      </div>
    </div>
  );
};

export default SingleFaq;
