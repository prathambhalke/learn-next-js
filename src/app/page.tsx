import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="m-6">
      <Link href="/Routing/about" className="p-2 mb-2 bg-black text-white">
        About
      </Link>
      <Link href="/Login" className="p-2 mb-2 bg-black text-white">
        Login
      </Link>
      <Link href="/logout" className="p-2 mb-2 bg-black text-white">
        logout
      </Link>
      <h1 className="mt-4 text-2xl">Home Page</h1>
    </div>
  );
}
