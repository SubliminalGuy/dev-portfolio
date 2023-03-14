export default function Projects() {
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
      projectLink: "https://subguy-crypto-dashboard.netlify.app/",
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

  const projectElements = projects.map((el) => (
    <div className="single-project-main-container">
      <div className="single-project-description-container">
        <h2>{el.projectName}</h2>

        <img
          className="single-project-image"
          src={el.projectImage}
          alt={el.projectName}
        />

        <p>{el.projectDescription}</p>
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

  console.log(projectElements);

  return (
    <div className="project-main-container">
      <h1>Projects</h1>
      <div className="projects-container">{projectElements}</div>
    </div>
  );
}
