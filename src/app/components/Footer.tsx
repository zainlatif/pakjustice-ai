"use client";

import React from 'react';
import Link from 'next/link';
import { Scale, Mail, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-gray-400 pt-24 pb-12 px-6 border-t border-gray-800">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-6">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500 to-orange-700 flex items-center justify-center">
                <Scale className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-white text-2xl font-semibold">
                PakJustice AI
              </h3>
            </div>
            <p className="mb-8 text-lg text-gray-300 max-w-md">
              Your AI-powered legal assistant for Pakistani law information and guidance.
            </p>
            <div className="flex space-x-5">
              <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-orange-500 transition-colors duration-300">
                <Mail className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-orange-500 transition-colors duration-300">
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div className="md:col-span-3">
            <h3 className="text-white text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/" className="hover:text-orange-400 transition-colors duration-300 flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link href="/chat" className="hover:text-orange-400 transition-colors duration-300 flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
                  <span>Legal Assistant</span>
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-orange-400 transition-colors duration-300 flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
                  <span>About</span>
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="md:col-span-3">
            <h3 className="text-white text-lg font-semibold mb-6">Disclaimer</h3>
            <p className="text-sm text-gray-400">
              PakJustice AI provides legal information about Pakistani laws for educational purposes only. For specific legal concerns, please consult a qualified
              legal professional in Pakistan.
            </p>
            <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-700 to-transparent my-6"></div>
            <p className="text-sm text-gray-500">
              &copy; {new Date().getFullYear()} PakJustice AI. All rights reserved. Developed by Zain Latif.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
