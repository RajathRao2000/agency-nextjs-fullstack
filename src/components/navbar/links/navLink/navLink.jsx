"use client";
import { usePathname } from "next/navigation";
import styles from "./navLink.module.css";
import Link from "next/link";
const NavLink = ({ item }) => {
  const pathName = usePathname();
  return (
    <Link
      key={item.title}
      className={`${styles.container} ${
        pathName === item.path && styles.active
      }`}
      href={item.path}
    >
      {item.title}
    </Link>
  );
};

export default NavLink;
