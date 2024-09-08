import Link from "next/link";
import styles from "./Blogs.module.css";
import memModel from "./BlogImages/mem-model.png";
import safeguarding from "./BlogImages/safeguarding.png";
import safeguardingRes from "./BlogImages/safeguarding-res.png";
import Arrow from "../ui/Icons/Arrow";
import Image from "next/image";
const BlogData = [
  {
    title: "Creating Streamlined Safeguarding Processes with OneRen",
    slug: "safeguarding-processes",
    img: safeguarding,
  },
  {
    title: "Revamping the Membership Model with Triathlon Australia",
    slug: "revamping-the-membership-model",
    img: memModel,
  },
  {
    title:
      "What are your safeguarding responsibilities and how can you manage them?",
    slug: "safeguarding-responsibilities",
    img: safeguardingRes,
  },
];

const BlogCard = ({ title, slug, img }) => {
  return (
    <div className={styles.blogCard}>
      <Image width={368} height={286} src={img} alt={title} />
      <div className={styles.blogInfo}>
        <p>{title}</p>
        <Link href={slug}>
          Read more <Arrow />
        </Link>
      </div>
    </div>
  );
};

const Blogs = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>Caring is the new marketing</h1>
        <p>
          The Nexcent blog is the best place to read about the latest membership
          insights, trends and more. See who&apos;s joining the community, read
          about how our community are increasing their membership income and
          lot&apos;s more.
        </p>
      </div>
      <div className={styles.content}>
        {BlogData.map(({ slug, title, img }) => (
          <BlogCard key={slug} slug={slug} title={title} img={img} />
        ))}
      </div>
    </div>
  );
};

export default Blogs;
