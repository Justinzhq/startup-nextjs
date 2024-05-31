import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "产品",
    newTab: false,
    submenu: [
      {
        id: 11,
        title: "viSCADA Web",
        path: "/blog-details",
        newTab: false,
      },
      {
        id: 12,
        title: "viSCADA Controller",
        path: "/blog-details",
        newTab: false,
      },
      {
        id: 13,
        title: "viSCADA Gateway",
        path: "/blog-details",
        newTab: false,
      },
      {
        id: 14,
        title: "viSCADA Edge",
        path: "/blog-details",
        newTab: false,
      },
      {
        id: 15,
        title: "viSCADA App",
        path: "/blog-details",
        newTab: false,
      },
    ],
  },
  {
    id: 2,
    title: "应用场景",
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
    title: "文档",
    path: "https://docs.viscada.net",
    newTab: true,
  },
  {
    id: 4,
    title: "About",
    path: "/about",
    newTab: false,
  },
  {
    id: 5,
    title: "Support",
    path: "/contact",
    newTab: false,
  },
  {
    id: 6,
    title: "Pages",
    newTab: false,
    submenu: [
      {
        id: 41,
        title: "About Page",
        path: "/about",
        newTab: false,
      },
      {
        id: 42,
        title: "Contact Page",
        path: "/contact",
        newTab: false,
      },
      {
        id: 43,
        title: "Blog Grid Page",
        path: "/blog",
        newTab: false,
      },
      {
        id: 44,
        title: "Blog Sidebar Page",
        path: "/blog-sidebar",
        newTab: false,
      },
      {
        id: 45,
        title: "Blog Details Page",
        path: "/blog-details",
        newTab: false,
      },
      {
        id: 46,
        title: "Sign In Page",
        path: "/signin",
        newTab: false,
      },
      {
        id: 47,
        title: "Sign Up Page",
        path: "/signup",
        newTab: false,
      },
      {
        id: 48,
        title: "Error Page",
        path: "/error",
        newTab: false,
      },
    ],
  },
];
export default menuData;
