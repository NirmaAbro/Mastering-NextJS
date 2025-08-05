import React from "react";
import Link from "next/link";

export const metadata = {
  title: {
    absolute: "All  services",
  },
};

function Services() {
  return (
    <div>
      <h1>this is services</h1>
      <Link href={"/services/allservices"}>this is services</Link>
    </div>
  );
}

export default Services;
