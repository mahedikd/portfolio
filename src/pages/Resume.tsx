import { DownloadCloud, Calendar } from "lucide-react";
import Data from "@/data/data";
import Seo from "@/components/Seo";

type Experience = {
  title: string;
  company: string;
  period: string;
  description: string;
};

const ResumePage = () => {
  const { title, desc, name, type } = Data.seo.resume;
  const experienceData: Experience[] = Data.experienceData;

  const handleDownload = () => {
    window.open("/resume.pdf", "_blank");
  };

  return (
    <>
      <Seo title={title} description={desc} name={name} type={type} />
      <div className="mt-20 grid grid-cols-1 gap-8 md:mt-20 lg:grid-cols-3">
        {/* Left Column */}
        <div className="space-y-8 lg:col-span-2">
          {/* Experience Section */}
          <div className="rounded-xl bg-white p-6 shadow-md transition-shadow hover:shadow-md">
            <h2 className="mb-4 flex items-center text-2xl font-bold text-gray-800">
              <Calendar className="mr-2 h-6 w-6" />
              Experience
            </h2>
            <div className="space-y-6">
              {experienceData.map((exp, index) => (
                <div key={index} className="border-l-2 border-gray-500 pl-4">
                  <h3 className="text-lg font-semibold text-gray-800">{exp.title}</h3>
                  <p className="text-gray-600">
                    {exp.company} • {exp.period}
                  </p>
                  <p className="text-gray-600">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mb-8 rounded-2xl bg-gradient-to-r from-gray-700 to-gray-900 p-8 text-white shadow-lg">
          <h1 className="mb-4 text-3xl font-bold md:text-4xl">My Resume</h1>
          <p className="mb-6 text-lg opacity-90">Full-Stack Developer & Problem Solver</p>
          <button
            onClick={handleDownload}
            className="inline-flex transform items-center rounded-lg bg-white px-6 py-3 font-semibold text-gray-900 shadow-md transition-all hover:scale-105 hover:bg-opacity-90 active:scale-95"
          >
            <DownloadCloud className="mr-2 h-5 w-5" />
            Download Resume
          </button>
        </div>
      </div>
    </>
  );
};

export default ResumePage;
