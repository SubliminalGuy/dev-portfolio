import { useParams, Link, useLocation } from "react-router-dom";
import { projects } from "../helpers/projectData";
import { capitalizeFirstLetter } from "../helpers/capitalizeFirstLetter";

export default function Project() {
  const { id } = useParams();
  const location = useLocation();

  const el = projects.filter((el) => el.projectId === id)[0];

  const search = location.state?.search || "";
  const type = location.state?.type || "";

  return (
    <div className="px-4 py-6 lg:row-start-2 lg:col-start-2 lg:col-span-2 lg:px-8">
      <div className="mb-8">
        <Link 
          className="text-black font-bold hover:text-blue-600 transition-colors duration-200" 
          to={`..${search}`} 
          relative="path"
        >
          Back to {capitalizeFirstLetter(type)} Projects
        </Link>
      </div>
      <div className="bg-white rounded-lg shadow-md p-4 lg:p-8">
        <div className="mb-6 lg:mb-8">
          <a 
            href={el.projectLink} 
            target="_blank" 
            rel="noreferrer"
            className="block hover:opacity-90 transition-opacity"
          >
            <img
              className="w-full h-auto rounded-lg shadow-md"
              src={el.projectImage}
              alt={el.projectName}
            />
          </a>
        </div>
        <div className="space-y-4 lg:space-y-6">
          <h1 className="text-2xl lg:text-3xl font-bold">{el.projectName}</h1>
          <p className="text-base lg:text-lg text-gray-700">{el.projectDescription}</p>
          <div
            className="text-gray-700 prose prose-sm lg:prose-base prose-blue max-w-none"
            dangerouslySetInnerHTML={{ __html: el.projectDetails }}
          ></div>
        </div>
      </div>
    </div>
  );
}
