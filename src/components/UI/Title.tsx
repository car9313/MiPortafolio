interface Props {
  title: string;
  des: string;
}

const Title = ({ title, des }: Props) => {
  return (
    <div className="flex flex-col gap-4 font-titleFont justify-center items-center text-center mb-14">
      <h3 className="text-lg uppercase font-semibold tracking-wide">
        {title}
      </h3>
      <h1 className="text-4xl md:text-5xl font-black text-primaryColor  capitalize">
        {des}
      </h1>
    </div>
  );
};

export default Title;
