import { FaGithub, FaLinkedin } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-auto">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="text-center">
            <h3 className="text-xl font-bold mb-2">Dhruv Trivedi</h3>
            <p className="text-gray-400 text-sm">
              Full-Stack Developer | Next.js Enthusiast
            </p>
          </div>
          
          <div className="flex space-x-6">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 hover:text-blue-400 transition-colors"
              aria-label="GitHub Profile"
            >
              <FaGithub className="text-2xl" />
              <span>https://github.com/drvcodenta</span>
            </a>
            
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 hover:text-blue-400 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedin className="text-2xl" />
              <span>https://www.linkedin.com/in/dhruv-trivedi-06a767228/</span>
            </a>
          </div>
          
          <div className="text-gray-500 text-sm pt-4 border-t border-gray-700 w-full text-center">
            <p>© {new Date().getFullYear()} Task Manager. Built with Next.js 15 & PostgreSQL</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
