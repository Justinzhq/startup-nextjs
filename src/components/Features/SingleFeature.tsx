import { Feature } from "@/types/feature";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon, title, paragraph } = feature;
  return (
    <div className="w-full">
      <div className="wow fadeInUp" data-wow-delay=".15s">
        <div className="flex items-end">
          <div className="mb-5 flex h-[50px] w-[50px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
            {icon}
          </div>
          <h3 className="ml-5 mb-5 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
            {title}
          </h3>
        </div>
        <p className="pr-[10px] text-base font-regular leading-relaxed text-body-color">
          {paragraph}
        </p>
      </div>
    </div>
  );
};

export default SingleFeature;
