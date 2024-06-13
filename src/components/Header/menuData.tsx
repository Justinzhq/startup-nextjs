import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 0,
    title: "首页",
    path: "/",
    newTab: true,
  },
  {
    id: 1,
    title: "产品",
    newTab: false,
    submenu: [
      {
        id: 11,
        title: "viSCADA Web 能源物联网平台",
        path: "/viscada-web",
        newTab: false,
      },
      {
        id: 12,
        title: "viSCADA Controller 边缘控制器",
        path: "/viscada-controller",
        newTab: false,
      },
      {
        id: 13,
        title: "viSCADA Gateway 边缘网关",
        path: "/viscada-gateway",
        newTab: false,
      },
      {
        id: 14,
        title: "viSCADA Edge 数采配置工具",
        path: "/viscada-edge",
        newTab: false,
      },
      {
        id: 15,
        title: "viSCADA App 移动端应用",
        path: "/viscada-app",
        newTab: false,
      },
    ],
  },
  {
    id: 2,
    title: "解决方案",
    newTab: false,
    submenu: [
      {
        id: 21,
        title: "热力站无人值守",
        path: "/blog-details",
        newTab: false,
      },
      {
        id: 22,
        title: "智慧供热二网",
        path: "/blog-details",
        newTab: false,
      },
      {
        id: 23,
        title: "锅炉房无人值守",
        path: "/blog-details",
        newTab: false,
      },
      {
        id: 24,
        title: "油气场站无人值守",
        path: "/blog-details",
        newTab: false,
      },
      {
        id: 25,
        title: "风电远程诊断检修",
        path: "/blog-details",
        newTab: false,
      },
    ],
  },
  {
    id: 3,
    title: "应用案例",
    path: "/cases",
    newTab: true,
  },
  {
    id: 4,
    title: "文档",
    path: "https://docs.viscada.net",
    newTab: true,
  },
  {
    id: 5,
    title: "资讯动态",
    path: "/news",
    newTab: true,
  },
  {
    id: 6,
    title: "关于",
    path: "https://www.engipower.com/about",
    newTab: true,
  },
];
export default menuData;
