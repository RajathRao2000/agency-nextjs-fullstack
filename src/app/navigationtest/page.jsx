"use client";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React from "react";

const NavigationTestPage = () => {
  //CLIENT SIDE NAVIGATION
  const router = useRouter();
  const pathname = usePathname(); //pathname eg: /navigationtest
  const query = useSearchParams(); //gets query parameters eg: /navigationtest?q="test"
  console.log(query.get("q")); // set() can be use to set query
  const handleClick = () => {
    console.log("clicked");
    router.push("/");
    // router.replace("/") //doesn't add new entry to history stack. Pressing back will not return to this page
    // router.refresh(); //refresh current page
    // router.back() //goes to previous page
    // router.forward() //goes to next page
  };
  return (
    <div>
      {/* start */}
      {/* disable prefetch: useful if there are many links in the page */}
      <Link href={"/"} prefetch={false}>
        Click Here
      </Link>
      {/* end */}
      <button onClick={handleClick}>Write and Redirect</button>
    </div>
  );
};

export default NavigationTestPage;
