import { Metadata } from "next";

type Props = {
  params: {
    productId: string;
  };
};
// export const metadata = async ({ params }: Props): Promise<Metadata> => {
//   const title = await new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(params.productId);
//     }, 100);
//   });
//   console.log(title);
//   return { title: ` ${title}` };
// };

export const metadata = ({ params }: Props): Metadata => {
  return { title: `${10 || params.productId }` };
};

const ProductDetails = ({ params }: Props) => {
  return (
    <div>
      <h1 className="text-2xl">Product Detail Id-{params.productId}</h1>
    </div>
  );
};

export default ProductDetails;
