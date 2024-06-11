import { FaPhone } from "react-icons/fa";
import { SiMinutemailer } from "react-icons/si";
import ListSocial from "./ListSocial";
const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradientText-to-r from-[#0B1120] to-[#0B1120] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold">Claudia Alfonso Rodriguez</h3>
        <p className="text-lg font-normal">Desarrollador Frontend</p>
        <p className="text-base  tracking-wide">
          Ponte en contacto y dejame saber como puedo ayudarte.
        </p>
        <div className="text-base  flex items-center gap-2">
          <span className="text-primaryColor">
            <FaPhone size={15} />
          </span>
          <span className="text-text">+53 53761909</span>
        </div>

        <div className="text-base flex items-center gap-2">
          <span className="text-primaryColor">
            <SiMinutemailer size={15} />
          </span>
          <span className="text-text">claudiaar9313@gmail.com</span>
        </div>
      </div>
      <div className="flex flex-col items-start gap-4">
        <ListSocial constainerStyle="listSocial" linkStyles="bannerIcon" />
      </div>
    </div>
  );
};

export default ContactLeft;
