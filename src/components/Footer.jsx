import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";

export default function Footer({absolute}) {
  return (
    <>
      <div className={`flex justify-between w-full ${absolute ? `absolute` : ``} bottom-0 left-0 items-center p-8 text-gray-500 text-light`}>
        <p className="border-t w-full dark:text-gray-100 border-gray-400 text-sm font-light">Written by Nick Yozov</p>


       <div className="flex mt-2 justify-between border-t border-gray-400 items-center">
          <a href="https://github.com/nyozov" target="_blank">
            <div className="text-gray-700 dark:text-white  hover:text-gray-900 dark:hover:text-gray-200 duration-150 cursor-pointer p-[2px] rounded">
              <AiFillGithub size={24} />
            </div>
          </a>
          <a href="https://www.linkedin.com/in/nyozov/" target="_blank">
            <div className="text-gray-700 dark:text-white  hover:text-gray-900 dark:hover:text-gray-200 duration-150 cursor-pointer p-[2px] rounded">
              <AiFillLinkedin size={24} />
            </div>
          </a>
        </div>
      </div>
    </>
  );
}
