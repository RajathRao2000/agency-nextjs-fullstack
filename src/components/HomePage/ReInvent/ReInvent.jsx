import styles from "./ReInvent.module.css";
import members from "./count-icons/members.png";
import clubs from "./count-icons/clubs.png";
import event_bookings from "./count-icons/event-bookings.png";
import payments from "./count-icons/payments.png";
import Image from "next/image";

const counts = [
  { count: "2,245,341", icon: members, text: "Members" },
  { count: "46,328", icon: clubs, text: "Clubs" },
  { count: "828,867", icon: event_bookings, text: "Event Bookings" },
  { count: "1,926,436", icon: payments, text: "Payments" },
];

const CountCard = ({ count, icon, text }) => {
  return (
    <div className={styles.countCard}>
      <div className={styles.img}>
        <Image fill src={icon} alt="icon" />
      </div>
      <div className={styles.countInfo}>
        <h3>{count}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
};

const ReInvent = () => {
  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <h3>
          Helping a local <div>business reinvent itself</div>
        </h3>
        <p>We reached here with our hard work and dedication</p>
      </div>
      <div className={styles.info}>
        {counts.map((count) => (
          <CountCard key={count.text} {...count} />
        ))}
      </div>
    </div>
  );
};

export default ReInvent;
