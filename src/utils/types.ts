export type listSocialProps = {
  constainerStyle: string;
  linkStyles: string;
  // listSocial:listSocial[]
};
export type listSocial = {
  icon: React.ReactNode;
  size: number;
};

export type FeactureType = {
  text: string;
  icon: JSX.Element;
};

export type Project = {
  id: number;
  category: string;
  name: string;
  description: string;
  /* image: { src: string }; */
  image: string;
  url: string;
};

export type ChildrenProps = {
  children?: React.ReactNode;
};

export type Card2ChildrenProps = {
  children?: React.ReactNode;
};
