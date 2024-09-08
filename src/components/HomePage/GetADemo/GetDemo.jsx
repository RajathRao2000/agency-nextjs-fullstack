import PrimaryBtn from "../ui/PrimaryBtn/PrimaryBtn";
import styles from "./GetADemo.module.css";
const GetADemo = () => {
  return (
    <div className={styles.container}>
      <h1>Let Nextcent do the work so you don&apos;t have to!</h1>
      <PrimaryBtn value="Get a Demo" arrow={"white"} />
    </div>
  );
};

export default GetADemo;
