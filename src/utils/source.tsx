import { MdOutlineEmail } from "react-icons/md";
import { projectOne, projectThree, projectTwo } from "./index";
import { Project } from "./types";
import { BsWhatsapp } from "react-icons/bs";
import { RiMessengerLine } from "react-icons/ri";
import { FaYoutube } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import { CiLinkedin } from "react-icons/ci";
export const projects: Array<Project> = [
  {
    id: 1,
    category: "Web",
    name: "Food App",
    description: `adipisicing elit. Iusto dolores possimus cum eveniet ad aspernatur ut, 
                 vitae cupiditate totam quia`,
    image: projectOne,
    url: "https://github.com",
  },
  {
    id: 2,
    category: "Apps",
    name: "Mobile ecommerce website",
    description: `adipisicing elit. Iusto dolores possimus cum eveniet ad aspernatur ut, 
                 vitae cupiditate totam quia`,
    image: projectTwo,
    url: "https://github.com",
  },
  {
    id: 3,
    category: "UI/UX",
    name: "Ride sharing App",
    description: `adipisicing elit. Iusto dolores possimus cum eveniet ad aspernatur ut, 
                 vitae cupiditate totam quia`,
    image: projectThree,
    url: "https://github.com",
  },
  {
    id: 4,
    category: "Web",
    name: "WhatsApp Clone",
    description: `adipisicing elit. Iusto dolores possimus cum eveniet ad aspernatur ut, 
                 vitae cupiditate totam quia`,
    image: projectOne,
    url: "https://github.com",
  },
  {
    id: 5,
    category: "Apps",
    name: "Task Management",
    description: `adipisicing elit. Iusto dolores possimus cum eveniet ad aspernatur ut, 
                vitae cupiditate totam quia`,
    image: projectTwo,
    url: "https://github.com",
  },
  {
    id: 6,
    category: "UI/UX",
    name: "Music And Video Streaming App",
    description: `adipisicing elit. Iusto dolores possimus cum eveniet ad aspernatur ut, 
                 vitae cupiditate totam quia`,
    image: projectThree,
    url: "https://github.com",
  },
];

export const navLinksdata = [
  {
    id: 1,
    title: "Home",
    link: "home",
  },
  {
    id: 2,
    title: "Services",
    link: "services",
  },
  {
    id: 3,
    title: "Resumen",
    link: "resumen",
  },
  {
    id: 4,
    title: "Projects",
    link: "projects",
  },
  /* {
    id: 1005,
    title: "Testimonial",
    link: "testimonial",
  },*/
  {
    id: 5,
    title: "Contact",
    link: "contact",
  },
];

export const contactInfo = [
  {
    name: "Email",
    icon: <MdOutlineEmail size={30} />,
    address: "mradinuba@gmail.com",
    link: "mailto:mradinuba@gmail.com",
  },
  {
    name: "Messenger",
    icon: <RiMessengerLine size={30} />,
    address: "Emmanuel Eze",
    link: "http://m.me/profile.php?id=100076751404019",
  },
  {
    name: "WhatsApp",
    icon: <BsWhatsapp size={30} />,
    address: "+2347039681695",
    link: "https://api.whatsapp.com/send?phone=+2347039681695",
  },
];

export const socialHandles = [
  /*  {
    name: "Fiverr",
    icon: <SiFiverr size={30} />,
    link: "",
  }, */
  {
    name: "Github",
    icon: <AiFillGithub size={30} />,
    link: "",
  },
  {
    name: "LinkedIn",
    icon: <CiLinkedin size={30} />,
    link: "",
  },
  {
    name: "Youtube",
    icon: <FaYoutube size={30} />,
    link: "https://www.youtube.com/channel/UCEtnsPZQEd0l1tbr_nDQd5Q?sub_confirmation=1",
  },
];
