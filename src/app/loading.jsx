"use client";
import React from "react";
import ReactLoading from "react-loading";

const Loading = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ReactLoading type={"balls"} color={"#4caf4f"} height={200} width={200} />
    </div>
  );
};

export default Loading;
