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
    <div className="projects-main-container">
      <div className="projects-main-filter-container">
        <Link className="navi-backlink" to={`..${search}`} relative="path">
          Back to {capitalizeFirstLetter(type)} Projects
        </Link>
      </div>
      <div className="single-project-main-container">
        <div className="single-project-image-container">
          <a href={el.projectLink} target="_blank" rel="noreferrer">
            <img
              className="single-project-image"
              src={el.projectImage}
              alt={el.projectName}
            />
          </a>
        </div>
        <div className="single-project-description-container">
          <h1>{el.projectName}</h1>
          <p className="single-project-description">{el.projectDescription}</p>
          <p
            className="single-project-details"
            dangerouslySetInnerHTML={{ __html: el.projectDetails }}
          ></p>
        </div>
      </div>
    </div>
  );
}
