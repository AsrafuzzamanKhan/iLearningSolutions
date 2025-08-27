"use client";
import user_image from "./user-image.png";
import code_icon from "./code-icon.png";
import code_icon_dark from "./code-icon-dark.png";
import edu_icon from "./edu-icon.png";
import edu_icon_dark from "./edu-icon-dark.png";
import project_icon from "./project-icon.png";
import project_icon_dark from "./project-icon-dark.png";
import vscode from "./vscode.png";
import firebase from "./firebase.png";
import figma from "./figma.png";
import git from "./git.png";
import mongodb from "./mongodb.png";
import right_arrow_white from "./right-arrow-white.png";
import logo from "./logo.png";
import logo_dark from "./logo_dark.png";
import mail_icon from "./mail_icon.png";
import mail_icon_dark from "./mail_icon_dark.png";
import profile_img from "./profile-img.jpg";
import profile_img1 from "./profile-img1.jpg";
import download_icon from "./download-icon.png";
import hand_icon from "./hand-icon.png";
import header_bg_color from "./header-bg-color.png";
import moon_icon from "./moon_icon.png";
import sun_icon from "./sun_icon.png";
import arrow_icon from "./arrow-icon.png";
import arrow_icon_dark from "./arrow-icon-dark.png";
import menu_black from "./menu-black.png";
import menu_white from "./menu-white.png";
import close_black from "./close-black.png";
import close_white from "./close-white.png";
import web_icon from "./web-icon.png";
import mobile_icon from "./mobile-icon.png";
import ui_icon from "./ui-icon.png";
import graphics_icon from "./graphics-icon.png";
import right_arrow from "./right-arrow.png";
import send_icon from "./send-icon.png";
import right_arrow_bold from "./right-arrow-bold.png";
import right_arrow_bold_dark from "./right-arrow-bold-dark.png";
// data/courses.js
// app/data/courses.js
export const courses = [
  {
    id: 1,
    title: "Agile & SAFe Training",
    description:
      "Learn how to implement Agile practices and SAFe frameworks in your organization.",
    duration: "3 Days",
    link: "#",
  },
  {
    id: 2,
    title: "Generative AI for Strategy",
    description:
      "Understand how Generative AI can transform business strategy and product development.",
    duration: "2 Days",
    link: "#",
  },
  {
    id: 3,
    title: "Leadership & Project Management",
    description:
      "Master leadership skills and project management methodologies for better outcomes.",
    duration: "5 Days",
    link: "#",
  },
  {
    id: 4,
    title: "6-Sigma & Lean Tools",
    description:
      "Improve efficiency and quality with Lean and Six Sigma tools and practices.",
    duration: "4 Days",
    link: "#",
  },
];

export const assets = {
  user_image,
  code_icon,
  code_icon_dark,
  edu_icon,
  edu_icon_dark,
  project_icon,
  project_icon_dark,
  vscode,
  firebase,
  figma,
  git,
  mongodb,
  right_arrow_white,
  logo,
  logo_dark,
  mail_icon,
  mail_icon_dark,
  profile_img,
  profile_img1,
  download_icon,
  hand_icon,
  header_bg_color,
  moon_icon,
  sun_icon,
  arrow_icon,
  arrow_icon_dark,
  menu_black,
  menu_white,
  close_black,
  close_white,
  web_icon,
  mobile_icon,
  ui_icon,
  graphics_icon,
  right_arrow,
  send_icon,
  right_arrow_bold,
  right_arrow_bold_dark,
};

export const workData = [
  {
    title: "Food Club",
    description: "Online Food Ordering Website",
    bgImage: "/food.png",
    link: "https://food-club-f9921.web.app/",
  },
  {
    title: "Car Vault",
    description: "Car Selling Website",
    bgImage: "/car.png",
    link: "https://car-vault.web.app/",
  },
  {
    title: "Nike Store",
    description: "E-commerce Website frontend",
    bgImage: "/nike.png",
    link: "https://nike-shoe-ecommerce.netlify.app/",
  },
  {
    title: "Interior Design",
    description: "Interior Design Website",
    bgImage: "/interio.png",
    link: "https://bd-interio.netlify.app/",
  },
];

export const serviceData = [
  {
    icon: assets.web_icon,
    title: "Full-Stack Web Development",
    description:
      "End-to-end development from front-end design to back-end integration.",
    link: "",
  },
  {
    icon: assets.mobile_icon,
    title: "Responsive UI/UX Design",
    description:
      "Mobile-friendly, visually appealing, and user-focused interfaces.",
    link: "",
  },
  {
    icon: assets.ui_icon,
    title: "Website Optimization & SEO",
    description: "Speed, performance, and search engine ranking improvements.",
    link: "",
  },
  {
    icon: assets.graphics_icon,
    title: "Web Application Maintenance",
    description: "Regular updates, bug fixes, and feature enhancements.",
    link: "",
  },
];

export const infoList = [
  {
    icon: assets.code_icon,
    iconDark: assets.code_icon_dark,
    title: "Languages",
    description: "HTML, CSS, JavaScript React Js, Next Js, Python",
    description2: "Node.js, Express.js, MongoDB",
  },
  {
    icon: assets.edu_icon,
    iconDark: assets.edu_icon_dark,
    title: "Education",
    description: "Master of Information and Communications Technology. ",
    description2: "University of the Sunshine Coast, Adelaide, Australia",
  },
  {
    icon: assets.project_icon,
    iconDark: assets.project_icon_dark,
    title: "Projects",
    description: "Built more than 5 projects",
  },
];

export const toolsData = [
  assets.vscode,
  assets.firebase,
  assets.mongodb,
  assets.figma,
  assets.git,
];

export const workExperience = [
  {
    company: "Americold Logistics",
    role: "Forklift Operator & Ambient Picker",
    period: "Nov 2024 – Present",
    responsibilities: [
      "Operate forklifts and organize inventory",
      "Pick and prepare orders for shipping",
      "Maintain inventory and cleanliness",
    ],
  },
  {
    company: "MHB-A Digital Web Design Agency",
    role: "Full Stack Developer",
    period: "Oct 2023 – Sep 2024",
    responsibilities: [
      "Developed MERN stack applications",
      "Built responsive UIs with React",
      "Managed APIs and databases",
      "Collaborated on secure client solutions",
    ],
  },
  {
    company: "Bookoceanbd.com",
    role: "Web Developer",
    period: "Aug 2021 – Sep 2023",
    responsibilities: [
      "Designed responsive websites",
      "Wrote clean, efficient code",
      "Optimized performance and SEO",
    ],
  },
];
