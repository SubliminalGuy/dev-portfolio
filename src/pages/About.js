import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="projects-main-container">
      <div className="projects-main-filter-container">
        <Link className="navi-backlink" to="..">
          Back to Main Page
        </Link>
      </div>

      <div className="about-box">
        <div className="about-heading-box">
          <h1>About Me</h1>
          <img
            className="about-avatar"
            src="../images//deivi.png"
            alt="stylized avatar pic"
          />
        </div>
        <p className="about-text">
          I'm David, a developer and media engineer from Germany. I currently
          live in Benalmádena on the spanish Costa del Sol.
        </p>
        <p className="about-text">
          I worked for every major tv-station in Germany, still occasionally on
          premise, and i do freelance remote work for a public broadcaster. So i
          guess i'm somewhat a digital nomad 😉{" "}
        </p>
        <p className="about-text">
          My professional experiences include video production, content
          development, live tv production and editing. I wrote and directed
          three documentaries on{" "}
          <a
            href="https://collageculturel.realvinylz.net/episodes.html"
            target="_blank"
            rel="noreferrer"
          >
            contemporary art and remixing
          </a>
          .
        </p>
        <p className="about-text">
          <strong>In late 2017</strong> i rediscovered my fascination for
          programming and web development. I bootcamped in Responsive Web
          Design, React, Vue and Svelte and developed{" "}
          <Link to="/projects">dozens of applications</Link> for fun, training,
          and professional purposes.
        </p>
        <p className="about-text">
          I'm looking for a React Developer role, full-time, part-time or as a
          freelancer. I'll work on premise in the Málaga area and remotely
          everywhere.
        </p>
      </div>
    </div>
  );
}
