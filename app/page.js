import Link from "next/link";
export default function Home() {
  return (
    <div>
      <h1>hey this is home page</h1>
      <Link href="/about">About page</Link>
    </div>
  );
}
