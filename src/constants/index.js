import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  threejs,
} from "../assets";
import ecomerce from "../assets/ecomerce.png";
import java from "../assets/java.png";
import levent from "../assets/levent.png";
import tanca from "../assets/tanca.png";
import ant from "../assets/tech/ant.png";
import javaLogo from "../assets/tech/java.png";
import next from "../assets/tech/next.png";
import cSharp from "../assets/tech/cSharp.png";
// import petshop from "../assets/tech/petshop.png";
import intaFe from "../assets/inta_fe.png";
import petShop from "../assets/petshop.png";
import nest from "../assets/tech/nest.jpg";
import hireDev from "../assets/hiredev.png";
import webSport from "../assets/web_sport.png";
export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "Ant Design",
    icon: ant,
  },
  // {
  //   name: "NextJs",
  //   icon: next,
  // },
  {
    name: "Java",
    icon: javaLogo,
  },
  {
    name: "NestJS",
    icon: nest,
  },
];

const experiences = [
  {
    title: "Front-end Developer",
    company_name: "Tanca (Part-Time)",
    icon: tanca,
    iconBg: "#E6DEDD",
    date: "March 2024 - Present",
    points: [
      "I collaborated with the team to develop a Learning Management System software along with its mobile app",
      "I developed the system history feature to record user actions, working closely with the backend team",
      "Additionally, I programmed both web and mobile applications for the HRM-Cloudify partner",
      "I researched and optimized website performance and code, as well as fixed issues reported by users. Furthermore, I contributed to the development of web and mobile application features with the API team",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I see you work very well and can complete the job requirements.",
    name: "Vu Hong Phong",
    designation: "Leader FE",
    company: "Tanca",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Hire Dev",
    description:
      "A full-stack recruitment platform enabling employers to post job listings and candidates to apply. The system features real-time notifications, candidate tracking, and employer dashboards.",
    tags: [
      {
        name: "NestJs",
        color: "blue-text-gradient",
      },
      {
        name: "ReactJs+TailwindCss",
        color: "green-text-gradient",
      },
      {
        name: "TypeScript",
        color: "pink-text-gradient",
      },
      {
        name: "FlaskAPI",
        color: "grey-text-gradient",
      },
      {
        name: "MongoDB",
        color: "red-text-gradient",
      },
      {
        name: "Swagger",
        color: "red-text-gradient",
      },
    ],
    link: "https://hire-dev.online",
    image: hireDev,
    source_code_link: "https://github.com/dennis-nguyen0909",
  },
  {
    name: "Ecommerce",
    description:
      "I taught myself nodejs and reactjs and learned how to create a complete website. I wrote RestfulAPI, using jwt to authenticate users. Combined react-text-to-speach to develop voice search function and integrated openAi with nlp to train more data for AI model for customers Customers can get more information about the shop. This project has many errors that I have not optimized to increase user experience.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "express",
        color: "pink-text-gradient",
      },
      {
        name: "nodejs",
        color: "black-text-gradient",
      },
    ],
    image: ecomerce,
    source_code_link: "https://fe-ecomerce.vercel.app/",
    link: "https://fe-ecomerce.vercel.app",
  },
  {
    name: "Instagram Clone",
    description:
      "This is my 2nd project using MERN. I wrote restfullAPI for users, posts, reels, messages,.... Implement real-time messaging as well as real-time comments and likes. I store images and videos on cloudinary through multer so I can post multiple photos or one photo for users. For the user interface, I use antd . The project is in the process of being stopped because I'm busy with a lot of work, but will probably continue after a while to complete a complete project.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "express",
        color: "pink-text-gradient",
      },
      {
        name: "nodejs",
        color: "blue-text-gradient",
      },
      {
        name: "socket.io",
        color: "green-text-gradient",
      },
      {
        name: "antd",
        color: "pink-text-gradient",
      },
    ],
    image: intaFe,
    source_code_link: "https://fe-ecomerce.vercel.app/",
  },
  {
    name: "Shop Levent Clothing",
    description:
      "I self-study and build website interfaces . This is the first project so there are many mistakes. Only the interface has been built and the purchasing features have not yet been developed",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "js",
        color: "pink-text-gradient",
      },
    ],
    image: levent,
    source_code_link: "https://github.com/dennis-nguyen0909/WebClothingStores",
    link: "https://levents-sable.vercel.app",
  },
  {
    name: "Web Sports",
    description:
      "This is a static website built with pure html, css, javascript",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "Javascript",
        color: "green-text-gradient",
      },
    ],
    image: webSport,
    source_code_link: "https://minhduy-shop.vercel.app",
    link: "https://minhduy-shop.vercel.app",
  },
  {
    name: "Pet Shop Basic",
    description:
      "I used useContext to practice how it works and understand more about ReactJs useContext hook",
    tags: [
      {
        name: "ReactJs",
        color: "blue-text-gradient",
      },
      {
        name: "NodeJs",
        color: "green-text-gradient",
      },
    ],
    image: petShop,
    source_code_link: "https://github.com/dennis-nguyen0909/petShopBasic",
  },
  {
    name: "DICTIONARY ANH VIET",
    description:
      "This is my semester project. I use java to handle the logic and models, and for the interface I use java swing. I use Map to manage keywords with keys and values, my project includes the basic functions of a dictionary application. The function I like most is looking up words with the Levenshtein algorithm to find the closest word when not in the map.",
    tags: [
      {
        name: "java",
        color: "blue-text-gradient",
      },
      {
        name: "java-swing",
        color: "green-text-gradient",
      },
      {
        name: "text to speech",
        color: "pink-text-gradient",
      },
    ],
    image: java,
    source_code_link: "https://github.com/dennis-nguyen0909/DictionaryJava.git",
  },
];

export { services, technologies, experiences, testimonials, projects };
