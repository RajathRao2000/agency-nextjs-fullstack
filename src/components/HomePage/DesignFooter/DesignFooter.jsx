import Image from "next/image";
import PrimaryBtn from "../ui/PrimaryBtn/PrimaryBtn";
import styles from "./DesignFooter.module.css";
import img from "./img.png";
const DesignFooter = () => {
  return (
    <div className={styles.container}>
      <div className={styles.img}>
        <Image width={500} height={500} src={img} alt="" />
      </div>
      <div className={styles.content}>
        <h2>How to design your site footer like we did</h2>
        <p>
          Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor,
          augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque
          elit erat a magna. Donec quis erat at libero ultrices mollis. In hac
          habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi
          facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet
          urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur
          quis massa. Praesent felis est, finibus et nisi ac, hendrerit
          venenatis libero. Donec consectetur faucibus ipsum id gravida.
        </p>
        {/* <button>Learn More</button> */}
        <PrimaryBtn value={"Learn More"} />
      </div>
    </div>
  );
};

export default DesignFooter;
