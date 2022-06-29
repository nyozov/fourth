function Navbar() {
  return (
    <div className="fixed left-0 top-0 h-full">
      <h2 className="p-8 px-16 text-3xl mt-10 cursor-pointer">Nick Yozov</h2>
      <ul className="px-16 p-8 text-sm font-light text-gray-600">
        <li className="cursor-pointer hover:text-gray-400 duration-150">
          Projects
        </li>
        <li className="cursor-pointer hover:text-gray-400 duration-150">Bio</li>
        <li className="cursor-pointer hover:text-gray-400 duration-150">
          Contact
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
