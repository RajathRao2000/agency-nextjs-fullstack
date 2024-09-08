import Image from "next/image";
import PrimaryBtn from "../ui/PrimaryBtn/PrimaryBtn";
import styles from "./hero.module.css";
import heroImg from "./Heroimg.svg";

const Hero = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1>
          Lessons and insights <div>from 8 years</div>
        </h1>
        <p>
          Where to grow your business as a photographer: site or social media?
        </p>
        <PrimaryBtn value="Register" />
      </div>
      <div className={styles.image}>
        <Image src={heroImg} alt="hero" width={407} height={391} />
      </div>
    </div>
  );
};

export default Hero;
