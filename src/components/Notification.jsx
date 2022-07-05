import { motion } from "framer-motion";
const Index = ({ flag, setFlag }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
     
      className="w-full flex justify-center items-center mt-6 text-left sm:text-center"
    >
      <div role="alert" className="w-9/12 sm:w-7/12 rounded">
        <div className="border border-gray-100 rounded duration-150 dark:border-gray-800">
          <div className="sm:px-6 p-2 flex mt-4 sm:mt-0 ml-2 sm:ml-0 items-center justify-center bg-green-400 sm:rounded-tl sm:rounded-tr w-12 h-12 sm:h-auto sm:w-auto text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width={40}
              height={40}
              fill="currentColor"
            >
              <path
                className="heroicon-ui"
                d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-2.3-8.7l1.3 1.29 3.3-3.3a1 1 0 0 1 1.4 1.42l-4 4a1 1 0 0 1-1.4 0l-2-2a1 1 0 0 1 1.4-1.42z"
              />
            </svg>
          </div>

          <p className="p-2 text-lg text-gray-600 dark:text-gray-100 font-semibold pb-1">
            Message Sent
          </p>
          <p className="p-2 text-sm text-gray-400 font-normal">
            You have successfully sent an email. Thank you for the
            message/feedback.
          </p>

          <div
            className="border border-transparent hover:border-gray-400 rounded-bl rounded-br text-gray-600 hover:text-gray-700 duration-150 dark:text-gray-400 dark:hover:text-gray-100 p-4 flex justify-center items-center w-full cursor-pointer"
            onClick={() => setFlag(false)}
          >
            
              Dismiss
   
          </div>
        </div>
      </div>
    </motion.div>
  );
};
export default Index;
