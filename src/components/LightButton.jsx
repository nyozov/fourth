import { MdDarkMode, MdLightMode } from "react-icons/md";

function LightButton({ lightMode, setLightMode }) {
  return (
    <div
      onClick={() =>
        lightMode === "dark" ? setLightMode("light") : setLightMode("dark")
      }
      className="absolute z-10 top-5 right-5 border p-2 rounded-lg border-gray-400 text-gray-800 cursor-pointer hover:border-black dark:border-gray-400 dark:text-gray-200 dark:hover:border-gray-200 duration-150"
    >
      {lightMode === "dark" ? <MdLightMode/> : <MdDarkMode />}
    </div>
  );
}

export default LightButton;
