import logo from "../../../../public/logo-black.png";
import styles from "./header.module.css";
import Image from "next/image";
import Navigation from "./Navigation/Navigation";
import { auth } from "@/lib/auth";

const Header = async () => {
  const session = await auth();
  return (
    <header className={styles.header}>
      <div className={styles["header-container"]}>
        <div className={styles.logo}>
          <Image fill src={logo} alt="logo" />
        </div>
        <Navigation session={session} />
      </div>
    </header>
  );
};

export default Header;
