import React from "react";
import Link from "next/link";

function Services() {
  return (
    <div>
      <h1>this is services</h1>
      <Link href={"/services/allservices"}>this is services</Link>
    </div>
  );
}

export default Services;
