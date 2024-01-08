const ProductDetails = ({ params }: { params: { productId: string } }) => {
  return (
    <div>
      <h1 className="text-2xl">Product Detail Id-{params.productId}</h1>
    </div>
  );
};

export default ProductDetails;
