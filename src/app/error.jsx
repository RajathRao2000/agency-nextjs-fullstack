"use client";

import Image from "next/image";

const Error = () => {
  return (
    <div style={{ display: "grid", placeItems: "center" }}>
      <Image src={"/error.svg"} width={500} height={500} />
    </div>
  );
};

export default Error;
