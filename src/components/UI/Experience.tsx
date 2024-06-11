type Experience = {
  id: number;
  cargo: string;
  time: string;
  empresa: string;
  siglas?: string;
};
const listExperience: Array<Experience> = [
  {
    id: 1,
    cargo: "  Desarrollador Web",
    time: " 2022 - actualidad",
    empresa: "Empresa de desarrollo de Software Minit",
    siglas: "Datys",
  },
  {
    id: 2,
    cargo: "Oficial Sistemas Informáticos",
    time: " 2022 - actualidad",
    empresa: " Subcentro de Calculo Estado Mayor Ejercito Central",
    siglas: "SCA",
  },
  {
    id: 3,
    cargo: "Jefa Brigada de Reparacion Equipos de Computo",
    time: "2016 - 2017",
    empresa: "Taller Reparacion Ejercito Central",
    siglas: "",
  },
];
const Experience = () => {
  return listExperience.map((item: Experience) => (
    <div className="circleResumen relative mx-4 flex flex-col gap-4 border-l-2 border-l-primaryColor px-4">
      <div className="resume-item" key={item.id}>
        <h4 className="text-xl font-semibold uppercase text-textAccent">
          {item.cargo}
        </h4>
        <h5 className="text-lg font-medium text-textAccent">{item.time}</h5>
        <p className="mb-4 mt-2">
          <em>
            {item.empresa}
            <span className="text-textAccent"> ({item.siglas})</span>{" "}
          </em>
        </p>
      </div>
    </div>

  ));
};

export default Experience;
