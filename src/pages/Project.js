import { useParams, Link, useLocation } from "react-router-dom"
import { projects } from "../helpers/projectData";
import { capitalizeFirstLetter } from "../helpers/capitalizeFirstLetter";

export default function Project() {

    const { id } = useParams()
    const location = useLocation()
  

    const el = projects.filter(el => el.projectId === id)[0]

    const search = location.state?.search || ""
    const type = location.state?.type || ""




    return (
        <div className="projects-main-container">
            <div className="projects-main-filter-container">
        <Link className="navi-backlink" to={`..${search}`} relative="path">
          Back to {capitalizeFirstLetter(type)} Projects
        </Link>
        </div>
            <div className="project-main-container">
                <div className="project-description-container">
      <h2>{el.projectName}</h2>
      <a href={el.projectLink} target="_blank" rel="noreferrer">
        <img
          className="project-image"
          src={el.projectImage}
          alt={el.projectName}
        />
      </a>
      <p className="project-description">{el.projectDescription}</p>
    </div>
    <div className="tag-main-container">
      {el.projectTags.map((tag) => (
        <div className="tag-container">
          <p className="project-tag">{tag}</p>
        </div>
      ))}
    </div>
  </div>
  </div>
  )
}


