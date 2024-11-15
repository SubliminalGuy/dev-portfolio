import { Link, useSearchParams } from "react-router-dom";
import { projects } from "../helpers/projectData";

export default function Projects() {
  const [searchParams, setSearchParams] = useSearchParams();
  const typeFilter = searchParams.get("type");

  function handleFilterChange(key, value) {
    setSearchParams((prevParams) => {
      if (value === null) {
        prevParams.delete(key);
      } else {
        prevParams.set(key, value);
      }
      return prevParams;
    });
  }

  const displayedProjects = typeFilter
    ? projects.filter((el) => el.projectTags.includes(typeFilter))
    : projects;

  const projectElements = displayedProjects.map((el) => (
    <div className="bg-white rounded-lg shadow-md p-4 lg:p-6 mb-8 transition-transform hover:scale-102" key={el.projectId}>
      <Link
        className="block"
        to={el.projectId}
        state={{ search: `?${searchParams.toString()}`, type: typeFilter }}
      >
        <div className="space-y-4">
          <h2 className="text-xl lg:text-2xl font-bold mb-4">{el.projectName}</h2>

          <img
            className="w-full h-48 object-cover rounded-md mb-4"
            src={el.projectImage}
            alt={el.projectName}
          />

          <p className="text-gray-700 text-base lg:text-lg">{el.projectDescription}</p>
        </div>
      </Link>
      <div className="flex flex-wrap gap-2 mt-4">
        {el.projectTags.map((tag) => (
          <div key={tag} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
            <p>{tag}</p>
          </div>
        ))}
      </div>
    </div>
  ));

  return (
    <div className="px-4 py-6 lg:row-start-2 lg:col-start-2 lg:col-span-2 lg:px-8">
      <div className="mb-8">
        <Link 
          className="text-black font-bold hover:text-blue-600 transition-colors duration-200 mb-4 block" 
          to=".."
        >
          Back to Main Page
        </Link>
        <div className="flex flex-wrap gap-3 mb-4">
          <button
            onClick={() => handleFilterChange("type", "react")}
            className={`px-3 py-1 lg:px-4 lg:py-2 text-sm lg:text-base rounded-md transition-colors ${
              typeFilter === "react"
                ? "bg-blue-600 text-white"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            react
          </button>
          <button
            onClick={() => handleFilterChange("type", "vue2")}
            className={`px-3 py-1 lg:px-4 lg:py-2 text-sm lg:text-base rounded-md transition-colors ${
              typeFilter === "vue2"
                ? "bg-blue-600 text-white"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            vue2
          </button>
          <button
            onClick={() => handleFilterChange("type", "svelte")}
            className={`px-3 py-1 lg:px-4 lg:py-2 text-sm lg:text-base rounded-md transition-colors ${
              typeFilter === "svelte"
                ? "bg-blue-600 text-white"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            svelte
          </button>
          <button
            onClick={() => handleFilterChange("type", "supabase")}
            className={`px-3 py-1 lg:px-4 lg:py-2 text-sm lg:text-base rounded-md transition-colors ${
              typeFilter === "supabase"
                ? "bg-blue-600 text-white"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            supabase
          </button>
          <button
            onClick={() => handleFilterChange("type", "mariaDB")}
            className={`px-3 py-1 lg:px-4 lg:py-2 text-sm lg:text-base rounded-md transition-colors ${
              typeFilter === "mariaDB"
                ? "bg-blue-600 text-white"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            mariaDB
          </button>
          <button
            onClick={() => handleFilterChange("type", "mongoDB")}
            className={`px-3 py-1 lg:px-4 lg:py-2 text-sm lg:text-base rounded-md transition-colors ${
              typeFilter === "mongoDB"
                ? "bg-blue-600 text-white"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            mongoDB
          </button>
          <button
            onClick={() => handleFilterChange("type", "mssql")}
            className={`px-3 py-1 lg:px-4 lg:py-2 text-sm lg:text-base rounded-md transition-colors ${
              typeFilter === "mssql"
                ? "bg-blue-600 text-white"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            mssql
          </button>
          <button
            onClick={() => handleFilterChange("type", "chart.js")}
            className={`px-3 py-1 lg:px-4 lg:py-2 text-sm lg:text-base rounded-md transition-colors ${
              typeFilter === "chart.js"
                ? "bg-blue-600 text-white"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            chart.js
          </button>
          <button
            onClick={() => handleFilterChange("type", "extendScript")}
            className={`px-3 py-1 lg:px-4 lg:py-2 text-sm lg:text-base rounded-md transition-colors ${
              typeFilter === "extendScript"
                ? "bg-blue-600 text-white"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            extendScript
          </button>
          <button
            onClick={() => handleFilterChange("type", "node.js")}
            className={`px-3 py-1 lg:px-4 lg:py-2 text-sm lg:text-base rounded-md transition-colors ${
              typeFilter === "node.js"
                ? "bg-blue-600 text-white"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            node.js
          </button>
          {typeFilter && (
            <button
              onClick={() => handleFilterChange("type", null)}
              className="px-3 py-1 lg:px-4 lg:py-2 text-sm lg:text-base rounded-md bg-red-500 text-white hover:bg-red-600 transition-colors"
            >
              Clear filter
            </button>
          )}
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
        {projectElements}
      </div>
    </div>
  );
}
