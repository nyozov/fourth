import { motion } from "framer-motion";
import myProjects from "../myProjects";
import { useEffect } from "react";

function Projects({ title }) {
  useEffect(() => {
    document.title = title;
  }, [title]);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      transition={{ delay: 0.1, duration: 0.5 }}
      animate={{ opacity: 1 }}
      className=""
    >
      <h1 className=" text-3xl w-full pt-24 text-center font-bold dark:text-gray-200">
        Projects
      </h1>
      {myProjects.map((project) => (
        <motion.div
          initial={{ opacity: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="w-full flex justify-center p-4 flex-col items-center mt-10"
        >
          <h2 className="text-left w-full md:w-1/2 text-xl dark:text-gray-300 font-semibold">
            {project.name}
          </h2>
          <a
            target="_blank"
            href={project.siteUrl ? project.siteUrl : project.url}
            className="w-full md:w-1/2 mt-1"
          >
            <img
              className="cursor-pointer filter-change  rounded"
              src={project.img}
            />
          </a>

          <p className="w-full text-sm font-light md:w-1/2 dark:text-gray-300 mt-2">
            {project.desc}
          </p>
          <div className="flex w-1/2 mt-2">
            <a target="_blank" href={project.siteUrl}>
              <button className="bg-black border dark:bg-white dark:text-black border-black hover:border-white duration-150 text-white rounded p-1 shadow w-20">
                Site
              </button>
            </a>
            <a target="_blank" href={project.url}>
              <button className="shadow p-1 ml-2 text-gray-600 dark:text-gray-200 rounded border border-gray-400 hover:border-black dark:hover:border-white duration-150 w-20">
                Code
              </button>
            </a>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}

export default Projects;
