import { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { FaXmark } from 'react-icons/fa6';

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = ['Home', 'Technologies', 'Projects', 'About', 'Contact'];

  return (
    <div className="relative md:hidden">
      {/* hamburger button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
        className="text-xl text-gray-700"
      >
        {isOpen ? <FaXmark /> : <FaBars />}
      </button>

      {/* mobile menu */}
      {isOpen && (
        <div className="absolute rounded-xl bg-white p-5 shadow-lg border border-gray-200 w-56 left-0 top-10 z-50">
          <div className="flex flex-col gap-4">
            {menuItems.map(item => (
              <a
                href=""
                key={item}
                onClick={() => setIsOpen(false)}
                className={`text-sm ${item === 'Home' ? 'font-medium text-red-500' : 'text-gray-600 hover:text-gray-900'}`}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
