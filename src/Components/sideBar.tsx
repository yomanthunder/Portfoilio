import { useState } from 'react';
import slowlaxImage from "../assets/slowlax.png"; // Import your profile image

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle('dark', !isDarkMode); // Toggle dark mode globally
  };

  return (
    <>
      {/* Sidebar Toggle Button */}
      <button
        onClick={toggleSidebar}
        type="button"
        className={`fixed top-2 left-2 z-50 p-2 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 transition-all duration-300 ${isOpen ? "translate-x-64" : ""}`}
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          />
        </svg>
      </button>

      {/* Sidebar */}
      <aside
        id="sidebar-multi-level-sidebar"
        className={`fixed top-0 left-0 z-40 w-64 h-screen bg-[#3b3b3b] dark:bg-[#202020] transition-transform ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto">
          <div className="flex flex-col items-center mb-6">
            {/* Outer Circle with Padding */}
            <div className="w-30 h-30 bg-white rounded-full flex items-center justify-center p-2">
              <img
                src={slowlaxImage} // Your profile image
                alt="Profile"
                className="w-30 h-30 rounded-full" // Profile image size
              />
            </div>
            <span className="text-lg font-semibold text-gray-100">Shrishvesh</span>
            <button
              onClick={toggleDarkMode}
              className="mt-2 p-2 text-gray-500 dark:text-gray-400 rounded-full"
            >
              {isDarkMode ? (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 2a7 7 0 000 14 7 7 0 000-14zm0 12A5 5 0 119 4a5 5 0 010 10z" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 5a7 7 0 1112.25 4.547A6.972 6.972 0 0114 11.5C14 13.5 12.75 15 11 15a3 3 0 010-6 3.006 3.006 0 013-3c.818 0 1.575.262 2.25.69A7 7 0 012 5z" />
                </svg>
              )}
            </button>
          </div>

          <ul className="space-y-2 font-medium">
            <li>
              <a
                href="#aboutme"
                className="flex items-center p-2 text-gray-100 rounded-lg dark:text-white hover:bg-gray-700 dark:hover:bg-gray-600 group"
              >
                <span className="ms-3">About Me</span>
              </a>
            </li>
            <li>
              <a
                href="#blogs"
                className="flex items-center p-2 text-gray-100 rounded-lg dark:text-white hover:bg-gray-700 dark:hover:bg-gray-600 group"
              >
                <span className="ms-3">Blogs</span>
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className="flex items-center p-2 text-gray-100 rounded-lg dark:text-white hover:bg-gray-700 dark:hover:bg-gray-600 group"
              >
                <span className="ms-3">Skills</span>
              </a>
            </li>
            <li>
              <a
                href="#newsletter"
                className="flex items-center p-2 text-gray-100 rounded-lg dark:text-white hover:bg-gray-700 dark:hover:bg-gray-600 group"
              >
                <span className="ms-3">Newsletter</span>
              </a>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
