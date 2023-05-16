import React from "react";
import { MdClose } from "react-icons/md";
import styles from "./SuccessModal.module.css";

const SuccessModal = ({ setModal }) => {
  return (
    <>
      <div className={styles.modal}>
        {" "}
        <div className={styles.wrapper}>
          <MdClose className={styles.icon} onClick={() => setModal(false)} />

          <h2 className={styles.title}>Your message was send successfully</h2>
        </div>
      </div>
      <div className={styles.overlay} onClick={() => setModal(false)}></div>
    </>
  );
};

export default SuccessModal;
