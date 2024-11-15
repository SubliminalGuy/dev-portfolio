import { Link } from "react-router-dom";

export default function Contact() {
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
        <h1 className="text-2xl lg:text-3xl font-bold mb-6">Contact Me</h1>
        <div className="space-y-4">
          <p className="text-base lg:text-lg text-gray-700">
            I'm available to work as a freelancer, part-time or full-time. Feel
            free to contact me if you want to get in touch or learn more about me.
            You can use any of the links in the sidebar or write me an e-mail to:
          </p>
          <div className="flex items-center justify-center lg:justify-start gap-1 text-lg lg:text-xl font-bold py-4">
            <span>subliminal_kid</span>
            <img
              src="../images/at-sign.png"
              alt="@"
              className="w-4 h-4 mx-1"
            />
            <span>posteo.de</span>
          </div>
        </div>
        <a
          className="block mt-8 text-xs text-gray-500 hover:text-gray-700 text-center lg:text-left"
          href="https://www.freepnglogos.com/pics/at-sign"
        >
          At Sign from freepnglogos.com
        </a>
      </div>
    </div>
  );
}
