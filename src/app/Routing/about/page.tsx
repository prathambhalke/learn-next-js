import Link from "next/link";

const About = () => {
  return (
    <div>
      <h1>About Page</h1>
      <Link href="dynamicRoute/products/1">product1</Link>
      <Link href="dynamicRoute/products/2">product2</Link>
      <Link href="dynamicRoute/products/3" replace>
        produc3
      </Link>
    </div>
  );
};

export default About;
