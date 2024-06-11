interface Props {
  title: string;
  des: string;
  icon: React.ReactNode;
}

const Card = ({ title, des, icon }: Props) => {
  return (
    <div className="w-full px-12 h-80 py-10 rounded-lg shadow-sm shadow-text  flex items-center bg-gradient-to-r dark:from-bgPrimary from-bgSecundary dark:to-[#202327] to-[#fffffffc] group hover:bg-gradient-to-b dark:hover:from-black hover:from-white dark:hover:to-[#202327] hover:to-[#fffffffc] transition-colors duration-100 group">
      <div className="h-72 overflow-y-hidden">
        <div className="flex h-full flex-col gap-10 translate-y-16 group-hover:translate-y-0 transition-transform duration-500">
          <div className="w-10 h-8 flex flex-col justify-between">
            {icon ? (
              <span className="text-5xl text-primaryColor">{icon}</span>
            ) : (
              <>
                <span className="w-full h-[2px] rounded-lg bg-primaryColor inline-flex"></span>
                <span className="w-full h-[2px] rounded-lg bg-primaryColor inline-flex"></span>
                <span className="w-full h-[2px] rounded-lg bg-primaryColor inline-flex"></span>
                <span className="w-full h-[2px] rounded-lg bg-primaryColor inline-flex"></span>
              </>
            )}
          </div>
          <div className="flex flex-col gap-6">
            <h2 className="text-xl md:text-2xl font-titleFont font-bold text-gray-300">
              {title}
            </h2>
            <p className="base">{des}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
