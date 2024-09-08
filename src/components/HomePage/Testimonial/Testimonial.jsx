import React from "react";
import styles from "./Testimonial.module.css";
import img from "./img.png";
import companyLogos from "./company-logos.png";
import Arrow from "../ui/Icons/Arrow";
import Image from "next/image";

const Testimonial = () => {
  return (
    <div className={styles.container}>
      <div className={styles.img}>
        <Image src={img} width={326} height={326} alt="img" />
      </div>
      <div className={styles.content}>
        <p className={styles.testimonial}>
          “We have enjoyed working with the JustGo system to setup and go live
          with our new membership platform. The initial effort to organise it
          along the lines of how our sport currently works was quick and
          relatively easy. The new system has already massively improved the
          time and effort it takes to setup and process member and club
          applications. It will help us to communicate with people in our sport
          in a much more effective way, and collect data to help us improve how
          our sport is governed.”
        </p>
        <div className={styles.customerInfo}>
          <p className={styles.name}>Tim Smith</p>
          <p className={styles.designation}>
            British Dragon Boat Racing Association
          </p>
        </div>
        <div className={styles["company-logos"]}>
          <Image src={companyLogos} alt="company-logos" />
          <div className={styles.text}>
            <p>Meet all customers</p> <Arrow />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
