import Data from "@/data/data";
import { IconType } from "react-icons";

type TechItem = {
  label: string;
  icon: IconType;
  category: "Technology" | "Tools" | "Databases";
  status?: string;
};

const TechGrid = () => {
  const tech: TechItem[] = Data.techItems as TechItem[];
  return (
    <div className="pt-20" id="tech">
      <h3 className="mb-6 text-3xl font-bold">Tech Stack & Tools</h3>
      <div className="mx-auto mt-2 rounded-3xl">
        {["Technology", "Tools", "Databases"].map((category) => (
          <div key={category} className="mb-6">
            <h2 className="mb-4 text-xl font-semibold">{category}</h2>
            <div className="grid grid-cols-5 gap-4 lg:grid-cols-6">
              {tech
                .filter((item) => item.category === category)
                .map(({ label, icon: Icon, status }) => (
                  <div
                    key={label}
                    className="flex flex-col items-center justify-center rounded-xl border border-gray-500 bg-white px-2 py-4 transition-colors hover:bg-gray-900 hover:text-white"
                  >
                    <div className="md:mb-2">
                      <Icon className="h-6 w-6 md:h-8 md:w-8" />
                    </div>
                    <span className="hidden text-center text-xs md:block md:text-sm">{label}</span>
                    {status && (
                      <span className="mt-1 hidden text-xs text-green-400 md:block">{status}</span>
                    )}
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechGrid;
