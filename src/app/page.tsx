"use client";

import React from 'react';
import Link from 'next/link';
import { Scale, ArrowRight, FileText, Landmark, Shield, Users, ShoppingBag, Briefcase, HomeIcon, Globe, MessageSquare } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">

      {/* Hero Section */}
      <section className="relative pt-56 pb-16 px-6">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-gray-800/20 via-black to-black"></div>
        </div>
        <div className="container mx-auto max-w-5xl relative z-10">
          <div className="text-center mb-14">
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-orange-500 to-orange-700 text-transparent bg-clip-text">
                Legal Assistance
              </span>{' '}
              <br className="md:hidden" />
              <span>
                Simplified with AI
              </span>
            </h1>
            <div className="h-[2px] w-16 bg-orange-500/60 mx-auto mb-6"></div>
            <p className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">
              PakJustice AI is your AI-powered legal assistant, making Pakistani law accessible and understandable for everyone.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                href="/chat" 
                className="bg-orange-600 hover:bg-orange-700 text-white font-medium py-3 px-6 rounded-md transition-all duration-300 flex items-center justify-center gap-2 shadow-md hover:shadow-lg hover:shadow-orange-600/20 hover:translate-y-[-1px]"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Start Legal Chat</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link 
                href="/about" 
                className="bg-transparent text-white font-medium py-3 px-6 rounded-md transition-all duration-300 flex items-center justify-center gap-2 border border-gray-700 hover:border-orange-500/30 hover:bg-gray-900/30 hover:translate-y-[-1px]"
              >
                <span>Learn More</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              How PakJustice AI Can <span className="text-orange-500">Help You</span>
            </h2>
            <div className="h-[2px] w-16 bg-orange-500/60 mx-auto mb-6"></div>
              <p className="text-sm md:text-base text-gray-400 max-w-2xl mx-auto mb-10">
              Our AI-powered platform provides assistance across various legal aspects
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Feature 1 */}
            <div className="bg-gray-900/50 p-6 rounded-md border border-gray-800 hover:border-orange-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-orange-600/5 hover:translate-y-[-3px] group">
              <div className="w-12 h-12 rounded-md bg-orange-500/10 flex items-center justify-center mb-4">
                <MessageSquare className="w-6 h-6 text-orange-500" />
              </div>
              <h3 className="text-lg font-semibold mb-3 group-hover:text-orange-400 transition-colors">Legal Information</h3>
              <p className="text-sm text-gray-400">
                Get clear, concise explanations about Pakistani laws, legal procedures, and your rights in simple language.
              </p>
            </div>
            
            {/* Feature 2 */}
            <div className="bg-gray-900/50 p-6 rounded-md border border-gray-800 hover:border-orange-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-orange-600/5 hover:translate-y-[-3px] group">
              <div className="w-12 h-12 rounded-md bg-orange-500/10 flex items-center justify-center mb-4">
                <Scale className="w-6 h-6 text-orange-500" />
              </div>
              <h3 className="text-lg font-semibold mb-3 group-hover:text-orange-400 transition-colors">Document Guidance</h3>
              <p className="text-sm text-gray-400">
                Understand legal documents, contracts, and forms with AI-powered explanations and summaries.
              </p>
            </div>
            
            {/* Feature 3 */}
            <div className="bg-gray-900/50 p-6 rounded-md border border-gray-800 hover:border-orange-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-orange-600/5 hover:translate-y-[-3px] group">
              <div className="w-12 h-12 rounded-md bg-orange-500/10 flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-orange-500" />
              </div>
              <h3 className="text-lg font-semibold mb-3 group-hover:text-orange-400 transition-colors">Rights Awareness</h3>
              <p className="text-sm text-gray-400">
                Learn about your legal rights and protections under Pakistani law in various situations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Topics Grid */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Legal Topics We Cover</h2>
            <div className="h-[2px] w-16 bg-orange-500/60 mx-auto mb-6"></div>
            <p className="text-sm md:text-base text-gray-400 max-w-2xl mx-auto mb-10">
              PakJustice AI provides information on a wide range of legal topics relevant to Pakistani citizens.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[
              { title: "Constitutional Law", desc: "Fundamental rights, directive principles, and constitutional remedies", icon: <Landmark className="w-5 h-5" /> },
              { title: "Criminal Law", desc: "PPC, CrPC, and criminal procedures in Pakistan", icon: <Shield className="w-5 h-5" /> },
              { title: "Civil Law", desc: "Property rights, contracts, and civil procedures", icon: <FileText className="w-5 h-5" /> },
              { title: "Family Law", desc: "Marriage, divorce, adoption, and succession laws", icon: <Users className="w-5 h-5" /> },
              { title: "Consumer Law", desc: "Consumer protection and dispute resolution", icon: <ShoppingBag className="w-5 h-5" /> },
              { title: "Labor Law", desc: "Employment rights and workplace regulations", icon: <Briefcase className="w-5 h-5" /> },
              { title: "Property Law", desc: "Real estate, property rights, and transactions", icon: <HomeIcon className="w-5 h-5" /> },
              { title: "Cyber Law", desc: "Digital rights, online transactions, and cyber crimes", icon: <Globe className="w-5 h-5" /> }
            ].map((topic, index) => (
              <div 
                key={index} 
                className="bg-gray-900/50 p-4 rounded-md border border-gray-800 hover:border-orange-500/30 transition-all duration-300 hover:shadow-lg hover:translate-y-[-3px] group"
              >
                <div className="flex items-start space-x-3 mb-2">
                  <div className="w-8 h-8 rounded-md bg-orange-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="text-orange-500">
                      {topic.icon}
                    </div>
                  </div>
                  <h3 className="text-base font-semibold text-white group-hover:text-orange-400 transition-colors">
                    {topic.title}
                  </h3>
                </div>
                <p className="text-xs text-gray-400 ml-11">
                  {topic.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-6">
          <div className="bg-gray-900/50 rounded-md p-8 md:p-10 shadow-lg border border-gray-800">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="md:w-2/3">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">Ready to Get <span className="text-orange-500">Legal Assistance?</span></h2>
                <p className="text-sm md:text-base text-gray-300 mb-0 md:mb-4 max-w-xl">
                  Start a conversation with PakJustice AI now and get the legal information you need.
                </p>
              </div>
              <div className="md:w-1/3 flex justify-center md:justify-end">
                <Link 
                  href="/chat" 
                  className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-md text-base transition-all duration-300 flex items-center space-x-2 shadow-md hover:shadow-lg hover:shadow-orange-600/20 hover:translate-y-[-1px] group"
                >
                  <span>Chat Now</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
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
