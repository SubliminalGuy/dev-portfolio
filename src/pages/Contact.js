import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <div className="projects-main-container">
      <div className="projects-main-filter-container">
        <Link className="navi-backlink" to="..">
          Back to Main Page
        </Link>
      </div>
      <div className="contact-box">
        <h1>Contact Me</h1>
        <p className="about-text">
          I'm available to work as a freelancer, part-time or full-time. Feel
          free to contact me if you want to get in touch or learn more about me.
          You can use any of the links in the sidebar or write me an e-mail to:
          <strong className="link-box">
            subliminal_kid
            <img
              src="../images/at-sign.png"
              alt="@"
              style={{ width: "15px" }}
            />
            posteo.de
          </strong>
        </p>
        <a
          className="attribution"
          href="https://www.freepnglogos.com/pics/at-sign"
        >
          At Sign from freepnglogos.com
        </a>
      </div>
    </div>
  );
}
