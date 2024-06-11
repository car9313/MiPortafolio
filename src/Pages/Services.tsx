import { AiFillAppstore } from "react-icons/ai";
import { FaMobile, FaGlobe } from "react-icons/fa";
import { SiProgress, SiAntdesign } from "react-icons/si";
import CardServices from "../components/UI/CardServices";
import Title from "../components/UI/Title";
import { FadeIn } from "../components/UI/FadeIn";

const Services = () => {
  return (
    <section id="services" className="seccion bg-bgSecundary">
      <FadeIn>
        <Title title="Services" des="My Services" />
        <div className="grid grid-cols-1 mdl:grid-cols-2 lgl:grid-cols-3  gap-6 xl:gap-20">
          <CardServices
            title="Business Stratagy"
            des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque soluta
      hic consequuntur eum repellendus ad."
            icon={null}
          />
          <CardServices
            title="App Development"
            des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque soluta
      hic consequuntur eum repellendus ad."
            icon={<AiFillAppstore />}
          />
          <CardServices
            title="SEO Optimisation"
            des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque soluta
      hic consequuntur eum repellendus ad."
            icon={<SiProgress />}
          />
          <CardServices
            title="Mobile Development"
            des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque soluta
      hic consequuntur eum repellendus ad."
            icon={<FaMobile />}
          />
          <CardServices
            title="UX Design"
            des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque soluta
      hic consequuntur eum repellendus ad."
            icon={<SiAntdesign />}
          />
          <CardServices
            title="Hosting Websites"
            des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque soluta
      hic consequuntur eum repellendus ad."
            icon={<FaGlobe />}
          />
        </div>
      </FadeIn>
    </section>
  );
};

export default Services;
