"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Scale, MessageSquare, Info, Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/90 backdrop-blur-md shadow-lg' : 'bg-black/50 backdrop-blur-sm'}`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center">
              <Scale className="w-5 h-5 text-white" />
            </div>
            <span className="text-white text-xl font-bold">
              <span className="text-primary-500">Pak</span>Justice AI
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              href="/" 
              className={`flex items-center space-x-1 ${pathname === '/' ? 'text-primary-500' : 'text-gray-300 hover:text-primary-400'} transition-colors duration-300`}
            >
              <span>Home</span>
            </Link>
            <Link 
              href="/chat" 
              className={`flex items-center space-x-1 ${pathname === '/chat' ? 'text-primary-500' : 'text-gray-300 hover:text-primary-400'} transition-colors duration-300`}
            >
              <MessageSquare className="w-4 h-4" />
              <span>Legal Assistant</span>
            </Link>
            <Link 
              href="/about" 
              className={`flex items-center space-x-1 ${pathname === '/about' ? 'text-primary-500' : 'text-gray-300 hover:text-primary-400'} transition-colors duration-300`}
            >
              <Info className="w-4 h-4" />
              <span>About</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMenu}
              className="text-gray-300 focus:outline-none"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-md">
          <div className="container mx-auto px-6 py-4">
            <div className="flex flex-col space-y-4">
              <Link 
                href="/" 
                className={`flex items-center space-x-2 p-2 rounded-lg ${pathname === '/' ? 'text-primary-500 bg-gray-900' : 'text-gray-300 hover:bg-gray-900 hover:text-primary-400'} transition-colors duration-300`}
                onClick={() => setIsMenuOpen(false)}
              >
                <span>Home</span>
              </Link>
              <Link 
                href="/chat" 
                className={`flex items-center space-x-2 p-2 rounded-lg ${pathname === '/chat' ? 'text-primary-500 bg-gray-900' : 'text-gray-300 hover:bg-gray-900 hover:text-primary-400'} transition-colors duration-300`}
                onClick={() => setIsMenuOpen(false)}
              >
                <MessageSquare className="w-5 h-5" />
                <span>Legal Assistant</span>
              </Link>
              <Link 
                href="/about" 
                className={`flex items-center space-x-2 p-2 rounded-lg ${pathname === '/about' ? 'text-primary-500 bg-gray-900' : 'text-gray-300 hover:bg-gray-900 hover:text-primary-400'} transition-colors duration-300`}
                onClick={() => setIsMenuOpen(false)}
              >
                <Info className="w-5 h-5" />
                <span>About</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
