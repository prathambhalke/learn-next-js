import Link from "next/link";

const DynamicRoute = () => {
  return (
    <div>
      <h1 className="text-2xl">learn DynamicRoute Page</h1>

      <ul>
        <li>create a Route with [productId] for dynamic route</li>
        <Link href="dynamicRoute/products/1" replace>
          product1
        </Link>
      </ul>
    </div>
  );
};

export default DynamicRoute;
