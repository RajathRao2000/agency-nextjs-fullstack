"use client";
import { handleLogout } from "@/lib/actions";
import { useState } from "react";
import Link from "next/link";
import styles from "./Navigation.module.css";
import PrimaryBtn from "../../ui/PrimaryBtn/PrimaryBtn";
import Image from "next/image";

const navLinks = [
  {
    title: "Homepage",
    path: "/",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Contact",
    path: "/contact",
  },
  {
    title: "Blog",
    path: "/blog",
  },
];
const Navigation = ({ session }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className={styles.navlinks_desktop}>
        <nav className={styles.navlinks}>
          {navLinks.map((link) => (
            <Link key={link.title} href={link.path}>
              {link.title}
            </Link>
          ))}
        </nav>
        <div className={styles["auth-btn-group"]}>
          {session?.user ? (
            <>
              {session.user?.isAdmin && (
                <Link href={"/admin"} className={`${styles.secondary}`}>
                  Admin
                </Link>
              )}
              <form action={handleLogout}>
                <PrimaryBtn value="Logout" />
              </form>
            </>
          ) : (
            <>
              <Link href={"/login"} className={`${styles.secondary}`}>
                Login
              </Link>
              <PrimaryBtn value="Sign Up" as="link" link="/register" />
            </>
          )}
        </div>
      </div>
      {open && (
        <div className={styles.navlinks_mobile}>
          <nav className={styles.navlinks}>
            {navLinks.map((link) => (
              <Link key={link.title} href={link.path}>
                {link.title}
              </Link>
            ))}
          </nav>
          <div className={styles["auth-btn-group"]}>
            {session?.user ? (
              <>
                {session.user?.isAdmin && (
                  <Link href={"/admin"} className={`${styles.secondary}`}>
                    Admin
                  </Link>
                )}
                <form action={handleLogout}>
                  <PrimaryBtn value="Logout" />
                </form>
              </>
            ) : (
              <>
                <Link href={"/login"} className={`${styles.secondary}`}>
                  Login
                </Link>
                <PrimaryBtn value="Sign Up" as="link" link="/register" />
              </>
            )}
          </div>
        </div>
      )}
      <Image
        className={styles.menuButton}
        src={open ? "/cross.png" : "/menu.png"}
        alt=""
        width={30}
        height={30}
        onClick={() => setOpen((prev) => !prev)}
      />
    </>
  );
};

export default Navigation;
