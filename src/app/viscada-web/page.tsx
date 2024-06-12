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
                  viSCADA Web 能源物联网平台
                </h2>
                <div>
                  <p className="mb-10 text-base font-regular leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                  viSCADA Web 是一款智慧能源管理解决方案，专为现代能源管理需求设计。
                  平台支持多种工业通信协议，具备灵活的组态与工业控制能力，确保用户能够高效地管理和优化设备及工艺流程。
                  平台通过全面的告警管理、丰富的报表功能和严格的数据权限控制，帮助企业提高生产效率、降低运营风险，实现可持续发展的目标。
                    
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
                    设备数据采集与转发
                  </h3>
                  <p className="mb-10 text-base font-regular leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                  支持多种协议的设备数据采集、以及系统间数据对接，确保平台的开放性和灵活性
                  </p>
                  <ul className="mb-10 list-inside list-disc text-body-color">
                    <li className="mb-2 text-base font-regular text-body-color sm:text-lg lg:text-base xl:text-lg">
                    支持 OPC UA、Modbus TCP/RTU、西门子S7 PLC 等工业通信协议
                    </li>
                    <li className="mb-2 text-base font-regular text-body-color sm:text-lg lg:text-base xl:text-lg">
                      支持 MQTT、HTTP、TCP/UDP 等通信协议
                    </li>
                    <li className="mb-2 text-base font-regular text-body-color sm:text-lg lg:text-base xl:text-lg">
                      支持与三方系统数据对接、集成，协议定制开发
                    </li>
                  </ul>

                  <h3 className="font-xl mb-10 font-regular leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight">
                    实时监测与控制
                  </h3>
                  <p className="mb-10 text-base font-regular leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                  实时展示设备运行状态和关键参数，提供历史数据查询和分析，
                  支持设备控制指令和参数的下发，确保用户能够高效、精准地监控和调控设备及工艺流程，实现系统的高效管理和稳定运行。
                  </p>
                 

                  <h3 className="font-xl mb-10 font-regular leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight">
                    丰富的组态能力
                  </h3>
                  <p className="mb-10 text-base font-regular leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                  基于 Web 的可视化组态编辑器，创建现代化的工业控制界面
                  </p>
                  <ul className="mb-10 list-inside list-disc text-body-color">
                    <li className="mb-2 text-base font-regular text-body-color sm:text-lg lg:text-base xl:text-lg">
                    拖拽编辑组态，简单易用上手快
                    </li>
                    <li className="mb-2 text-base font-regular text-body-color sm:text-lg lg:text-base xl:text-lg">
                    数据绑定，实时动态数据显示、指令下发，双向数据通信
                    </li>
                    <li className="mb-2 text-base font-regular text-body-color sm:text-lg lg:text-base xl:text-lg">
                    行业图形库和案例模板，支持快速、批量组态
                    </li>
                  </ul>
                  
                  <h3 className="font-xl mb-10 font-regular leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight">
                    海量设备物联管理
                  </h3>
                  <p className="mb-10 text-base font-regular leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                  支持设备及其技术参数、物模型、通讯协议的创建和编辑，实时监控设备状态，管理设备数据采集和通信，确保设备高效运行和维护。
                  </p>

                  <h3 className="font-xl mb-10 font-regular leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight">
                    告警配置与管理
                  </h3>
                  <p className="mb-10 text-base font-regular leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                  支持通用和自定义告警规则的创建、编辑和管理，实时监测设备状态，并通过多种方式推送告警信息。
                  支持告警等级分类、历史告警查询、批量处理、告警统计分析和告警信息导出等，确保及时响应和处理异常。
                  </p>

                  <h3 className="font-xl mb-10 font-regular leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight">
                    报表生成与管理
                  </h3>
                  <p className="mb-10 text-base font-regular leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                  支持报表模板的创建和上传、定时报表生成、报表数据填充和在线预览，历史报表的查询与下载，
                  数据集和数据源的灵活管理，确保用户能够高效地生成和管理各类报表，实现数据的系统化呈现与分析。
                  </p>
                  
                  <h3 className="font-xl mb-10 font-regular leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight">
                    数据权限与用户管理
                  </h3>
                  <p className="mb-10 text-base font-regular leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                  支持用户的新增、删除和信息修改，角色的创建与权限分配，系统菜单的定制与管理，
                  以及组织架构的展示和用户分配，确保数据访问的安全性和系统管理的高效性。
                  </p>
                  

                  <div className="relative z-10 mb-10 overflow-hidden rounded-md bg-primary bg-opacity-10 p-8 md:p-9 lg:p-8 xl:p-9">
                    <p className="text-center text-base font-regular italic text-body-color">
                    viSCADA Web 融合了英集动力在数智化能源管理领域的最佳实践，实现快速便捷的一站式项目交付。
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
