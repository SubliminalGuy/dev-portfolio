export default function SideBar() {
  return (
    <>
      <div className="sidebar-container">
        <a
          href="https://mastodon.sdf.org/@subliminal_guy"
          target="_blank"
          rel="noreferrer"
          className="sidebar-links"
        >
          mastodon
        </a>
        <a href="/" rel="noreferrer" className="sidebar-links red">
          <s>twitter</s>
        </a>
        <a
          href="https://github.com/SubliminalGuy"
          target="_blank"
          rel="noreferrer"
          className="sidebar-links"
        >
          github
        </a>
        <a
          href="https://www.linkedin.com/in/david-schwertgen-505044107"
          target="_blank"
          rel="noreferrer"
          className="sidebar-links"
        >
          linkedin
        </a>
      </div>
    </>
  );
}
