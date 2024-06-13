import SharePost from "@/components/Blog/SharePost";
import TagButton from "@/components/Blog/TagButton";
import Image from "next/image";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog Details Page | Free Next.js Template for Startup and SaaS",
  description: "This is Blog Details Page for Startup Nextjs Template",
  // other metadata
};

const BlogDetailsPage = () => {
  return (
    <>
      <section className="pb-[120px] pt-[150px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            <div className="w-full px-4 lg:w-8/12">
              <div>
                <h2 className="mb-8 text-3xl font-regular leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight">
                  viSCADA Gateway 边缘网关
                </h2>
                <div>
                  <p className="mb-10 text-base font-regular leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    viSCADA Gateway 是一款高效的智能边缘网关，集能源数据采集、配置信息和控制指令下发于一体。
                    支持多种工业通信协议及物联网通信协议，确保各种工业设备和物联网应用的兼容性和互操作性。
                    与 viSCADA Web 无缝集成，高效采集并传输能源数据，提供稳定可靠的通信，实现云端与边缘设备的协同管控，
                    满足物联网时代对实时数据监控和智能化管理的需求，为现代化能源管理提供强大的支持和便捷的操作体验。

                  </p>
                  <div className="mb-10 w-full overflow-hidden rounded">
                    <div className="relative aspect-[97/60] w-full sm:aspect-[97/44]">
                      <Image
                        src="/images/blog/blog-details-02.jpg"
                        alt="image"
                        fill
                        className="object-cover object-center"
                      />
                    </div>
                  </div>

                  <h3 className="font-xl mb-10 font-regular leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight">
                    多元数据采集与预处理
                  </h3>
                  <ul className="mb-10 list-inside list-disc text-body-color">
                    <li className="mb-2 text-base font-regular text-body-color sm:text-lg lg:text-base xl:text-lg">
                      支持不同设备、传感器和自控系统的数据通过边缘网关进行统一采集，实现数据的集中管理和监控
                    </li>
                    <li className="mb-2 text-base font-regular text-body-color sm:text-lg lg:text-base xl:text-lg">
                      支持秒级/分钟级的数据采集，支持远程控制
                    </li>
                    <li className="mb-2 text-base font-regular text-body-color sm:text-lg lg:text-base xl:text-lg">
                      支持边缘侧数据清洗、去噪、聚合等，优化带宽利用率，提高数据的准确性和有效性
                    </li>
                  </ul>

                  <h3 className="font-xl mb-10 font-regular leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight">
                    标准化接口与多协议转换
                  </h3>
                  <ul className="mb-10 list-inside list-disc text-body-color">
                    <li className="mb-2 text-base font-regular text-body-color sm:text-lg lg:text-base xl:text-lg">
                      支持 RS485/232、RJ45、GPIO 等接口，方便与不同设备、传感器，及 PLC 的连接和集成
                    </li>
                    <li className="mb-2 text-base font-regular text-body-color sm:text-lg lg:text-base xl:text-lg">
                      支持 Modbus TCP/RTU、OPC UA、西门子 S7 PLC 等工业协议及 MQTT 协议，对数据进行统一转换整合
                    </li>
                  </ul>

                  <h3 className="font-xl mb-10 font-regular leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight">
                    安全可靠的数据传输
                  </h3>
                  <ul className="mb-10 list-inside list-disc text-body-color">
                    <li className="mb-2 text-base font-regular text-body-color sm:text-lg lg:text-base xl:text-lg">
                      支持以太网、Wi-Fi、4G/5G 蜂窝网络等多种数据传输方式，确保在各种环境下都能可靠地传输数据
                    </li>
                    <li className="mb-2 text-base font-regular text-body-color sm:text-lg lg:text-base xl:text-lg">
                      支持时钟同步、NTP对时服务，确保数据的准确性和一致性
                    </li>
                    <li className="mb-2 text-base font-regular text-body-color sm:text-lg lg:text-base xl:text-lg">
                      采用 SSL/TLS 安全传输协议，确保数据在传输过程中的安全性和完整性，防止数据泄露和篡改
                    </li>
                  </ul>

                  <h3 className="font-xl mb-10 font-regular leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight">
                    便捷的远程设备管理与维护
                  </h3>
                  <ul className="mb-10 list-inside list-disc text-body-color">

                    <li className="mb-2 text-base font-regular text-body-color sm:text-lg lg:text-base xl:text-lg">
                      支持远程对网关及其连接的设备进行配置和管理，减少现场操作的需要，提高管理效率
                    </li>
                    <li className="mb-2 text-base font-regular text-body-color sm:text-lg lg:text-base xl:text-lg">
                      支持远程 OTA 更新，确保设备能够及时获得最新的功能和安全补丁
                    </li>
                  </ul>

                  <div className="relative z-10 mb-10 overflow-hidden rounded-md bg-primary bg-opacity-10 p-8 md:p-9 lg:p-8 xl:p-9">
                    <p className="text-center text-base font-regular italic text-body-color">
                    viSCADA Gateway 为工业现场和物联网应用之间提供了一种高效、安全、可靠的数据采集和传输解决方案。
                    </p>
                    <span className="absolute left-0 top-0 z-[-1]">
                      <svg
                        width="132"
                        height="109"
                        viewBox="0 0 132 109"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          opacity="0.5"
                          d="M33.0354 90.11C19.9851 102.723 -3.75916 101.834 -14 99.8125V-15H132C131.456 -12.4396 127.759 -2.95278 117.318 14.5117C104.268 36.3422 78.7114 31.8952 63.2141 41.1934C47.7169 50.4916 49.3482 74.3435 33.0354 90.11Z"
                          fill="url(#paint0_linear_111:606)"
                        />
                        <path
                          opacity="0.5"
                          d="M33.3654 85.0768C24.1476 98.7862 1.19876 106.079 -9.12343 108.011L-38.876 22.9988L100.816 -25.8905C100.959 -23.8126 99.8798 -15.5499 94.4164 0.87754C87.5871 21.4119 61.9822 26.677 49.5641 38.7512C37.146 50.8253 44.8877 67.9401 33.3654 85.0768Z"
                          fill="url(#paint1_linear_111:606)"
                        />
                        <defs>
                          <linearGradient
                            id="paint0_linear_111:606"
                            x1="94.7523"
                            y1="82.0246"
                            x2="8.40951"
                            y2="52.0609"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="white" stopOpacity="0.06" />
                            <stop
                              offset="1"
                              stopColor="white"
                              stopOpacity="0"
                            />
                          </linearGradient>
                          <linearGradient
                            id="paint1_linear_111:606"
                            x1="90.3206"
                            y1="58.4236"
                            x2="1.16149"
                            y2="50.8365"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="white" stopOpacity="0.06" />
                            <stop
                              offset="1"
                              stopColor="white"
                              stopOpacity="0"
                            />
                          </linearGradient>
                        </defs>
                      </svg>
                    </span>
                    <span className="absolute bottom-0 right-0 z-[-1]">
                      <svg
                        width="53"
                        height="30"
                        viewBox="0 0 53 30"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle
                          opacity="0.8"
                          cx="37.5"
                          cy="37.5"
                          r="37.5"
                          fill="#4A6CF7"
                        />
                        <mask
                          id="mask0_111:596"
                          style={{ maskType: "alpha" }}
                          maskUnits="userSpaceOnUse"
                          x="0"
                          y="0"
                          width="75"
                          height="75"
                        >
                          <circle
                            opacity="0.8"
                            cx="37.5"
                            cy="37.5"
                            r="37.5"
                            fill="#4A6CF7"
                          />
                        </mask>
                        <g mask="url(#mask0_111:596)">
                          <circle
                            opacity="0.8"
                            cx="37.5"
                            cy="37.5"
                            r="37.5"
                            fill="url(#paint0_radial_111:596)"
                          />
                          <g opacity="0.8" filter="url(#filter0_f_111:596)">
                            <circle
                              cx="40.8089"
                              cy="19.853"
                              r="15.4412"
                              fill="white"
                            />
                          </g>
                        </g>
                        <defs>
                          <filter
                            id="filter0_f_111:596"
                            x="4.36768"
                            y="-16.5881"
                            width="72.8823"
                            height="72.8823"
                            filterUnits="userSpaceOnUse"
                            colorInterpolationFilters="sRGB"
                          >
                            <feFlood
                              floodOpacity="0"
                              result="BackgroundImageFix"
                            />
                            <feBlend
                              mode="normal"
                              in="SourceGraphic"
                              in2="BackgroundImageFix"
                              result="shape"
                            />
                            <feGaussianBlur
                              stdDeviation="10.5"
                              result="effect1_foregroundBlur_111:596"
                            />
                          </filter>
                          <radialGradient
                            id="paint0_radial_111:596"
                            cx="0"
                            cy="0"
                            r="1"
                            gradientUnits="userSpaceOnUse"
                            gradientTransform="translate(37.5 37.5) rotate(90) scale(40.2574)"
                          >
                            <stop stopOpacity="0.47" />
                            <stop offset="1" stopOpacity="0" />
                          </radialGradient>
                        </defs>
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogDetailsPage;
