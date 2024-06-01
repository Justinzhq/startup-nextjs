import { Product } from "@/types/product";
import Image from "next/image";
import Link from "next/link";

const SingleProduct = ({ product }: { product: Product }) => {
  const { title, image, paragraph } = product;
  return (
    <>
      <div className="group relative overflow-hidden rounded-sm bg-white shadow-one duration-300 hover:shadow-two dark:bg-dark dark:hover:shadow-gray-dark">
        <Link
          href="/blog-details"
          className="relative block aspect-[300/225] w-full"
        >
          <Image src={image} alt="image" fill />
        </Link>
        <div className="p-3 sm:p-3 md:px-3 md:py-3 lg:p-3 xl:px-3 xl:py-3 2xl:p-3">
          <h3>
            <Link
              href="/blog-details"
              className="mb-2 block text-base font-medium text-black hover:text-primary dark:text-white dark:hover:text-primary sm:text-base"
            >
              {title}
            </Link>
          </h3>
          <p className="mb-0 border-b-0 border-body-color border-opacity-10 pb-0 text-base font-normal text-body-color dark:border-white dark:border-opacity-10">
            {paragraph}
          </p>
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
