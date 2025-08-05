import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Blogs",
};

export default async function Blog({ params }) {
  console.log("params", await params);

  return (
    <div>
      <h1>All blogs</h1>
      <ul>
        <li>
          <Link href="/blog1">Blog 1 page</Link>
        </li>
        <li>
          <Link href="/blog2">Blog 2 page</Link>
        </li>
        <li>
          <Link href="/blog3">Blog 3 page</Link>
        </li>
        <li>
          <Link href="/blog4">Blog 4 page</Link>
        </li>
        <li>
          <Link href="/blog5">Blog 4 page</Link>
        </li>
      </ul>
    </div>
  );
}
