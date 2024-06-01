import { Solution } from "@/types/solution";
import Image from "next/image";
import Link from "next/link";

const SingleSolution = ({ solution }: { solution: Solution }) => {
  const { title, image, paragraph } = solution;
  return (
    <>
      <div className="group relative overflow-hidden rounded-sm bg-white shadow-one duration-300 hover:shadow-two dark:bg-dark dark:hover:shadow-gray-dark">
        <Link
          href="/blog-details"
          className="relative block aspect-[37/22] w-full"
        >
          <Image src={image} alt="image" fill />
        </Link>
        <div className="p-6 sm:p-8 md:px-6 md:py-8 lg:p-8 xl:px-5 xl:py-8 2xl:p-8">
          <p className="pb-3 text-sm font-normal text-body-color">
            {paragraph}
          </p>
          <h3>
            <Link
              href="/blog-details"
              className="block text-base font-normal text-black hover:text-primary dark:text-white dark:hover:text-primary sm:text-xl"
            >
              {title}
            </Link>
          </h3>
        </div>
      </div>
    </>
  );
};

export default SingleSolution;
