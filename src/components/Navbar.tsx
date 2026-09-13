import logoText from '../assets/logo-text.png';
const Navbar = () => {
  return (
    // NavBar
    <nav className="border-b border-gray-200 bg-white">
      <div className="flex justify-between items-center px-10 py-5 container mx-auto">
        {/* logo */}
        <div>
          <img src={logoText} alt="" />
        </div>

        {/* Navigation Item */}
        <div className="flex items-center gap-8">
          <a className="text-sm text-red-500">Home</a>
          <a className="text-sm text-gray-500">Technologies </a>
          <a className="text-sm text-gray-500">Projects</a>
          <a className="text-sm text-gray-500">About</a>
          <a className="text-sm text-gray-500">Contact</a>
        </div>

        {/* sing in & sing up button*/}

        <div className="flex items-center gap-4">
          <button className="text-sm text-gray-700">Sing In</button>
          <button className="text-sm text-white rounded-full px-5 py-2 bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 ">
            Sing Up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
