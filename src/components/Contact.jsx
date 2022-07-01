import axios from "axios";
import { useState } from "react";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";

export default function Contact() {
  const [charNumber, setCharNumber] = useState(200);
  const [formResults, setFormResults] = useState({
    name: "",
    message: "",
  });
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
    <div className="relative z-10">
      {!flag && (
        <div className="w-full  flex flex-col justify-center items-center mt-24">
          <h1 className="text-3xl font-bold">Contact Info</h1>
          <div className='flex pt-6 justify-between items-center'>
            <a href="https://github.com/nyozov" target="_blank">
              <div className="text-black border hover:border-gray-600 duration-150 cursor-pointer p-[2px] rounded">
                <AiFillGithub size={36} />
              </div>
            </a>
            <a href="https://www.linkedin.com/in/nyozov/" target="_blank">
              <div className="text-black border hover:border-gray-600 duration-150 cursor-pointer p-[2px] rounded">
                <AiFillLinkedin size={36} />
              </div>
            </a>
          </div>
          <p className="font-light text-gray-600 mt-6 text-sm">
            Send me a message below
          </p>
          <form
            onSubmit={handleSubmit}
            className="w-3/4  md:w-1/2 max-w-lg mt-6"
            autoComplete="off"
          >
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-gray-600 text-xs font-bold mb-2"
                  for="grid-password"
                >
                  E-mail
                </label>
                <input
                  className="appearance-none block w-full white-glassmorphism text-gray-600 border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-gray-600 duration-150"
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
                  className="block uppercase tracking-wide text-gray-600 text-xs font-bold mb-2"
                  for="message"
                >
                  Message
                </label>
                <textarea
                  className=" z-index-behind no-resize appearance-none block w-full white-glassmorphism text-gray-600 border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-gray-600 duration-150 h-48 resize-none"
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
                className="bg-black font-semibold rounded-lg text-white hover:bg-gray-800 p-3 duration-150 shadow flex justify-center w-36 items-center"
              >
                {!loading && <p>Send</p>}
                {loading && (
                  <svg
                    role="status"
                    class="w-[23.5px] h-[23.5px] mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="currentColor"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentFill"
                    />
                  </svg>
                )}
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
