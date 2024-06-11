import { FaCss3, FaGithub, FaHtml5, FaReact } from "react-icons/fa";
import { FeactureType } from "../../utils/types";
import { SiJavascript, SiNextdotjs, SiTailwindcss } from "react-icons/si";
import CardSkill from "./CardSkill";
const features: Array<FeactureType> = [
  { text: "HTML", icon: <FaHtml5 size={50} /> },
  { text: "CSS", icon: <FaCss3 size={50} /> },
  { text: "JAVASCRIPT", icon: <SiJavascript size={50} /> },
  { text: "REACT", icon: <FaReact size={50} /> },
  { text: "TAILWIND", icon: <SiTailwindcss size={50} /> },
  { text: "NEXTJS", icon: <SiNextdotjs size={50} /> },
  { text: "GITHUB", icon: <FaGithub size={50} /> },
];
const SkillsList = () => {
  return (
    <div className="w-full grid grid-cols-2  md:grid-cols-3     gap-6 items-center  lg:p-4 p-1 ">
      {features.map((item) => (
        <CardSkill key={item.text}>
          <span className="text-xs">{item.icon}</span>
          <span>{item.text}</span>
        </CardSkill>
      ))}
    </div>
  );
};

export default SkillsList;
