import { Link, useSearchParams } from "react-router-dom";

export default function Projects() {
  const [searchParams, setSearchParams] = useSearchParams();

  const typeFilter = searchParams.get("type");

  console.log("typeFilter", typeFilter);

  const projects = [
    {
      projectId: "1",
      projectName: "Crypto Dashboard",
      projectDescription: "A multifunctional dashboard for crypto traders",
      projectLink: "https://subguy-crypto-dashboard.netlify.app/",
      projectImage: "../images/cryptodashboard.png",
      projectTags: ["react", "chart.js"],
    },
    {
      projectId: "2",
      projectName: "Adults in the Zoom",
      projectDescription: "A Svelte based Blog for political memoirs",
      projectLink: "https://www.adults-in-the-zoom.de/",
      projectImage: "..//images/a-in-the-zoom.png",
      projectTags: ["svelte", "firebase"],
    },
    {
      projectId: "3",
      projectName: "Sopita de Letras",
      projectDescription: "A simple letter soup game for spanish beginners",
      projectLink: "https://sopitadeletras.netlify.app/",
      projectImage: "..//images/sopitadeletras.png",
      projectTags: ["vue"],
    },
    {
      projectId: "4",
      projectName: "Abecedario",
      projectDescription: "A simple pronounciation guide for spanish beginners",
      projectLink: "https://teresais-alfabeto.netlify.app/",
      projectImage: "..//images/abecedario.png",
      projectTags: ["vue"],
    },
  ];

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

  const displayedProjects = typeFilter
    ? projects.filter((el) => el.projectTags.includes(typeFilter))
    : projects;

  const projectElements = displayedProjects.map((el) => (
    <div className="single-project-main-container">
      <div className="single-project-description-container">
        <h2>{el.projectName}</h2>
        <a href={el.projectLink} target="_blank" rel="noreferrer">
          <img
            className="single-project-image"
            src={el.projectImage}
            alt={el.projectName}
          />
        </a>
        <p className="single-project-description">{el.projectDescription}</p>
      </div>
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
    <div className="project-main-container">
      <div className="project-main-filter-container">
        <Link className="navi-backlink" to="..">
          Back to Main Page
        </Link>
        <div className="project-filter-button-container">
          <button
            onClick={() => handleFilterChange("type", "react")}
            className="project-filter-button"
          >
            react
          </button>
          <button
            onClick={() => handleFilterChange("type", "vue")}
            className="project-filter-button"
          >
            vue
          </button>
          {typeFilter ? (
            <button
              onClick={() => handleFilterChange("type", null)}
              className="project-filter-button"
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
