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
