import { Link } from "react-router-dom";

export default function NavContent({ setShow }) {
  return (
    <div className="z-50">
      <ul className="px-16 p-8 mt-24 font-light text-gray-600 dark:text-gray-200">
        <Link to="/">
          <li
            onClick={() => setShow(false)}
            className="cursor-pointer p-1 sm:p-0 hover:text-gray-400 duration-150"
          >
            Home
          </li>
        </Link>
        <Link to="/projects">
          <li
            onClick={() => setShow(false)}
            className="cursor-pointer p-1 sm:p-0 hover:text-gray-400 duration-150 arrow-end"
          >
            Projects
          </li>
        </Link>
        <Link to="/bio">
          <li
            onClick={() => setShow(false)}
            className="cursor-pointer p-1 sm:p-0 hover:text-gray-400 duration-150"
          >
            Biography
          </li>
        </Link>
        <Link to="/contact">
          <li
            onClick={() => setShow(false)}
            className="cursor-pointer p-1 sm:p-0 hover:text-gray-400 duration-150"
          >
            Contact
          </li>
        </Link>
      </ul>
    </div>
  );
}
