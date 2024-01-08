const ReviewDetails = ({
  params,
}: {
  params: { productId: string; reviewsId: string };
}) => {
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
