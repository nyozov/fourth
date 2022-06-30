import React from "react";
import myProjects from "../myProjects";
import { motion } from "framer-motion";

function Projects() {
  return (
    <div>
      {myProjects.map((project) => (
        <motion.div
        initial={{opacity:0}}
       
        animate={{opacity:1}}
        
        className="w-full flex justify-center p-4 flex-col items-center mt-14">
          <h2 className="text-left w-full md:w-1/2 text-xl font-semibold">
            {project.name}
          </h2>
          <img className="w-full md:w-1/2 mt-1 rounded" src={project.img} />
          <p className="w-full md:w-1/2 mt-2">{project.desc}</p>
        </motion.div>
      ))}
    </div>
  );
}

export default Projects;
