import Link from "next/link";
import Links from "./links/Links";
import styles from "./navbar.module.css";
import { auth } from "@/lib/auth";
import Image from "next/image";
const Navbar = async () => {
  const session = await auth();
  return (
    <div className={styles.container}>
      <Link href={"/"} className={styles.logo}>
        <Image alt="logo" src="/logo.svg" height={30} width={30} />
      </Link>
      <div>
        <Links session={session} />
      </div>
    </div>
  );
};

export default Navbar;
