import PostCard from "@/components/postCard/PostCard";
import styles from "./blog.module.css";
import { headers } from "next/headers";

const getData = async () => {
  const headersList = headers();
  const host = headersList.get("host");

  const protocol = process.env.NODE_ENV === "development" ? "http" : "https";
  const baseUrl = `${protocol}://${host}/`;
  const res = await fetch(`${baseUrl}/api/blog`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Something went wrong");
  }
  return res.json();
};
const BlogPage = async () => {
  const posts = await getData();
  return (
    <div className={styles.container}>
      {posts.map((post) => {
        return (
          <div key={post.id} className={styles.post}>
            <PostCard post={post} />
          </div>
        );
      })}
    </div>
  );
};

export default BlogPage;
