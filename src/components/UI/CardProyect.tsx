import { BsGithub } from "react-icons/bs";

import { FaYoutube } from "react-icons/fa";

type Props = {
  name: string;
  description: string;
  image: string;
  load: boolean;
};

const CardProyect = ({
  name,
  description,
  image,
  load,
}: Props) => {
  return (
    <div
      className={`${load ? "animate-zoomIn" : ""
        } group relative cursor-pointer shadow-shadowOne rounded-xl  items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30`}
    >
      <div className="h-[400px] w-full">
        <img
          className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
          src={image}
          alt=""
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-primaryColor/60 group-hover:from-primaryColor/70 group-hover:via-black/60 group-hover:to-black/70"></div>
      <div className="absolute h-auto inset-0 flex translate-y-[400px] flex-col items-center justify-center text-start px-4  transition-all duration-500 group-hover:translate-y-0">
        <h1 className="font-dmserif text-3xl font-bold  text-white mb-10">
          {name}
        </h1>
        <div className="flex gap-2">
          <a href="https://github.com/noorjsdivs" target="_blank">
            <span className="selection text-lg w-10 h-10  bg-bgPrimary  rounded-full  text-textAccent inline-flex justify-center items-center ">
              <BsGithub size={20} />
            </span>
          </a>
          <a href="https://www.youtube.com/@reactjsBD" target="_blank">
            <span className="text-lg w-10 h-10  bg-bgPrimary rounded-full  text-textAccent inline-flex justify-center items-center hover:text-primaryColor duration-300 cursor-pointer">
              <FaYoutube />
            </span>
          </a>
        </div>
        <p className="mb-3 text-lg cursor-text text-primaryColorAccent  opacity-0 transition-opacity duration-500 group-hover:opacity-100">
          {description}
        </p>
        <button className="rounded-full bg-bgPrimary py-2 px-3.5 font-com text-sm capitalize text-textAccent shadow shadow-black/60">
          See More
        </button>
      </div>
    </div>
  );
};

export default CardProyect;
