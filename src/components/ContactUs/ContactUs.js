import React, { useState } from "react";

import { TbCircleCheckFilled, TbCircleFilled } from "react-icons/tb";
import styles from "./ContactUs.module.css";
import { pattern } from "../../images/images";
import SuccessModal from "./SuccessModal/SuccessModal";

const ContactUs = () => {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phonNumber: "",
    message: "",
    subject: "",
  });
  const [activeSubject, setActiveSubject] = useState(0);
  const [modal, setModal] = useState(false);
  const subjects = [
    "General Inquiry",
    "General Inquiry",
    "General Inquiry",
    "General Inquiry",
  ];
  const inputs = [
    {
      label: "First Name",
      type: "text",
      name: "firstName",
      required: true,
    },
    {
      label: "Last Name",
      type: "text",
      name: "lastName",
      required: true,
    },
    {
      label: "Email",
      type: "email",
      name: "email",
      required: true,
    },
    {
      label: "Phone Number",
      type: "text",
      name: "phonNumber",
      required: false,
    },
  ];
  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setModal(true);
  };

  return (
    <>
      <section className={styles.wrapper} id="contactus">
        <img src={pattern} alt="#" className={styles.pattern} />{" "}
        <h2 className={styles.title}>Contact us</h2>
        <p className={styles.text}>
          Any question or remarks? Just write us a message!
        </p>
        <div className={styles.container}>
          <form action="" className={styles.form} onSubmit={handleSubmit}>
            {" "}
            <div className={styles.inputWrapper}>
              {inputs.map((input, i) => (
                <div className={styles.inputContainer} key={i}>
                  <label htmlFor={input.name} className={styles.label}>
                    {input.label}
                  </label>
                  <input
                    key={i}
                    value={values[input.name]}
                    name={input.name}
                    onChange={onChange}
                    type={input.type}
                    id={input.name}
                    className={styles.input}
                    required={input.required}
                  />
                </div>
              ))}
            </div>
            <div className={styles.subjectContainer}>
              <p className={styles.selectSubject}>Select Subject?</p>
              <div className={styles.subjectListContainer}>
                {subjects.map((subject, i) => (
                  <div className={styles.subjectList} key={i}>
                    {activeSubject === i ? (
                      <TbCircleCheckFilled
                        className={styles.circle}
                        color="#000000"
                        onClick={() => setActiveSubject(i)}
                      />
                    ) : (
                      <TbCircleFilled
                        className={styles.circle}
                        color="#E0E0E0"
                        onClick={() => {
                          setActiveSubject(i);
                          setValues({ ...values, subject: subject });
                        }}
                      />
                    )}

                    <p
                      key={i}
                      className={[styles.subject, styles.label].join(" ")}
                    >
                      {subject}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.inputContainer}>
              <label htmlFor="message" className={styles.label}>
                Message
              </label>

              <textarea
                required
                rows="1"
                name="message"
                id="message"
                className={styles.textArea}
                placeholder="Write your message.."
                onChange={(e) => {
                  setValues({ ...values, message: e.target.value });
                }}
              ></textarea>
            </div>
            <button type="submit" className={styles.button}>
              Send Message
            </button>
          </form>
        </div>
      </section>
      {modal && <SuccessModal setModal={setModal} />}
    </>
  );
};

export default ContactUs;
