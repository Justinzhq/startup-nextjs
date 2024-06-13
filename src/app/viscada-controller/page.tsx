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
                  viSCADA Controller 边缘控制器
                </h2>
                <div>
                  <p className="mb-10 text-base font-regular leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                  viSCADA Controller 是一款先进的智能边缘控制器，可与 viSCADA Web 无缝集成，实现云边协同管控。
                  集成了强大的计算能力、灵活的连接选项和高效的实时数据处理功能，可实现设备数据采集、传输、存储、处理、分析和控制，满足不同行业的数据采集和控制需求，是智能自动化和工业物联网（IIoT）解决方案的理想选择。
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
                    高性能处理器带来的边缘智能
                  </h3>
                  <p className="mb-10 text-base font-regular leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                  配备高性能多核处理器，确保快速的数据处理和响应能力，支持复杂的算法和实时分析，满足智能工业应用需求。
                  </p>
                  <ul className="mb-10 list-inside list-disc text-body-color">
                    <li className="mb-2 text-base font-regular text-body-color sm:text-lg lg:text-base xl:text-lg">
                    设备端就地进行数据预处理和分析，减少数据传输量和延迟
                    </li>
                    <li className="mb-2 text-base font-regular text-body-color sm:text-lg lg:text-base xl:text-lg">
                    支持机器学习和人工智能算法，实现设备的智能化和自适应控制
                    </li>
                    <li className="mb-2 text-base font-regular text-body-color sm:text-lg lg:text-base xl:text-lg">
                    实时监控和预测设备状态，防止故障和提高维护效率
                    </li>
                  </ul>

                  <h3 className="font-xl mb-10 font-regular leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight">
                  可扩展性与灵活性
                  </h3>
                  <p className="mb-10 text-base font-regular leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                  可根据需求场景扩展相应的功能模块，如 I/O 模块、存储模块、通讯模块等，满足不同行业和应用的需求。
                  </p>
                  <ul className="mb-10 list-inside list-disc text-body-color">
                    <li className="mb-2 text-base font-regular text-body-color sm:text-lg lg:text-base xl:text-lg">
                    提供多种工业总线接口，如 RS485/RS232、Modbus、Profibus、OPC UA 等，支持主流的工业设备和协议
                    </li>
                    <li className="mb-2 text-base font-regular text-body-color sm:text-lg lg:text-base xl:text-lg">
                    支持以太网、Wi-Fi、4G/5G 等多种网络连接，提供灵活的通讯方式
                    </li>
                    <li className="mb-2 text-base font-regular text-body-color sm:text-lg lg:text-base xl:text-lg">
                    支持 MQTT 协议，实现高效的消息传输和设备间通信，特别适用于物联网应用
                    </li>
                  </ul>
                  
                  <h3 className="font-xl mb-10 font-regular leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight">
                  高可靠性与安全性
                  </h3>
                  <ul className="mb-10 list-inside list-disc text-body-color">
                    <li className="mb-2 text-base font-regular text-body-color sm:text-lg lg:text-base xl:text-lg">
                    采用工业级设计，具备高耐用性，能够在恶劣环境下稳定运行
                    </li>
                    <li className="mb-2 text-base font-regular text-body-color sm:text-lg lg:text-base xl:text-lg">
                    配备硬件看门狗和多层安全机制，保障数据和系统安全，有效防止网络攻击和数据泄露
                    </li>
                    <li className="mb-2 text-base font-regular text-body-color sm:text-lg lg:text-base xl:text-lg">
                    OTA 远程升级及访问，确保系统和软件始终保持最新状态，提高维护效率和安全性
                    </li>
                  </ul>

                  
                  <h3 className="font-xl mb-10 font-regular leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight">
                    国产化方案支持
                  </h3>
                  <ul className="mb-10 list-inside list-disc text-body-color">
                    <li className="mb-2 text-base font-regular text-body-color sm:text-lg lg:text-base xl:text-lg">
                    支持国产芯片和国产操作系统适配，提供本地化服务和技术支持
                    </li>
                    <li className="mb-2 text-base font-regular text-body-color sm:text-lg lg:text-base xl:text-lg">
                    帮助企业提升系统合规性、安全性，确保符合国家和行业标准
                    </li>
                  </ul>
                  

                  <div className="relative z-10 mb-10 overflow-hidden rounded-md bg-primary bg-opacity-10 p-8 md:p-9 lg:p-8 xl:p-9">
                    <p className="text-center text-base font-regular italic text-body-color">
                    viSCADA Controller 将智能化带到了设备边缘，是新一代智能自动化和工业物联网（IIoT）解决方案的理想选择。
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
