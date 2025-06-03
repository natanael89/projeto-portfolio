import CardProject from "../utils/CardProject.jsx"; // Agora é um componente
import { CardProjectData } from "../utils/CardProjectData.js"; // Array de dados

export const Projects = () => {
  return (
    <section id="sites" className=" text-white p-5  w-full flex items-center">
      <div className="container mx-auto">
        <div className="flex flex-col">
            <h2 className="text-5xl md:text-5xl text-neon mb-8 text-right">Sites</h2>
           <div className="flex justify-end">
              <img
                  src="https://i.pinimg.com/originals/5b/e6/68/5be668d20e6c5f96f18658d204c30d72.gif"
                  alt="Ilustração"
                  className="w-64"
              />
           </div>
            <div className="flex flex-col items-center md:items-start gap-8">
            {/* GIF ilustrativo */}

            {/* Grid de cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
                {CardProjectData.map((proj, i) => (
                <CardProject key={i} {...proj} />
                ))}
            </div>
            </div>
        </div>
      </div>
    </section>
  );
};