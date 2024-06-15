import Image from "next/image";

const AboutSectionTwo = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <div
              className="relative mx-auto mb-12 aspect-[25/20] max-w-[500px] text-center lg:m-0"
              data-wow-delay=".15s"
            >
              <Image
                src="/images/about/about-image-2.svg"
                alt="about image"
                fill
                className="drop-shadow-three dark:hidden dark:drop-shadow-none"
              />
              <Image
                src="/images/about/about-image-2-dark.png"
                alt="about image"
                fill
                className="hidden drop-shadow-three dark:block dark:drop-shadow-none"
              />
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div className="max-w-[470px]">
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  系统平台部署
                </h3>
                <p className="text-base font-regular leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  系统平台是智慧能源的物联网基础平台，提供设备管理、数据处理、统计分析和决策支持等核心功能，支持通过云平台访问，也可以进行私有化部署。
                </p>
              </div>
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  边缘数据采集
                </h3>
                <p className="text-base font-regular leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                我们会根据应用场景，选择合适的边缘网关或控制器，进行现场数据的采集、处理、分析，及智能控制。
                </p>
              </div>
              <div className="mb-1">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  现场设备改造
                </h3>
                <p className="text-base font-regular leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  我们会根据现场已有设备情况，选择合适的传感器、仪表及设备，进行现场的智能化升级。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
