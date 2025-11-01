import React from 'react';
import { Scale, Brain, AlertTriangle } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="pt-56 pb-16 px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-14">
            <h1 className="text-3xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-orange-500 to-orange-700 text-transparent bg-clip-text">
                About
              </span>{' '}
              PakJustice AI
            </h1>
            <div className="h-[2px] w-16 bg-orange-500/60 mx-auto mb-6"></div>
            <p className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto">
              Making legal information accessible to everyone in Pakistan
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-5 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-gray-900/50 p-8 rounded-md border border-gray-800 shadow-lg">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">Our Mission</h2>
            <p className="text-base md:text-lg text-gray-300">
              PakJustice AI aims to democratize access to legal information in Pakistan by leveraging 
              artificial intelligence to provide accurate, easy-to-understand legal guidance. 
              We believe that understanding your rights and the legal system should not require 
              specialized knowledge or expensive consultations.
            </p>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Our <span className="text-orange-500">Technology</span>
            </h2>
            <div className="h-[2px] w-16 bg-orange-500/60 mx-auto mb-6"></div>
            <p className="text-sm md:text-base text-gray-400 max-w-2xl mx-auto mb-10">
              Powered by advanced AI to provide accurate legal information
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-900/50 p-6 rounded-md border border-gray-800 hover:border-orange-500/30 transition-all duration-300 hover:shadow-lg hover:translate-y-[-3px] group">
              <div className="w-12 h-12 rounded-md bg-orange-500/10 flex items-center justify-center mb-4">
                <Brain className="w-6 h-6 text-orange-500" />
              </div>
              <h3 className="text-lg font-semibold mb-3 group-hover:text-orange-400 transition-colors">AI-Powered Assistance</h3>
              <p className="text-sm text-gray-400">
                PakJustice AI uses advanced large language models trained on Pakistani legal texts, 
                case law, and legal procedures. Our AI is designed to provide accurate information 
                while making complex legal concepts understandable to everyone.
              </p>
            </div>

            <div className="bg-gray-900/50 p-6 rounded-md border border-gray-800 hover:border-orange-500/30 transition-all duration-300 hover:shadow-lg hover:translate-y-[-3px] group">
              <div className="w-12 h-12 rounded-md bg-orange-500/10 flex items-center justify-center mb-4">
                <Scale className="w-6 h-6 text-orange-500" />
              </div>
              <h3 className="text-lg font-semibold mb-3 group-hover:text-orange-400 transition-colors">Legal Knowledge Base</h3>
              <p className="text-sm text-gray-400">
                Our system is built on a comprehensive knowledge base of Pakistani laws, including 
                the Constitution of Pakistan, PPC (Pakistan Penal Code), CrPC, and various civil and criminal procedures. This allows 
                us to provide context-specific information tailored to the Pakistani legal system.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer Section */}
      <section className="py-16 px-6 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-red-950/10 p-6 md:p-8 rounded-md border border-red-900/20 shadow-lg">
            <div className="flex flex-col md:flex-row items-start gap-4">
              <div className="w-10 h-10 rounded-md bg-red-500/10 flex items-center justify-center flex-shrink-0 mt-1">
                <AlertTriangle className="w-5 h-5 text-red-500" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3">Important Disclaimer</h3>
                    <p className="text-sm text-gray-300">
                      PakJustice AI provides general legal information for educational purposes only. 
                      The information provided is not a substitute for professional legal counsel, and no attorney-client 
                      relationship is created by using this service. For specific legal issues, please 
                      consult with a qualified legal professional in Pakistan.
                    </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer Accent */}
      <div className="h-[2px] w-full bg-orange-500/30"></div>
    </div>
  );
}
