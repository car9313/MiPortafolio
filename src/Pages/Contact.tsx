import Title from "../components/UI/Title";
import { FadeIn } from "../components/UI/FadeIn";
import { contactInfo } from "../utils/source";
const Contact = () => {
  return (
    <section id="contact" className="seccion relative">
      <FadeIn>
        <Title title="CONTACT" des="Contact With Me" />
        <div className="flex flex-col items-stretch gap-8 mdl:flex-row">
          <form className="w-full max-w-full rounded-lg bg-gradientText-to-br from-bgPrimary to-bgSecundary p-2 shadow-sm shadow-text mdl:max-w-[60%] mdl:p-10">
            <div className="contact__form__top">
              <h1 className="text-left text-4xl">
                <span className="text-primaryColor font-medium">Claudia Alfonso Rodríguez</span>
              </h1>
              <p className="text-lg font-normal text-textAccent">
                Desarrollador Frontend
              </p>
              <p className="text-textAccent">
                Ponte en contacto y dejame saber como puedo ayudarte.
              </p>
            </div>

            <div className="flex justify-between gap-5">
              <input
                type="text"
                placeholder="First name"
                name="firstname"
                className="control h-12"
              />
              <input
                type="text"
                placeholder="Last name"
                name="lastname"
                className="control h-12"
              />
            </div>
            <div className="flex justify-between gap-5">
              <input
                type="email"
                placeholder="Email"
                name="email"
                className="control h-12"
              />
              <input
                type="tel"
                placeholder="Phone number"
                name="phone"
                className="control h-12"
              />
            </div>
            <textarea
              name="message"
              id=""
              cols={30}
              rows={10}
              className="control"
            ></textarea>

            <div className="mt-8 flex items-center">
              <button className="btn btn__primary">Send Now</button>
            </div>
          </form>
          <div className="flex flex-1 flex-col gap-5">
            {contactInfo.map((info, index) => (
              <div
                className="rounded-lg bg-gradientText-to-br from-bgPrimary to-bgSecundary p-5 text-center shadow-sm shadow-text transition-all duration-300 hover:scale-90 hover:from-bgSecundary hover:to-bgPrimary"
                key={index}
              >
                <div className="bannerIcon">{info.icon}</div>
                <h3 className="my-2 text-base font-semibold">{info.name}</h3>
                <h4 className="text__muted text-sm font-normal">
                  {info.address}
                </h4>
                <div className="mt-5">
                  <button className="btn btn__primary">Let Task</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </FadeIn>
      <div className="absolute left-[30px] top-[40px] h-[150px] w-[150px] rounded-full gradient opacity-80 blur-3xl"></div>
    </section>
  );
};

export default Contact;
