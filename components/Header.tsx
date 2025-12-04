import React, { useState } from 'react';
import { NAV_LINKS } from '../constants';
import { MenuIcon, XIcon } from './Icons';

interface HeaderProps {
  scrollToSection: (section: string) => void;
}

const Header: React.FC<HeaderProps> = ({ scrollToSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLinkClick = (section: string) => {
    scrollToSection(section);
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-zinc-800 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <span
              onClick={() => handleLinkClick('home')}
              className="text-white text-2xl font-serif font-bold cursor-pointer"
            >
              TPEC
            </span>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleLinkClick(link.section)}
                  className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium uppercase tracking-wider"
                >
                  {link.name}
                </button>
              ))}
              <button
                onClick={() => handleLinkClick('contact')}
                className="bg-rose text-white px-4 py-2 text-sm font-medium uppercase tracking-wider hover:bg-opacity-90 transition-colors"
              >
                Book Now
              </button>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-zinc-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {NAV_LINKS.map((link) => (
              <button
                key={link.name}
                onClick={() => handleLinkClick(link.section)}
                className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium w-full text-left uppercase tracking-wider"
              >
                {link.name}
              </button>
            ))}
            <button
              onClick={() => handleLinkClick('contact')}
              className="bg-rose text-white px-4 py-2 text-sm font-medium uppercase tracking-wider hover:bg-opacity-90 transition-colors w-full mt-2 text-left"
            >
              Book Now
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;