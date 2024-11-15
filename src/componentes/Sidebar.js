export default function SideBar() {
  return (
    <div className="flex justify-center gap-8 p-4 lg:col-start-1 lg:row-start-2 lg:h-[40vh] lg:flex-col lg:justify-around lg:px-4">
      <a
        href="https://bsky.app/profile/subguy.bsky.social"
        target="_blank"
        rel="noreferrer"
        className="text-black font-bold hover:text-blue-600 transition-colors duration-200"
      >
        bluesky
      </a>
      <a
        href="https://github.com/SubliminalGuy"
        target="_blank"
        rel="noreferrer"
        className="text-black font-bold hover:text-blue-600 transition-colors duration-200"
      >
        github
      </a>
      <a
        href="https://www.linkedin.com/in/david-schwertgen-505044107"
        target="_blank"
        rel="noreferrer"
        className="text-black font-bold hover:text-blue-600 transition-colors duration-200"
      >
        linkedin
      </a>
    </div>
  );
}
