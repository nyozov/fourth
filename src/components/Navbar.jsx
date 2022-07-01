import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";

const NavContent = () => (
  <div className='z-50'>
    <ul className="px-16 p-8 mt-24 font-light text-gray-600 dark:text-gray-200">
      <Link to="/">
        <li className="cursor-pointer hover:text-gray-400 duration-150">
          Home
        </li>
      </Link>
      <Link to="/projects">
        <li className="cursor-pointer hover:text-gray-400 duration-150">
          Projects
        </li>
      </Link>
      <Link to="/bio">
        <li className="cursor-pointer hover:text-gray-400 duration-150">Bio</li>
      </Link>
      <Link to="/contact">
        <li className="cursor-pointer hover:text-gray-400 duration-150">
          Contact
        </li>
      </Link>
    </ul>
  </div>
);
function Navbar() {
  const spring = {
    type: "spring",
    damping: 15,
    stiffness: 100,
    duration: 1,
    delay: 0.1,
  };
  const [show, setShow] = useState(false);
  return (
    <div>
      {/* medium and large screen */}
      <div className="hidden sm:block fixed z-50 left-0 top-0 h-full">
        <NavContent />
      </div>

      {/* mobile */}
      <div className="text-black dark:text-gray-200 z-30 bg-black  absolute top-0 sm:hidden">
        <div
          id="bgIcon"
          onClick={() => setShow(!show)}
          className={`focus:outline-none text-gray-600 z-40 absolute top-5 left-3 focus:ring-2 p-[2px] rounded hover:shadow-2xl focus:ring-offset-2 focus:ring-gray-800  justify-center items-center sm:hidden cursor-pointer`}
        >
          <svg
            className={`${show ? "hidden" : ""}`}
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="#000"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className=" transform duration-150"
              d="M4 6H20"
              stroke="#000"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M4 12H20"
              stroke="#000"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              className=" transform duration-150"
              d="M4 18H20"
              stroke="#000"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <svg
            className={`${show ? "" : "hidden"}`}
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="#000"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18 6L6 18"
              stroke="#000"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M6 6L18 18"
              stroke="#000"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <AnimatePresence>
          {show && (
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              transition={spring}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -220 }}
              id="MobileNavigation"
              className={`${
                show ? "block absolute top-0" : "hidden"
              } sm:hidden shadow-lg p-6 mx-auto bg-white h-screen`}
            >
              <NavContent />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default Navbar;
