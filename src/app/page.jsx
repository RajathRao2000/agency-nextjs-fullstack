import Image from "next/image";
import styles from "./home.module.css";
import Link from "next/link";
import Header from "@/components/HomePage/Header/Header";
import Hero from "@/components/HomePage/Hero/Hero";
import OurClients from "@/components/HomePage/OurClients/OurClients";
import Features from "@/components/HomePage/Features/Features";
import Banner1 from "@/components/HomePage/Unseen/";
import Banner from "@/components/HomePage/ReInvent";
import Banner3 from "@/components/HomePage/DesignFooter/";
import Testimonial from "@/components/HomePage/Testimonial";
import Blogs from "@/components/HomePage/Blogs";
import GetADemo from "@/components/HomePage/GetADemo";

export const metadata = {
  title: {
    default: "agency-website",
  },
  description: "agency-website created from figma design",
};

const Home = () => {
  // return (
  //   <div className={styles.container}>
  //     <div className={styles.textContainer}>
  //       <h1 className={styles.title}>Creative Thoughts Agency.</h1>
  //       <p className={styles.desc}>
  //         Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero
  //         blanditiis adipisci minima reiciendis a autem assumenda dolore.
  //       </p>
  //       <div className={styles.buttons}>
  //         <Link href={"/about"} className={styles.button}>
  //           Learn More
  //         </Link>
  //         <Link href={"/contact"} className={styles.button}>
  //           Contact
  //         </Link>
  //       </div>
  //       <div className={styles.brands}>
  //         <Image
  //           src="/brands.png"
  //           alt="brandimage"
  //           fill
  //           className={styles.brandImg}
  //         />
  //       </div>
  //     </div>
  //     <div className={styles.imgContainer}>
  //       <Image src="/hero.gif" alt="hero" fill className={styles.heroImg} />
  //     </div>
  //   </div>
  // );
  return (
    <>
      <div className={`agency-main`}>
        <Hero />
        <OurClients />
        <Features />
        <Banner1 />
        <Banner />
        <Banner3 />
        <Testimonial />
        <Blogs />
        <GetADemo />
      </div>
    </>
  );
};

export default Home;
