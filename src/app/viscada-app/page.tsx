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
                  viSCADA App 移动端应用
                </h2>
                <div>
                  <p className="mb-10 text-base font-regular leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                  viSCADA App 是一款针对工业自动化和能源物联网的移动端应用，
                  它与 viSCADA Web 无缝集成，提供了远程实时监控、控制和工业过程管理的功能，使用户能够随时随地掌握能源系统的生产运行情况。
                  </p>
                  <div className="mb-10 w-full overflow-hidden rounded">
                    <div className="relative aspect-[97/60] w-full sm:aspect-[97/50]">
                      <Image
                        src="/images/blog/viscada-app-01.png"
                        alt="image"
                        fill
                        className="object-cover object-center"
                      />
                    </div>
                  </div>
                 
                  <h3 className="font-xl mb-10 font-regular leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight">
                  实时监控
                  </h3>
                  <ul className="mb-10 list-inside list-disc text-body-color">
                    <li className="mb-2 text-base font-regular text-body-color sm:text-lg lg:text-base xl:text-lg">
                    实时数据采集和展示，用户可以查看工业设备的运行状态、生产数据、报警信息等
                    </li>
                    <li className="mb-2 text-base font-regular text-body-color sm:text-lg lg:text-base xl:text-lg">
                    支持多种数据图表形式，包括趋势图、柱状图、饼图等，方便用户分析和决策
                    </li>
                  </ul>
                 
                  <h3 className="font-xl mb-10 font-regular leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight">
                  远程控制
                  </h3>
                  <ul className="mb-10 list-inside list-disc text-body-color">
                    <li className="mb-2 text-base font-regular text-body-color sm:text-lg lg:text-base xl:text-lg">
                    用户可以通过移动设备对工业设备进行远程操作和控制，包括启动、停止、调整参数等
                    </li>
                    <li className="mb-2 text-base font-regular text-body-color sm:text-lg lg:text-base xl:text-lg">
                    支持多用户管理和权限控制，确保操作的安全性和合规性
                    </li>
                  </ul>
                
                  <h3 className="font-xl mb-10 font-regular leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight">
                  报警和通知
                  </h3>
                  <ul className="mb-10 list-inside list-disc text-body-color">
                    <li className="mb-2 text-base font-regular text-body-color sm:text-lg lg:text-base xl:text-lg">
                    实时报警推送，用户可以及时收到设备故障或异常的通知
                    </li>
                    <li className="mb-2 text-base font-regular text-body-color sm:text-lg lg:text-base xl:text-lg">
                    支持自定义报警规则和阈值设置，确保用户能在第一时间处理紧急情况
                    </li>
                  </ul>

                  <h3 className="font-xl mb-10 font-regular leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight">
                  数据管理
                  </h3>
                  <ul className="mb-10 list-inside list-disc text-body-color">
                    <li className="mb-2 text-base font-regular text-body-color sm:text-lg lg:text-base xl:text-lg">
                    支持访问和查询过去的生产数据和设备运行记录，方便地进行数据分析和报告生成
                    </li>
                    <li className="mb-2 text-base font-regular text-body-color sm:text-lg lg:text-base xl:text-lg">
                    支持云端存储，保证数据的安全性和可访问性
                    </li>
                  </ul>
                  
                  <h3 className="font-xl mb-10 font-regular leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight">
                  运维巡检
                  </h3>
                  <ul className="mb-10 list-inside list-disc text-body-color">
                    <li className="mb-2 text-base font-regular text-body-color sm:text-lg lg:text-base xl:text-lg">
                    根据设备和生产线的需求制定巡检计划，包括巡检时间、频率和任务
                    </li>
                    <li className="mb-2 text-base font-regular text-body-color sm:text-lg lg:text-base xl:text-lg">
                    自动生成巡检任务，用户可通过移动端查看和管理巡检任务
                    </li>
                    <li className="mb-2 text-base font-regular text-body-color sm:text-lg lg:text-base xl:text-lg">
                    巡检过程中设备状态、故障情况等信息记录上传，自动生成巡检报告，方便后续分析处理
                    </li>
                  </ul>           

                  <div className="relative z-10 mb-10 overflow-hidden rounded-md bg-primary bg-opacity-10 p-8 md:p-9 lg:p-8 xl:p-9">
                    <p className="text-center text-base font-regular italic text-body-color">
                    viSCADA App 是一款集实时监控、远程控制、报警通知、数据管理和运维巡检于一体的随身智慧能源管家。
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
