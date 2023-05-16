import React, { useState } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import styles from "./Faq.module.css";


const Faq = () => {
  const [activeFaq, setActiveFaq] = useState(0);
  const faqs = [
    {
      question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
  ];

  return (
    <section className={styles.wrapper} id="faq">
      <div className={styles.container}>
        <h2 className={styles.title}>Frequently Asked Questions</h2>
        <div className={styles.faqs}>
          {faqs.map((el, index) => (
            <div
              key={index}
              className={[
                styles.singleFaq,
                activeFaq === index && styles.activeSingleFaq,
              ].join(" ")}
            >
              <div className={styles.questionAndAnswer}>
                <p className={styles.question}>{el.question}</p>
                {activeFaq === index && (
                  <p className={styles.answer}>{el.answer}</p>
                )}
              </div>
              <div className={styles.arrowBox}>
                {" "}
                <MdKeyboardArrowRight
                  className={styles.arrow}
                  onClick={() => setActiveFaq(index)}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
//    <div className={styles.faqs}>
//      {faqs.map((el, index) => (
//        <div
//          key={index}
//          className={[
//            styles.singleFaq,
//            activeFaq === index && styles.activeSingleFaq,
//          ].join(" ")}
//        >
//          <div className={styles.questionAndAnswer}>
//            <p className={styles.question}>{el.question}</p>
//            {activeFaq === index && <p className={styles.answer}>{el.answer}</p>}
//          </div>
//          <IoIosArrowDropdownCircle
//            className={styles.arrow}
//            onClick={() => setActiveFaq(index)}
//          />
//        </div>
//      ))}
//    </div>;
