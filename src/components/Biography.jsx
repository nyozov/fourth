import { motion } from "framer-motion";
import { useEffect } from 'react'

function Biography({title}) {

  useEffect(() => {

    document.title = title
   
  }, [title])
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      transition={{ delay: 0.1, duration: 0.5 }}
      animate={{ opacity: 1 }}
      className="w-full h-screen flex flex-col items-center  dark:bg-black"
    >
      <h1 className="text-3xl font-bold mt-24 dark:text-gray-200">Biography</h1>
      <div className='w-1/2 mt-5'>
        <p className='text-sm font-light text-gray-600 dark:text-gray-300'>
          {" "}
          Hi I'm Nick 👋, a detail-oriented web developer with over a year of
          experience and a passion for creating, optimizing, and improving web
          applications. Based out of Toronto, I am a recent web development
          bootcamp graduate ready to take the next step and work with industry
          professionals.
        </p>
      </div>
    </motion.div>
  );
}

export default Biography;
