"use client";
import Link from "next/link";
import Logo from "./Logo";
import {
  DribbbleIcon,
  GithubIcon,
  LinkedinIcon,
  MoonIcon,
  SunIcon,
  TwitterIcon,
} from "../Icons";
import { FaFacebook, FaYoutube, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import siteMetadata from "@/src/utils/siteMetaData";
import { useThemeSwitch } from "../Hooks/useThemeSwitch";
import { useState } from "react";
import { cx } from "@/src/utils";

const Header = () => {
  const [mode, setMode] = useThemeSwitch();
  const [click, setClick] = useState(false);

  const toggle = () => {
    setClick(!click);
  };
  return (
    <header className="w-full p-4  px-5 sm:px-10 flex items-center justify-between">
      <Logo />

      <button
        className="inline-block sm:hidden z-50"
        onClick={toggle}
        aria-label="Hamburger Menu"
      >
        <div className="w-6 cursor-pointer transition-all ease duration-300">
          <div className="relative">
            <span
              className="absolute top-0 inline-block w-full h-0.5 bg-dark dark:bg-light rounded transition-all ease duration-200"
              style={{
                transform: click
                  ? "rotate(-45deg) translateY(0)"
                  : "rotate(0deg) translateY(6px)",
              }}
            >
              &nbsp;
            </span>
            <span
              className="absolute top-0 inline-block w-full h-0.5 bg-dark dark:bg-light rounded transition-all ease duration-200"
              style={{
                opacity: click ? 0 : 1,
              }}
            >
              &nbsp;
            </span>
            <span
              className="absolute top-0 inline-block w-full h-0.5 bg-dark dark:bg-light rounded transition-all ease duration-200"
              style={{
                transform: click
                  ? "rotate(45deg) translateY(0)"
                  : "rotate(0deg) translateY(-6px)",
              }}
            >
              &nbsp;
            </span>
          </div>
        </div>
      </button>

      <nav
        className=" w-max py-3 px-6 sm:px-8 border border-solid border-dark rounded-full font-medium capitalize  items-center flex  sm:hidden
        fixed top-6 right-1/2 translate-x-1/2 bg-light/80 backdrop-blur-sm z-50
        transition-all ease duration-300
        "
        style={{
          top: click ? "1rem" : "-5rem",
        }}
      >
        <Link href="/" className="mr-2">
          Home
        </Link>
        <Link href="/classes" className="mx-2">
          Classes
        </Link>
        <Link href="/e-learning" className="mx-2">
          E-learning
        </Link>
        <Link href="/contact" className="mx-2">
          Contact
        </Link>
        <button
          onClick={() => setMode(mode === "light" ? "dark" : "light")}
          className={cx(
            "w-6 h-6 ease ml-2 flex items-center justify-center rounded-full p-1",
            mode === "light" ? "bg-dark text-light" : "bg-light text-dark"
          )}
          aria-label="theme-switcher"
        >
          {mode === "light" ? (
            <MoonIcon className={"fill-dark"} />
          ) : (
            <SunIcon className={"fill-dark"} />
          )}
        </button>
      </nav>

      <nav
        className="w-max py-3 px-8 border border-solid border-dark rounded-full font-medium capitalize  items-center hidden sm:flex
        fixed top-6 right-1/2 translate-x-1/2 bg-light/80 backdrop-blur-sm z-50"
      >
        <Link href="/" className="mr-2">
          Home
        </Link>
        <Link href="/classes" className="mx-2">
          Classes
        </Link>
        <Link href="/e-learning" className="mx-2">
          E-learning
        </Link>
        <Link href="/contact" className="mx-2">
          Contact
        </Link>
        <button
          onClick={() => setMode(mode === "light" ? "dark" : "light")}
          className={cx(
            "w-6 h-6 ease ml-2 flex items-center justify-center rounded-full p-1",
            mode === "light" ? "bg-dark text-light" : "bg-light text-dark"
          )}
          aria-label="theme-switcher"
        >
          {mode === "light" ? (
            <MoonIcon className={"fill-dark"} />
          ) : (
            <SunIcon className={"fill-dark"} />
          )}
        </button>
      </nav>
      <div className=" hidden sm:flex items-center">
        <a
          href={siteMetadata.twitter}
          className="inline-block w-6 h-6 mr-4"
          aria-label="Reach out to me via Twitter"
          target="_blank"
        >
          <FaXTwitter
            size={30}
            className="text-black dark:text-white hover:scale-125 transition-all ease duration-200"
          />
        </a>
        <a
          href={siteMetadata.facebook}
          className="inline-block w-6 h-6 mr-4"
          aria-label="Check my profile on Dribbble"
          target="_blank"
        >
          <FaFacebook
            size={30}
            className="text-blue-600 hover:scale-125 transition-all ease duration-200"
          />
        </a>
        <a href="https://hds-e-learning.vercel.app/" target="_blank">
          <button
            className="hidden md:inline ml-4 bg-purple-800 
               text-white px-3 lg:px-4 ly-2 lg:py-2 rounded-full
               dark:bg-purple-700 hover:scale-110 transition-all ease duration-200"
          >
            Register e-learning
          </button>
        </a>
      </div>
    </header>
  );
};

export default Header;
