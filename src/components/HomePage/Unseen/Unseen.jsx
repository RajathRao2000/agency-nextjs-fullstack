import Image from "next/image";
import PrimaryBtn from "../ui/PrimaryBtn/PrimaryBtn";
import styles from "./Unseen.module.css";
import img from "./img.png";
const Unseen = () => {
  return (
    <div className={styles.container}>
      <div className={styles.img}>
        <Image width={500} height={520} src={img} alt="" />
      </div>
      <div className={styles.content}>
        <h2>The unseen of spending three years at Pixelgrade</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet
          justo ipsum. Sed accumsan quam vitae est varius fringilla.
          Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
          tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
          Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
          elementum pulvinar odio.
        </p>
        <PrimaryBtn value={"Learn More"} />
      </div>
    </div>
  );
};

export default Unseen;
