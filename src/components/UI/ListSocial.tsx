import { listSocialProps } from "../../utils/types";
import { socialHandles } from "../../utils/source";

const ListSocial = ({ constainerStyle, linkStyles }: listSocialProps) => {
  return (
    <div className={constainerStyle}>
      {socialHandles.map((item, index) => (
        <a href={item.link} target="_blank" key={index}>
          <span className={linkStyles}>{item.icon}</span>
        </a>
      ))}
    </div>
  );
};

export default ListSocial;
