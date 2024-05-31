import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title: "viSCADA Web",
    paragraph:"通过部署一套组态系统来打造一个工业物联网平台",
    image: "/images/blog/p-04.jpg",
    author: {
      name: "Samuyl Joshi",
      image: "/images/blog/author-01.png",
      designation: "Graphic Designer",
    },
    tags: ["creative"],
    publishDate: "",
  },
  {
    id: 2,
    title: "viSCADA Controller",
    paragraph:"智能边缘控制器保障能源系统的无人值守高效运行",
    image: "/images/blog/p-02.jpg",
    author: {
      name: "Musharof Chy",
      image: "/images/blog/author-02.png",
      designation: "Content Writer",
    },
    tags: ["computer"],
    publishDate: "",
  },
  {
    id: 3,
    title: "viSCADA Gateway",
    paragraph:"边缘网关支持设备间的通信协议转换与数据安全传输",
    image: "/images/blog/p-03.jpg",
    author: {
      name: "",
      image: "",
      designation: "",
    },
    tags: ["design"],
    publishDate: "",
  },
  {
    id: 4,
    title: "viSCADA Egde",
    paragraph:"网关内置易于使用的配置工具来做数据采集与转发",
    image: "/images/blog/blog-03.jpg",
    author: {
      name: "",
      image: "",
      designation: "",
    },
    tags: ["design"],
    publishDate: "",
  }, 
  {
    id: 5,
    title: "viSCADA App",
    paragraph:"移动端应用方便随时在手机上全面了解系统运行状态",
    image: "/images/blog/blog-03.jpg",
    author: {
      name: "",
      image: "",
      designation: "",
    },
    tags: ["design"],
    publishDate: "",
  },
];
export default blogData;
