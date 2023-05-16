import React from "react";
import styles from "./Feature.module.css";
import { feature1, feature2, feature3 } from "../../../images/images";

const Feature = () => {
  const features = [
    { img: feature1, info: "Play with your <br/> friends" },
    { img: feature2, info: "Thousands of questions <br/> in our library" },
    { img: feature3, info: "No one looses <br/> the battle" },
  ];
  return (
    <section className={styles.wrapper} id="features">
      <div className={styles.container}>
        <h2 className={styles.title}>App Features</h2>
        <p className={styles.text}>
          Will Provide you the best Questions all over the world
        </p>
        <div className={styles.features}>
          {features.map((feature, i) => (
            <div className={styles.feature} key={i}>
              <div className={styles.imageContainer}>
                <img src={feature.img} alt="#" className={styles.image} />
              </div>

              <p
                className={styles.info}
                dangerouslySetInnerHTML={{ __html: feature.info }}
              ></p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Feature;
