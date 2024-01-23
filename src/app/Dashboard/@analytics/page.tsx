import React from "react";
import Card from "../../Components/Card";
import Link from "next/link";

const analytics = () => {
  return (
    <Card>
      <div>
        <h1>analytics</h1>
        <Link
          href="./Dashboard/mainAnalytics"
          className="p-2 mb-2 bg-black text-white"
        >
          MainAnalytics
        </Link>
      </div>
    </Card>
  );
};

export default analytics;
