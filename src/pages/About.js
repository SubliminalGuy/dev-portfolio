import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="px-4 py-6 lg:row-start-2 lg:col-start-2 lg:col-span-2 lg:px-8">
      <div className="mb-8">
        <Link 
          className="text-black font-bold hover:text-blue-600 transition-colors duration-200" 
          to=".."
        >
          Back to Main Page
        </Link>
      </div>

      <div className="bg-white rounded-lg shadow-md p-4 lg:p-8">
        <div className="flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-8 mb-6 lg:mb-8">
          <h1 className="text-2xl lg:text-3xl font-bold">About Me</h1>
          <img
            className="w-20 h-20 lg:w-24 lg:h-24 rounded-full object-cover self-center"
            src="../images//deivi.png"
            alt="stylized avatar pic"
          />
        </div>
        <div className="space-y-4 lg:space-y-6 text-base lg:text-lg text-gray-700">
          <p>
            I'm David, a developer and media engineer from Germany. I currently
            live in Benalmádena on the spanish Costa del Sol.
          </p>
          <p>
            I worked for every major tv-station in Germany, still occasionally on
            premise, and i do freelance remote work for two public broadcasting
            companies.
          </p>
          <p>
            My professional experiences include video production, content
            development, live tv production and editing. I wrote and directed
            three documentaries on{" "}
            <a
              href="https://collageculturel.realvinylz.net/episodes.html"
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 hover:text-blue-800 underline"
            >
              contemporary art and remixing
            </a>
            .
          </p>
          <p>
            <strong>In late 2017</strong> i rediscovered my fascination for
            programming and web development. I bootcamped in Responsive Web
            Design, React, Vue and Svelte and developed{" "}
            <Link 
              to="/projects"
              className="text-blue-600 hover:text-blue-800 underline"
            >
              dozens of applications
            </Link>{" "}
            for fun, training, and professional purposes.
          </p>
          <p>
            I'm looking for a React Developer role, full-time, part-time or as a
            freelancer. I'm open to remote work and relocation.
          </p>
        </div>
      </div>
    </div>
  );
}
