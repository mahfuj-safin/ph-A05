import logoText from '../assets/logo-text.png';
import MobileMenu from './MobileMenu';
const Navbar = () => {
  return (
    // NavBar
    <nav className="border-b border-gray-200 bg-white sticky top-0 z-50">
      <div className="px-4 py-4 container mx-auto grid grid-cols-[auto_1fr_auto] items-center md:px-10 md:py-5">
        {/* mobile menu */}
        <MobileMenu />
        {/* logo */}
        <div className="justify-self-center md:justify-self-start">
          <img src={logoText} alt="" className="h-8 w-auto" />
        </div>

        {/* desktop navigation */}
        <div className="hidden justify-center items-center gap-8 md:flex">
          <a className="text-sm text-red-500">Home</a>

          <a className="text-sm text-gray-500 hover:text-gray-900">
            Technologies
          </a>

          <a className="text-sm text-gray-500 hover:text-gray-900">Projects</a>

          <a className="text-sm text-gray-500 hover:text-gray-900">About</a>

          <a className="text-sm text-gray-500 hover:text-gray-900">Contact</a>
        </div>

        {/* sign in & sign up */}

        <div className="flex items-center gap-2 md:gap-4 ml-auto">
          <button className="text-xs font-medium text-gray-700 hover:text-gray-900 cursor-pointer md:text-sm">
            Sign In
          </button>
          <button className="text-xs font-semibold text-white rounded-full px-3 py-1.5 bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 hover:opacity-90 cursor-pointer md:px-5 md:py-2 md:text-sm">
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
