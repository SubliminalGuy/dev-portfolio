import { NavLink } from "react-router-dom";

export default function FontContainer() {
  return (
    <div className="flex flex-col items-center gap-6 py-8 lg:items-start lg:col-start-3 lg:row-start-2 lg:justify-center lg:pl-16 lg:gap-8">
      <NavLink
        to="projects"
        className={({ isActive }) =>
          `text-xl lg:text-2xl font-bold transition-colors duration-200 ${
            isActive ? "text-blue-600" : "text-black hover:text-blue-600"
          }`
        }
      >
        projects
      </NavLink>
      <NavLink
        to="about"
        className={({ isActive }) =>
          `text-xl lg:text-2xl font-bold transition-colors duration-200 ${
            isActive ? "text-blue-600" : "text-black hover:text-blue-600"
          }`
        }
      >
        about
      </NavLink>
      <NavLink
        to="contact"
        className={({ isActive }) =>
          `text-xl lg:text-2xl font-bold transition-colors duration-200 ${
            isActive ? "text-blue-600" : "text-black hover:text-blue-600"
          }`
        }
      >
        contact
      </NavLink>
    </div>
  );
}
