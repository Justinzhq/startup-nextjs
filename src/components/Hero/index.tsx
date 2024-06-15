import Link from "next/link";

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="relative z-10 overflow-hidden bg-white pb-16 pt-[120px] dark:bg-gray-dark md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]"
      >
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="max-w-[600px] ml-auto text-left">
                <h2 className="mb-8 text-3xl font-bold leading-tight text-black dark:text-white sm:text-5xl sm:leading-tight md:text-6xl md:leading-tight">
                领先的“智慧能源”
                  <p>物联网基础设施套件</p>
                </h2>
                <p className="mb-5 text-base leading-relaxed text-black dark:text-white sm:text-xl md:text-xl">
                  致力加速能源数智化低碳转型
                </p>
                <p className="mb-12 text-base leading-relaxed text-body-color dark:text-white sm:text-lg md:text-lg">
                  IT 与 OT 融合的能源系统实时监测与智能控制解决方案，基于 Web 的敏捷部署和扩展，更加灵活、稳健且经济。
                </p>
                <div className="flex flex-col items-center justify-start space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                  <Link
                    href="https://nextjstemplates.com/templates/saas-starter-startup"
                    className="rounded-sm bg-primary px-12 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
                  >
                    联系我们
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="absolute inset-0 z-[-1]">
          <img
            src="/images/hero/hero-bg.jpg"
            alt="Hero Background"
            className="object-cover w-full h-full"
          />
        </div> */}
        <div className="absolute inset-0 z-[-1]">
          <video autoPlay muted loop className="object-cover w-full h-full">
            <source src="/images/video/hero-bg.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-black opacity-50"></div> {/* This is the overlay */}
        </div>

      </section>
    </>
  );
};

export default Hero;
