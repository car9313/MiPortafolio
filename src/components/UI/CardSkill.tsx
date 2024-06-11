import { ChildrenProps } from "../../utils/types";

const CardSkill = ({ children }: ChildrenProps) => {
  return (
    <div className="cardSkills text-primaryColor hover:animate-spin ">
      {children}
    </div>
  );
};

export default CardSkill;
