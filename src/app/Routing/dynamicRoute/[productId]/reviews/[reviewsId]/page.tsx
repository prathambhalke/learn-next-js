import { notFound } from "next/navigation";

const ReviewDetails = ({
  params,
}: {
  params: { productId: string; reviewsId: string };
}) => {
  if (parseInt(params.productId) > 100) notFound();
  return (
    <div>
      <h1 className="text-2xl">
        Product Detail Id-{params.productId} and Reviews Detail Id-
        {params.reviewsId}
      </h1>
    </div>
  );
};

export default ReviewDetails;
