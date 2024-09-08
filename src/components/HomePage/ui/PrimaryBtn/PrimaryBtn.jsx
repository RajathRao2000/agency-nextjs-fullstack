import Arrow from "../Icons/Arrow";
import styles from "./PrimaryBtn.module.css";
const PrimaryBtn = ({ value, arrow }) => {
  return (
    <button className={`${styles.button}`}>
      {value}
      {arrow && <Arrow color={arrow} />}
    </button>
  );
};

export default PrimaryBtn;
