import styles from "./features.module.css";
import nat_ass from "./card-images/nat_ass.png";
import mem_org from "./card-images/mem_org.png";
import cl_gr from "./card-images/cl_gr.png";
import Image from "next/image";

const cardData = [
  {
    icon: mem_org,
    title: "Membership Organisations",
    text: "Our membership management software provides full automation of membership renewals and payments",
  },
  {
    icon: nat_ass,
    title: "National Associations",
    text: "Our membership management software provides full automation of membership renewals and payments",
  },
  {
    icon: cl_gr,
    title: "Clubs And Groups",
    text: "Our membership management software provides full automation of membership renewals and payments",
  },
];

const Card = ({ icon, title, text }) => {
  return (
    <div key={title} className={styles.card}>
      <div className={styles.img}>
        <Image fill src={icon} alt="" />
      </div>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
};

const Features = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2>
          Manage your entire community <div>in a single system</div>
        </h2>
        <p>Who is Nextcent suitable for?</p>
      </div>
      <div className={styles.content}>
        {cardData.map((data) => (
          <Card key={data.title} {...data} />
        ))}
      </div>
    </div>
  );
};

export default Features;
