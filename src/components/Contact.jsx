import axios from "axios";
import { useState, useEffect } from "react";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { motion } from "framer-motion";
import Notification from "./Notification";
import Footer from "./Footer";
export default function Contact({ title }) {
  const [charNumber, setCharNumber] = useState(200);
  const [formResults, setFormResults] = useState({
    name: "",
    message: "",
  });

  useEffect(() => {
    document.title = title;
  }, [title]);

  const [flag, setFlag] = useState(false);
  const handleWordCount = (e) => {
    const charCount = e.target.value.length;
    const charLeft = 200 - charCount;
    setCharNumber(charLeft);
  };
  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    if (name === "message") {
      handleWordCount(event);
    }

    setFormResults((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);

    console.log(formResults);

    const { name, message } = formResults;

    axios
      .post("https://portfolio-api.netlify.app/.netlify/functions/api/email", {
        name,
        message,
      })
      .then((res) => {
        if (res.data.success) {
          setCharNumber(200);
          setTimeout(() => setLoading(false), 1000);
          setTimeout(() => setFlag(true), 1000);
        } else {
          console.log("email send error");
        }
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      transition={{ delay: 0.1, duration: 0.5 }}
      animate={{ opacity: 1 }}
      className="relative h-screen "
    >
      <div className="w-full flex flex-col justify-center items-center pt-24">
        <h1 className="text-3xl font-bold dark:text-gray-200">Contact Info</h1>
        <div className="flex pt-6 justify-between items-center">
          <a href="https://github.com/nyozov" target="_blank">
            <div className="text-black dark:text-white border hover:border-gray-600 dark:border-gray-600 dark:hover:border-white duration-150 cursor-pointer p-[2px] rounded">
              <AiFillGithub size={36} />
            </div>
          </a>
          <a href="https://www.linkedin.com/in/nyozov/" target="_blank">
            <div className="text-black dark:text-white border hover:border-gray-600 dark:border-gray-600 dark:hover:border-white duration-150 cursor-pointer p-[2px] rounded">
              <AiFillLinkedin size={36} />
            </div>
          </a>
        </div>
        <p className="font-light text-gray-600 mt-6 text-sm dark:text-gray-300">
          Send me a message below
        </p>
        {!flag && (
          <form
            onSubmit={handleSubmit}
            className="w-3/4  md:w-1/2 max-w-lg mt-6"
            autoComplete="off"
          >
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-gray-600 dark:text-gray-300 text-xs font-bold mb-2"
                  for="grid-password"
                >
                  E-mail
                </label>
                <input
                  className="appearance-none block w-full  text-gray-600 dark:text-gray-300 border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-gray-600  dark:bg-[rgba(255,255,255,0.2)] dark:backdrop-blur duration-150"
                  onChange={handleChange}
                  type="text"
                  id="name"
                  name="name"
                  maxLength="50"
                  required
                  placeholder="Your email/name"
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-gray-600 dark:text-gray-300 text-xs font-bold mb-2"
                  for="message"
                >
                  Message
                </label>
                <textarea
                  className="no-resize appearance-none block w-full dark:text-gray-300 dark:bg-[rgba(255,255,255,0.2)]  text-gray-600 border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-gray-600 duration-150 h-48 resize-none"
                  onChange={handleChange}
                  maxLength="200"
                  id="message"
                  name="message"
                  required
                  placeholder="Your message"
                />
                <div
                  className={
                    !charNumber
                      ? `text-red-600 text-sm text-right px-2 mt-[-40px]`
                      : `text-sm text-gray-400 text-right px-2 mt-[-40px]`
                  }
                >
                  {charNumber}
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center w-full">
              <button
                type="submit"
                className="bg-black dark:bg-white dark:text-black dark:hover:bg-gray-200 font-semibold rounded-lg text-white hover:bg-gray-800 p-2 duration-150 shadow flex justify-center w-24 h-10 items-center"
              >
                {!loading && <p>Send</p>}
                {loading && (
                 <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
                
                )}
              </button>
            </div>
          </form>
        )}
      </div>

  
        {flag && <Notification flag={flag} setFlag={setFlag} />}
     <Footer absolute/>
    </motion.div>
  );
}
