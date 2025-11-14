"use client";

import { Mail, Facebook, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-white dark:bg-gray-900 rounded-t-2xl p-10 border-t border-gray-100 dark:border-gray-900 z-100">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex items-center justify-between flex-wrap gap-8">
          <div className="max-w-1/4">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-sm border-2 border-orange-500"></div>
              <h2 className="text-xl font-semibold dark:text-white">Opion</h2>
            </div>

            <p className="mt-3 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              Ease of shopping is our main focus. With powerful search features
              and customizable filters, you can easily find the products you are
              looking for.
            </p>

            <div className="flex items-center gap-4 mt-4">
              <Facebook className="text-gray-600 dark:text-gray-300 cursor-pointer" />
              <Instagram className="text-gray-600 dark:text-gray-300 cursor-pointer" />
              <Linkedin className="text-gray-600 dark:text-gray-300 cursor-pointer" />
            </div>

            <p className="mt-4 text-sm font-semibold dark:text-white">
              Subscribe to Newsletter
            </p>

            <div className="relative mt-2">
              <Mail
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                size={16}
              />
              <input
                type="text"
                placeholder="Enter Your Email Here"
                className="w-full pl-10 pr-3 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-sm text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 outline-none"
              />
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-3 dark:text-white">Get Started</h3>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li>Service</li>
              <li>Contact Us</li>
              <li>Affiliate Program</li>
              <li>About Us</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3 dark:text-white">Get Started</h3>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li>Dashboard</li>
              <li>Platform</li>
              <li>Workout Library</li>
              <li>App Design</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3 dark:text-white">Get Started</h3>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li>About Us</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-200 dark:border-gray-800 pt-4 flex items-center justify-between text-sm">
          <p className="text-gray-500 dark:text-gray-400">
            {new Date().getFullYear()} MaxFit
          </p>

          <div className="flex items-center gap-5 text-gray-500 dark:text-gray-400">
            <a href="#">Twitter</a>
            <span className="opacity-60">—</span>
            <a href="#">Instagram</a>
            <span className="opacity-60">—</span>
            <a href="#">Facebook</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
