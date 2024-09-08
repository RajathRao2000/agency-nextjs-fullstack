import Link from "next/link";
import React from "react";
import Image from "next/image";
import PrimaryBtn from "@/components/HomePage/ui/PrimaryBtn/PrimaryBtn";
const NotFound = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "50px",
        padding: "50px",
      }}
    >
      <Image src={"/404.svg"} width={500} height={500} />
      <p>Sorry, the page you are looking for does not exist</p>
      <PrimaryBtn as="link" value="Return Home" link={"/"} />
    </div>
  );
};

export default NotFound;
