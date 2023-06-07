import { Link, useSearchParams } from "react-router-dom";
import { projects } from "../helpers/projectData";

export default function Projects() {
  const [searchParams, setSearchParams] = useSearchParams();

  const typeFilter = searchParams.get("type");

  function handleFilterChange(key, value) {
    console.log(searchParams);
    setSearchParams((prevParams) => {
      if (value === null) {
        prevParams.delete(key);
      } else {
        prevParams.set(key, value);
      }
      return prevParams;
    });
  }
  // filters the displayed projects based on the typeFilter
  const displayedProjects = typeFilter
    ? projects.filter((el) => el.projectTags.includes(typeFilter))
    : projects;

  const projectElements = displayedProjects.map((el) => (
    <div className="project-main-container" key={el.projectId}>
      <Link
        className="project-link"
        to={el.projectId}
        state={{ search: `?${searchParams.toString()}`, type: typeFilter }}
      >
        <div className="project-description-container">
          <h2>{el.projectName}</h2>

          <img
            className="project-image"
            src={el.projectImage}
            alt={el.projectName}
          />

          <p className="project-description">{el.projectDescription}</p>
        </div>
      </Link>
      <div className="tag-main-container">
        {el.projectTags.map((tag) => (
          <div className="tag-container">
            <p className="project-tag">{tag}</p>
          </div>
        ))}
      </div>
    </div>
  ));

  return (
    <div className="projects-main-container">
      <div className="projects-main-filter-container">
        <Link className="navi-backlink" to="..">
          Back to Main Page
        </Link>
        <div className="projects-filter-button-container">
          <button
            onClick={() => handleFilterChange("type", "react")}
            className={`projects-filter-button ${
              typeFilter === "react" ? "selected" : ""
            }`}
          >
            react
          </button>
          <button
            onClick={() => handleFilterChange("type", "vue2")}
            className={`projects-filter-button ${
              typeFilter === "vue2" ? "selected" : ""
            }`}
          >
            vue2
          </button>
          <button
            onClick={() => handleFilterChange("type", "svelte")}
            className={`projects-filter-button ${
              typeFilter === "svelte" ? "selected" : ""
            }`}
          >
            svelte
          </button>
          <button
            onClick={() => handleFilterChange("type", "supabase")}
            className={`projects-filter-button ${
              typeFilter === "supabase" ? "selected" : ""
            }`}
          >
            supabase
          </button>
          <button
            onClick={() => handleFilterChange("type", "chart.js")}
            className={`projects-filter-button ${
              typeFilter === "chart.js" ? "selected" : ""
            }`}
          >
            chart.js
          </button>
          <button
            onClick={() => handleFilterChange("type", "extendScript")}
            className={`projects-filter-button ${
              typeFilter === "extendScript" ? "selected" : ""
            }`}
          >
            extendScript
          </button>
          <button
            onClick={() => handleFilterChange("type", "node.js")}
            className={`projects-filter-button ${
              typeFilter === "node.js" ? "selected" : ""
            }`}
          >
            node.js
          </button>
          {typeFilter ? (
            <button
              onClick={() => handleFilterChange("type", null)}
              className="projects-filter-button"
            >
              remove filter
            </button>
          ) : null}
        </div>
      </div>
      <div className="projects-container">{projectElements}</div>
    </div>
  );
}
