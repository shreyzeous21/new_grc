import React from 'react';
import Link from 'next/link';
import { Menu, Search, User } from 'lucide-react';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white shadow">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Left: Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <a className="text-xl font-bold">Logo</a>
            </Link>
          </div>

          {/* Center: Menu Bar */}
          <div className="hidden md:flex space-x-4 relative">
            {['Home', 'Services', 'About', 'Contact'].map((menu) => (
              <div key={menu} className="group relative">
                <Link href={`/${menu.toLowerCase()}`}>
                  <a className="px-3 py-2 text-gray-700 hover:text-gray-900">
                    {menu}
                  </a>
                </Link>
                {/* Dropdown */}
                <div className="absolute top-full left-0 w-screen bg-white shadow-md hidden group-hover:block z-10">
                  <div className="container mx-auto px-4 py-6 grid grid-cols-4 gap-4">
                    {/* Replace the below items with your actual dropdown content */}
                    {[1, 2, 3, 4].map((item) => (
                      <div key={item}>
                        <h3 className="text-lg font-semibold mb-2">Category {item}</h3>
                        <ul>
                          {[1, 2, 3].map((subItem) => (
                            <li key={subItem}>
                              <Link href="#">
                                <a className="block px-3 py-1 text-gray-600 hover:bg-gray-100 rounded">
                                  Subitem {subItem}
                                </a>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right: Icons */}
          <div className="flex space-x-4">
            <button aria-label="Menu" className="md:hidden">
              <Menu className="w-6 h-6 text-gray-700" />
            </button>
            <button aria-label="Search">
              <Search className="w-6 h-6 text-gray-700" />
            </button>
            <button aria-label="User">
              <User className="w-6 h-6 text-gray-700" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
