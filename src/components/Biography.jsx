import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import CurvedArrow from "react-curved-arrow";

function Biography({ title, lightMode }) {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };
  useEffect(() => {
    document.title = title;
  }, [title]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      transition={{ delay: 0.1, duration: 0.5 }}
      animate={{ opacity: 1 }}
      className="w-full h-screen flex flex-col items-center  dark:bg-black"
    >
      <h1 className="text-3xl font-bold mt-24 dark:text-gray-200">Biography</h1>
      <div className="w-3/4 sm:w-1/2 mt-5">
        <p className="text-sm font-light text-gray-600 dark:text-gray-300">
          {" "}
          Full stack developer, documentation reader, div centerer. Hi I'm Nick
          👋, a detail-oriented web developer with over a year of experience and
          a passion for creating, optimizing, and improving web applications.
        </p>
        <br />
        <p className="text-sm font-light text-gray-600 dark:text-gray-300">
          I code pretty much everyday, whether it is coding challenges on{" "}
          <a
            className="text-blue-400"
            target="_blank"
            href="https://www.codewars.com/users/nyozov"
          >
            Codewars
          </a>
          , frontend on{" "}
          <a
            className="text-blue-400"
            target="_blank"
            href="https://www.frontendmentor.io/profile/nyozov"
          >
            FrontedMentor
          </a>
          , or creating the projects that can be seen{" "}
          <span
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
            className="arrow-start sm:text-blue-400"
          >
            here
          </span>{" "}
          or on my{" "}
          <a
            target="_blank"
            href="https://github.com/nyozov"
            className="text-blue-400"
          >
            github
          </a>
          .
        </p>
        {isHovering && (
          <div className="hidden sm:block bg-white">
            <CurvedArrow
              color={`${lightMode === "light" ? `black` : `white`}`}
              toOffsetX={35}
              toOffsetY={-10}
              fromOffsetY={-10}
              middleY={-250}
              middleX={-150}
              dynamicUpdate
              width={1}
              fromSelector=".arrow-start"
              toSelector=".arrow-end"
            />
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default Biography;
