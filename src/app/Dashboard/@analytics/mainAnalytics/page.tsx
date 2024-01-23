import Card from "@/app/Components/Card";
import Link from "next/link";

const MainAnalytics = () => {
  return (
    <Card>
      <div>
        <h1>Mainanalytics</h1>
        <Link href="/Dashboard" className="p-2 mb-2 bg-black text-white">Default</Link>
      </div>
    </Card>
  );
};

export default MainAnalytics;
