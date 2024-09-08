import Arrow from "../Icons/Arrow";
import styles from "./PrimaryBtn.module.css";
import Link from "next/link";
const PrimaryBtn = ({
  value,
  arrow,
  as = "button",
  link = "#",
  styles: _styles = {},
}) => {
  return (
    <>
      {as == "link" ? (
        <Link style={_styles} className={`${styles.styling}`} href={link}>
          {value}
        </Link>
      ) : (
        <button style={_styles} className={`${styles.styling}`}>
          {value}
          {arrow && <Arrow color={arrow} />}
        </button>
      )}
    </>
  );
};

export default PrimaryBtn;
