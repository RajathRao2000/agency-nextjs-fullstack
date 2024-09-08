import React from "react";
import styles from "./Footer.module.css";
import logo from "../../../../public/logo-white.png";
import Link from "next/link";
import send from "./Icons/send.png";

import { socials, Company, Support } from "./links";
import Image from "next/image";

const Navlinks = ({ title, links }) => {
  return (
    <div key={title} className={styles.navLinks}>
      <div className={styles.title}>{title}</div>
      <div className={styles.links}>
        {links.map(({ title: link }) => (
          <Link href="#" className={styles.link} key={link}>
            {link}
          </Link>
        ))}
      </div>
    </div>
  );
};

const SocialButtons = ({ icon, link }) => {
  return (
    <a target="_blank" href={link} rel="noreferrer">
      <Image src={icon} alt="icon" />
    </a>
  );
};

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.companyInfo}>
        <Image width={191} height={29.67} src={logo} alt="logo" />
        <div className={styles.copywrite}>
          <p>Copyright © 2020 Nexcent ltd.</p>
          <p>All rights reserved</p>
        </div>
        <div className={styles.socials}>
          {socials.map(({ icon, link }) => (
            <SocialButtons key={link} icon={icon} link={link} />
          ))}
        </div>
      </div>
      <div className={styles.footerLinks}>
        <div className={styles.linkContainer}>
          <Navlinks title="Company" links={Company} />
          <Navlinks title="Support" links={Support} />
        </div>
        <div className={styles["email-newsletter"]}>
          <p>Stay up to date</p>
          <div className={styles["email-form"]}>
            <input type="text" placeholder="Enter your email" />
            <button>
              <Image fill src={send} alt="send" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
