import { NavLink } from "react-router-dom";

export default function FontContainer() {
  return (
    <>
      <div className="font-container">
        <NavLink to="projects" className="font-container-link">
          projects
        </NavLink>
        <NavLink to="about" className="font-container-link">
          about
        </NavLink>
        <NavLink className="font-container-link">contact</NavLink>
      </div>
    </>
  );
}
