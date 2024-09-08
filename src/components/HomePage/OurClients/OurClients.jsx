import Image from "next/image";
import styles from "./OurClients.module.css";
import clients from "./clients_logo.png";
const OurClients = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Our Clients</h2>
      <p className={styles.text}>
        We have been working with some Fortune 500+ clients
      </p>
      <div className={styles.img}>
        <Image fill src={clients} alt="clients" />
      </div>
    </div>
  );
};

export default OurClients;
