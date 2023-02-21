import { useState } from "react";
import Image from "next/image";
import {
  FaEnvelope,
  FaFacebook,
  FaFacebookSquare,
  FaPhoneAlt,
} from "react-icons/fa";
import { FiFacebook, FiMail } from "react-icons/fi";
import Link from "next/link";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="mx-auto max-w-6xl px-4">
      <div className="w-full bg-white/5 rounded-2xl mt-4 backdrop-blur-xl backdrop-brightness-125 shadow-2xl">
        <div className="py-5 mx-auto px-8">
          <div className="relative flex items-center justify-between">
            <div className="flex items-center">
              <Link
                href="/"
                aria-label="Home"
                title="Home"
                className="inline-flex items-center mr-8">
                <Image
                  src="/logo.webp"
                  width={75}
                  height={75}
                  alt="Savvy Electrical and Data Logo"
                />
                <span className="ml-4 text-xl font-bold tracking-tight text-black hover:text-gray-500 md:flex hidden">
                  Savvy Electrical and Data
                </span>
              </Link>
            </div>
            <div className="sm:flex sm:items-center sm:justify-between">
              <div className="flex space-x-6 sm:justify-center sm:mt-0">
                <a
                  href="https://www.facebook.com/savvyelectricalanddata/"
                  className="text-black hover:text-gray-500 dark:hover:text-black">
                  <FaFacebook className="w-6 h-6" />
                </a>
                <a
                  href="mailto:savvyelectricalanddata@outlook.com.au"
                  className="text-black hover:text-gray-500 dark:hover:text-black">
                  <FaEnvelope className="w-6 h-6" />
                </a>
                <a
                  href="tel:0421197325"
                  className="text-black hover:text-gray-500 dark:hover:text-black">
                  <FaPhoneAlt className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
