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
          <p className={[styles.success, styles.title].join(" ")}>Success</p>
          <h2 className={styles.text}>Your message was send successfully</h2>
        </div>
      </div>
    </>
  );
};

export default SuccessModal;
